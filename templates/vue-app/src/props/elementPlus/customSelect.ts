import type {PropType} from "vue";

export type options = {
    value: string,
    label: string
}

export const customSelectProps = {
    id: {type: String as PropType<string>, default: ''},
    clearable: {type: Boolean as PropType<boolean>, default: false},
    multiple: {type: Boolean as PropType<boolean>, default: false},
    options: {type: Array as PropType<options[]>, default: () => []},
    placeholder: {type: String as PropType<string>,default: ''},
    modelValue: {type: [String, Number, Boolean] as PropType<string | number | boolean>, default: undefined},
    customClassSelect: {type: String as PropType<string>, default: ''},
    collapseTags:{type: Boolean as PropType<boolean>, default: false},
    customClassLabelSelect: {type: String as PropType<string>, default: ''},
    label: {type: String as PropType<string>, default: ''},
    labelClass: { type: String as PropType<string>, default: '' },
    customValidationTitle: {type: String as PropType<string>, default: ''},
    disabled: {type: Boolean as PropType<boolean>, default: false},
    required: { type: Boolean as PropType<boolean>, default: false },
}