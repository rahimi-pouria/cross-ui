import {PropType} from "vue";

export const splitHeroProps = {
    id: {type: String as PropType<string>, required: true, default: ''},
    title: {type: String as PropType<string>, default: '' ,required: true},
    description: {type: String as PropType<string>, default: '' ,required: true},
    customClassTitleSplitSection: {type: String as PropType<string>, default: '' ,required: true},
    customClassDescriptionSplitSection: {type: String as PropType<string>, default: '' ,required: true},
    customClassWrapperSplitSection: {type: String as PropType<string>, default: 'd-flex w-100', required: false},
    customClassImageSplitSection: {type: String as PropType<string>, default: 'd-flex w-50', required: false},
    customClassTextSplitSection: {type: String as PropType<string>, default: 'd-flex w-50', required: false},
}