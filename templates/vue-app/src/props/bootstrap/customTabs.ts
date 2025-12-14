import type { PropType } from "vue";

export type itemTabs = {
    active: boolean,
    buttonId: string,
    disabled: boolean,
    id: string,
    lazy: boolean,
    noBody: boolean,
    tag: string,
    title: string,
    titleItemClass: string,
    titleLinkAttrs: object,
    titleLinkClass: string,
    unmountLazy: boolean,
    description: string,
}

export const customTabs = {
    active: { type: Boolean as PropType<boolean>, default: false },
    buttonId: { type: String as PropType<string>, default: '' },
    disabled: { type: Boolean as PropType<boolean>, default: false },
    tabDescriptionClass: { type: String as PropType<string>, default: '' },
    id: { type: String as PropType<string>, required: true },
    tabList: { type: Array as PropType<itemTabs[]>, required: true },
    lazy: { type: Boolean as PropType<boolean>, default: false },
    noBody: { type: Boolean as PropType<boolean>, default: false },
    tag: { type: String as PropType<string>, default: 'div' },
    title: { type: String as PropType<string>, default: '' },
    titleItemClass: { type: [String, Array, Object], default: '' },
    titleLinkAttrs: { type: Object as PropType<object>, default: () => ({}) },
    titleLinkClass: { type: [String, Array, Object], default: '' },
    unmountLazy: { type: Boolean as PropType<boolean>, default: false },
    contentClass: { type: String as PropType<string>, default: '' },
}
