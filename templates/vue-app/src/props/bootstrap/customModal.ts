import type { PropType } from "vue";

export const customModal = {
    id: { type: String as PropType<string>, required: true },
    description: { type: String as PropType<string>, required: true },
    modelValue: { type: Boolean as PropType<boolean>, required: true },
    title: { type: String as PropType<string>, required: true },
    titleClass: { type: String as PropType<string>, default: '' },
    size: { type: String as PropType<string>, default: 'md' },
    buttonSize: { type: String as PropType<string>, default: 'md' },
    bodyClass: { type: String as PropType<string>, default: '' },
    bodyScrolling: { type: Boolean as PropType<boolean>, default: false },
    okTitle: { type: String as PropType<string>, default: 'OK' },
    okClass: { type: String as PropType<string>, default: '' },
    cancelClass: { type: String as PropType<string>, default: '' },
    cancelTitle: { type: String as PropType<string>, default: 'Cancel' },
    centered: { type: Boolean as PropType<boolean>, default: true },
    scrollable: { type: Boolean as PropType<boolean>, default: false },
    backdrop: { type: Boolean as PropType<boolean>, default: true },
    keyboard: { type: Boolean as PropType<boolean>, default: true },
    headerClass: { type: String as PropType<string>, default: '' },
    noHeader: { type: Boolean as PropType<boolean>, default: false },
    noHeaderClose: { type: Boolean as PropType<boolean>, default: false },
    headerCloseClass: { type: String as PropType<string>, default: '' },
    contentClass: { type: String as PropType<string>, default: '' },
    noFooter: { type: Boolean as PropType<boolean>, default: false },
    footerClass: { type: String as PropType<string>, default: '' },
    fullscreen: { type: Boolean as PropType<boolean>, default: false }
}
