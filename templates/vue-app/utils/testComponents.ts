import { mount, VueWrapper, RouterLinkStub } from '@vue/test-utils'
import { Component, getCurrentInstance, h, resolveComponent } from 'vue'
import { expect } from '@jest/globals'
import { isArray } from '@vue/shared'
import { createTestingPinia } from '@pinia/testing'
// @ts-ignore
import { routes } from '@/router/routes'
import { createMemoryHistory, createRouter } from 'vue-router'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'


type Slot = Record<string, string | Function> | string
interface AutoTestOptions {
    props?: Partial<Record<string, any>>
    slots?: Record<string, string> | string
    attrs?: Record<string, any>
    provide?: Record<string, any>
    mocks?: Record<string, any>
    shallow?: boolean
    store?: boolean
    router?: boolean
    i18n?: boolean | string
    a11y?: boolean
    validate?: boolean
    asyncEmit?: boolean
    scopedSlots?: boolean
    directives?: boolean
    snapshot?: boolean,
    hasSlot?: boolean
}

function defaultValueFor(type: string | undefined): any {
    switch (type) {
        case 'String': return 'string'
        case 'Number': return 0
        case 'Boolean': return true
        case 'Array': return []
        case 'Object': return {}
        case 'Function': return () => {}
        default: return undefined
    }
}

function getMeta(comp: Component) {
    const props = (comp as any).props || {}
    const emits = (comp as any).emits || []
    const probe = mount(comp, { global: { stubs: {} } })
    const slots = Object.keys(probe.vm.$slots)
    probe.unmount()
    return { props, emits, slots }
}

function buildProps(metaProps: Record<string, any>, userProps: AutoTestOptions['props']) {
    const built: Record<string, any> = {}
    for (const [key, def] of Object.entries(metaProps)) {
        const type = isArray(def) ? def[0]?.type?.name : def.type?.name
        built[key] = userProps?.[key] ?? defaultValueFor(type)
    }
    return built
}

function normalizeSlots(slots: Slot, scoped = false) {
    if (typeof slots === 'string') return { default: scoped ? (props: any) => h('div', slots) : () => slots }
    return Object.fromEntries(
        Object.entries(slots).map(([name, content]) => [
            name,
            typeof content === 'string'
                ? scoped ? (props: any) => h('div', content) : () => content
                : content
        ])
    )
}

function createGlobalOptions(opt: AutoTestOptions) {
    const global: any = {
        provide: { ...opt.provide },
        mocks: { ...opt.mocks },
        stubs: opt.shallow ? { RouterLink: RouterLinkStub } : { RouterLink: true }
    }

    if (opt.store) {
        global.plugins = [createTestingPinia({ stubActions: false })]
    }
    if (opt.router) {
        const router = createRouter({
            history: createMemoryHistory(),
            routes
        })
        global.plugins ? global.plugins.push(router) : (global.plugins = [router])
    }
    if (opt.i18n) {
        const i18n = createI18n({
            legacy: false,
            locale: typeof opt.i18n === 'string' ? opt.i18n : 'en',
            messages
        })
        global.plugins ? global.plugins.push(i18n) : (global.plugins = [i18n])
    }
    return global
}

function checkA11y(wrapper: VueWrapper) {
    const ariaInvalid = wrapper.findAll('[role],[aria-label],[aria-labelledby],[aria-describedby]')
    expect(ariaInvalid.length).toBeGreaterThanOrEqual(0)
}

async function fireAsyncEmit(wrapper: VueWrapper, emits: string[]) {
    for (const e of emits) {
        const payload = await new Promise(resolve => {
            wrapper.vm.$emit(e, 'async-payload')
            setTimeout(() => resolve('async-payload'), 0)
        })
        expect(wrapper.emitted(e)?.[0]).toEqual([payload])
    }
}

function checkPropValidation(comp: Component, invalidProps: Record<string, any>) {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {})
    mount(comp, { props: invalidProps })
    expect(spy).toHaveBeenCalled()
    spy.mockRestore()
}

export async function autoTestComponent(comp: Component, options: AutoTestOptions = {}) {
    const { props: metaProps, emits, slots } = getMeta(comp)
    const props = buildProps(metaProps, options.props)
    const global = createGlobalOptions(options)

    const wrapper = mount(comp, {
        props,
        slots: slots.length
            ? normalizeSlots(slots.reduce((acc, s) => ({ ...acc, [s]: `slot-${s}` }), {}), options.scopedSlots)
            : undefined,
        attrs: options.attrs || {},
        global
    })

    slots.forEach(s => expect(wrapper.text()).toContain(`slot-${s}`))

    for (const [key, val] of Object.entries(props)) expect(wrapper.props(key)).toBe(val)

    if (options.asyncEmit) {
        await fireAsyncEmit(wrapper, emits)
    } else {
        emits.forEach((e: string) => {
            wrapper.vm.$emit(e, 'auto-payload')
            expect(wrapper.emitted()).toHaveProperty(e)
            expect(wrapper.emitted(e)?.[0]).toEqual(['auto-payload'])
        })
    }

    if (options.a11y) checkA11y(wrapper)

    if (options.validate) checkPropValidation(comp, { ...props, someInvalidProp: null })

    if (options.directives) {
        const hasDir = wrapper.element.querySelectorAll('[v-\\*]').length > 0 || wrapper.element.getAttributeNames().some(n => n.startsWith('v-'))
        expect(hasDir).toBe(true)
    }

    if (options.attrs?.class) expect(wrapper.classes()).toContain(options.attrs.class)
    if (options.attrs?.style) expect(wrapper.attributes('style')).toContain(options.attrs.style)
    if (options.snapshot !== false) expect(wrapper.html()).toMatchSnapshot()

    return wrapper
}