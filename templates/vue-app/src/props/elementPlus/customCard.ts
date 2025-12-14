import type { PropType } from "vue";

export const customCardProps = {
    id: {type: String as PropType<string>, default: ''},
    title: {type: String as PropType<string>, default: ''},
    description: {type: String as PropType<string>, default: ''},
    headerContent: {type: String as PropType<string>, default: ''},
    footerContent: {type: String as PropType<string>, default: ''},
    srcImg: {type: String as PropType<string>, default: ''},
    customClassDescription: {type: String as PropType<string>, default: ''},
    altImg: {type: String as PropType<string>, default: ''},
    customClassImageCard: {type: String as PropType<string>, default: ''},
    customClassHeader: {type: String as PropType<string>, default: ''},
    customClassTextHeader: {type: String as PropType<string>, default: ''},
    customClassBodyCard: {type: String as PropType<string>, default: ''},
    customClassFooter: {type: String as PropType<string>, default: ''},
    customClassTextFooter: {type: String as PropType<string>, default: ''},
    customClassCard: {type: String as PropType<string>, default: ''},
}