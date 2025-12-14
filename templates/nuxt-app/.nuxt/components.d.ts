
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


export const BootstrapVueCustomAccordion: typeof import("../components/bootstrapVue/customAccordion.vue")['default']
export const BootstrapVueCustomAlert: typeof import("../components/bootstrapVue/customAlert.vue")['default']
export const BootstrapVueCustomButton: typeof import("../components/bootstrapVue/customButton.vue")['default']
export const BootstrapVueCustomCard: typeof import("../components/bootstrapVue/customCard.vue")['default']
export const BootstrapVueCustomDropdown: typeof import("../components/bootstrapVue/customDropdown.vue")['default']
export const BootstrapVueCustomInput: typeof import("../components/bootstrapVue/customInput.vue")['default']
export const BootstrapVueCustomModal: typeof import("../components/bootstrapVue/customModal.vue")['default']
export const BootstrapVueCustomSelect: typeof import("../components/bootstrapVue/customSelect.vue")['default']
export const BootstrapVueCustomTable: typeof import("../components/bootstrapVue/customTable.vue")['default']
export const BootstrapVueCustomTabs: typeof import("../components/bootstrapVue/customTabs.vue")['default']
export const BootstrapVueSlidersCustomCarousel: typeof import("../components/bootstrapVue/sliders/customCarousel.vue")['default']
export const BootstrapVueSlidersCustomMultiItemSlider: typeof import("../components/bootstrapVue/sliders/customMultiItemSlider.vue")['default']
export const ElementPlusCustomAccordion: typeof import("../components/elementPlus/customAccordion.vue")['default']
export const ElementPlusCustomAlert: typeof import("../components/elementPlus/customAlert.vue")['default']
export const ElementPlusCustomButton: typeof import("../components/elementPlus/customButton.vue")['default']
export const ElementPlusCustomCard: typeof import("../components/elementPlus/customCard.vue")['default']
export const ElementPlusCustomDropdown: typeof import("../components/elementPlus/customDropdown.vue")['default']
export const ElementPlusCustomInput: typeof import("../components/elementPlus/customInput.vue")['default']
export const ElementPlusCustomModal: typeof import("../components/elementPlus/customModal.vue")['default']
export const ElementPlusCustomSelect: typeof import("../components/elementPlus/customSelect.vue")['default']
export const ElementPlusCustomTable: typeof import("../components/elementPlus/customTable.vue")['default']
export const ElementPlusCustomTabs: typeof import("../components/elementPlus/customTabs.vue")['default']
export const ElementPlusSlidersCustomCarousel: typeof import("../components/elementPlus/sliders/customCarousel.vue")['default']
export const ElementPlusSlidersCustomMultiItemSlider: typeof import("../components/elementPlus/sliders/customMultiItemSlider.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyBootstrapVueCustomAccordion: LazyComponent<typeof import("../components/bootstrapVue/customAccordion.vue")['default']>
export const LazyBootstrapVueCustomAlert: LazyComponent<typeof import("../components/bootstrapVue/customAlert.vue")['default']>
export const LazyBootstrapVueCustomButton: LazyComponent<typeof import("../components/bootstrapVue/customButton.vue")['default']>
export const LazyBootstrapVueCustomCard: LazyComponent<typeof import("../components/bootstrapVue/customCard.vue")['default']>
export const LazyBootstrapVueCustomDropdown: LazyComponent<typeof import("../components/bootstrapVue/customDropdown.vue")['default']>
export const LazyBootstrapVueCustomInput: LazyComponent<typeof import("../components/bootstrapVue/customInput.vue")['default']>
export const LazyBootstrapVueCustomModal: LazyComponent<typeof import("../components/bootstrapVue/customModal.vue")['default']>
export const LazyBootstrapVueCustomSelect: LazyComponent<typeof import("../components/bootstrapVue/customSelect.vue")['default']>
export const LazyBootstrapVueCustomTable: LazyComponent<typeof import("../components/bootstrapVue/customTable.vue")['default']>
export const LazyBootstrapVueCustomTabs: LazyComponent<typeof import("../components/bootstrapVue/customTabs.vue")['default']>
export const LazyBootstrapVueSlidersCustomCarousel: LazyComponent<typeof import("../components/bootstrapVue/sliders/customCarousel.vue")['default']>
export const LazyBootstrapVueSlidersCustomMultiItemSlider: LazyComponent<typeof import("../components/bootstrapVue/sliders/customMultiItemSlider.vue")['default']>
export const LazyElementPlusCustomAccordion: LazyComponent<typeof import("../components/elementPlus/customAccordion.vue")['default']>
export const LazyElementPlusCustomAlert: LazyComponent<typeof import("../components/elementPlus/customAlert.vue")['default']>
export const LazyElementPlusCustomButton: LazyComponent<typeof import("../components/elementPlus/customButton.vue")['default']>
export const LazyElementPlusCustomCard: LazyComponent<typeof import("../components/elementPlus/customCard.vue")['default']>
export const LazyElementPlusCustomDropdown: LazyComponent<typeof import("../components/elementPlus/customDropdown.vue")['default']>
export const LazyElementPlusCustomInput: LazyComponent<typeof import("../components/elementPlus/customInput.vue")['default']>
export const LazyElementPlusCustomModal: LazyComponent<typeof import("../components/elementPlus/customModal.vue")['default']>
export const LazyElementPlusCustomSelect: LazyComponent<typeof import("../components/elementPlus/customSelect.vue")['default']>
export const LazyElementPlusCustomTable: LazyComponent<typeof import("../components/elementPlus/customTable.vue")['default']>
export const LazyElementPlusCustomTabs: LazyComponent<typeof import("../components/elementPlus/customTabs.vue")['default']>
export const LazyElementPlusSlidersCustomCarousel: LazyComponent<typeof import("../components/elementPlus/sliders/customCarousel.vue")['default']>
export const LazyElementPlusSlidersCustomMultiItemSlider: LazyComponent<typeof import("../components/elementPlus/sliders/customMultiItemSlider.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
