
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)

interface _GlobalComponents {
      'BootstrapVueCustomAccordion': typeof import("../../components/bootstrapVue/customAccordion.vue")['default']
    'BootstrapVueCustomAlert': typeof import("../../components/bootstrapVue/customAlert.vue")['default']
    'BootstrapVueCustomButton': typeof import("../../components/bootstrapVue/customButton.vue")['default']
    'BootstrapVueCustomCard': typeof import("../../components/bootstrapVue/customCard.vue")['default']
    'BootstrapVueCustomDropdown': typeof import("../../components/bootstrapVue/customDropdown.vue")['default']
    'BootstrapVueCustomInput': typeof import("../../components/bootstrapVue/customInput.vue")['default']
    'BootstrapVueCustomModal': typeof import("../../components/bootstrapVue/customModal.vue")['default']
    'BootstrapVueCustomSelect': typeof import("../../components/bootstrapVue/customSelect.vue")['default']
    'BootstrapVueCustomTable': typeof import("../../components/bootstrapVue/customTable.vue")['default']
    'BootstrapVueCustomTabs': typeof import("../../components/bootstrapVue/customTabs.vue")['default']
    'BootstrapVueSlidersCustomCarousel': typeof import("../../components/bootstrapVue/sliders/customCarousel.vue")['default']
    'BootstrapVueSlidersCustomMultiItemSlider': typeof import("../../components/bootstrapVue/sliders/customMultiItemSlider.vue")['default']
    'ElementPlusCustomAccordion': typeof import("../../components/elementPlus/customAccordion.vue")['default']
    'ElementPlusCustomAlert': typeof import("../../components/elementPlus/customAlert.vue")['default']
    'ElementPlusCustomButton': typeof import("../../components/elementPlus/customButton.vue")['default']
    'ElementPlusCustomCard': typeof import("../../components/elementPlus/customCard.vue")['default']
    'ElementPlusCustomDropdown': typeof import("../../components/elementPlus/customDropdown.vue")['default']
    'ElementPlusCustomInput': typeof import("../../components/elementPlus/customInput.vue")['default']
    'ElementPlusCustomModal': typeof import("../../components/elementPlus/customModal.vue")['default']
    'ElementPlusCustomSelect': typeof import("../../components/elementPlus/customSelect.vue")['default']
    'ElementPlusCustomTable': typeof import("../../components/elementPlus/customTable.vue")['default']
    'ElementPlusCustomTabs': typeof import("../../components/elementPlus/customTabs.vue")['default']
    'ElementPlusSlidersCustomCarousel': typeof import("../../components/elementPlus/sliders/customCarousel.vue")['default']
    'ElementPlusSlidersCustomMultiItemSlider': typeof import("../../components/elementPlus/sliders/customMultiItemSlider.vue")['default']
    'NuxtWelcome': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/server-placeholder")['default']
      'LazyBootstrapVueCustomAccordion': LazyComponent<typeof import("../../components/bootstrapVue/customAccordion.vue")['default']>
    'LazyBootstrapVueCustomAlert': LazyComponent<typeof import("../../components/bootstrapVue/customAlert.vue")['default']>
    'LazyBootstrapVueCustomButton': LazyComponent<typeof import("../../components/bootstrapVue/customButton.vue")['default']>
    'LazyBootstrapVueCustomCard': LazyComponent<typeof import("../../components/bootstrapVue/customCard.vue")['default']>
    'LazyBootstrapVueCustomDropdown': LazyComponent<typeof import("../../components/bootstrapVue/customDropdown.vue")['default']>
    'LazyBootstrapVueCustomInput': LazyComponent<typeof import("../../components/bootstrapVue/customInput.vue")['default']>
    'LazyBootstrapVueCustomModal': LazyComponent<typeof import("../../components/bootstrapVue/customModal.vue")['default']>
    'LazyBootstrapVueCustomSelect': LazyComponent<typeof import("../../components/bootstrapVue/customSelect.vue")['default']>
    'LazyBootstrapVueCustomTable': LazyComponent<typeof import("../../components/bootstrapVue/customTable.vue")['default']>
    'LazyBootstrapVueCustomTabs': LazyComponent<typeof import("../../components/bootstrapVue/customTabs.vue")['default']>
    'LazyBootstrapVueSlidersCustomCarousel': LazyComponent<typeof import("../../components/bootstrapVue/sliders/customCarousel.vue")['default']>
    'LazyBootstrapVueSlidersCustomMultiItemSlider': LazyComponent<typeof import("../../components/bootstrapVue/sliders/customMultiItemSlider.vue")['default']>
    'LazyElementPlusCustomAccordion': LazyComponent<typeof import("../../components/elementPlus/customAccordion.vue")['default']>
    'LazyElementPlusCustomAlert': LazyComponent<typeof import("../../components/elementPlus/customAlert.vue")['default']>
    'LazyElementPlusCustomButton': LazyComponent<typeof import("../../components/elementPlus/customButton.vue")['default']>
    'LazyElementPlusCustomCard': LazyComponent<typeof import("../../components/elementPlus/customCard.vue")['default']>
    'LazyElementPlusCustomDropdown': LazyComponent<typeof import("../../components/elementPlus/customDropdown.vue")['default']>
    'LazyElementPlusCustomInput': LazyComponent<typeof import("../../components/elementPlus/customInput.vue")['default']>
    'LazyElementPlusCustomModal': LazyComponent<typeof import("../../components/elementPlus/customModal.vue")['default']>
    'LazyElementPlusCustomSelect': LazyComponent<typeof import("../../components/elementPlus/customSelect.vue")['default']>
    'LazyElementPlusCustomTable': LazyComponent<typeof import("../../components/elementPlus/customTable.vue")['default']>
    'LazyElementPlusCustomTabs': LazyComponent<typeof import("../../components/elementPlus/customTabs.vue")['default']>
    'LazyElementPlusSlidersCustomCarousel': LazyComponent<typeof import("../../components/elementPlus/sliders/customCarousel.vue")['default']>
    'LazyElementPlusSlidersCustomMultiItemSlider': LazyComponent<typeof import("../../components/elementPlus/sliders/customMultiItemSlider.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
