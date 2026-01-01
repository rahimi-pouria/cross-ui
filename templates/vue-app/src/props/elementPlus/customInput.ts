import type { PropType } from "vue";

export const customInputProps = {
    id: {type: String as PropType<string>, default: ''},
    size: {type: String as PropType<'small' | 'large' | 'default'>, default: 'default'},
    placeholder: {type: String as PropType<string>, default: ''},
    customClassInput: {type: String as PropType<string>, default: ''},
    clearable: {type: Boolean as PropType<boolean>, default: false},
    label: {type: String as PropType<string>, default: ''},
    inputType: { type: String as PropType<string |'text' | 'password' | 'select'>, default: 'text' },
    maxlength: { type: Number as PropType<number>, default: null },
    inputClass: { type: String as PropType<string>, default: '' },
    labelClass: { type: String as PropType<string>, default: '' },
    showPassword: {type: Boolean as PropType<boolean>, default: false},
    disabled: {type: Boolean as PropType<boolean>, default: false},
    customClassWrapperInput: {type: String as PropType<string>, default: ''},
    required: { type: Boolean as PropType<boolean>, default: false },
    customValidationTitle: {type: String as PropType<string>, default: ''},
    modelValue: {type: String as PropType<string> ,required: true, default: ''},
}