import type { PropType } from "vue";

export type options = {
    value: string,
    name: string,
    link: string,
    notEnabled: boolean
}

export const customSelect = {
    id: { type: String as PropType<string>, required: true },
    firstTitle: { type: String as PropType<string>, default: '' },
    modelValue: { type: String as PropType<string>, default: '' },
    ariaInvalid: { type: [String, Boolean] as PropType<string | boolean>, default: undefined },
    autofocus: { type: Boolean as PropType<boolean>, default: false },
    disabled: { type: Boolean as PropType<boolean>, default: false },
    disabledField: { type: String as PropType<string>, default: 'disabled' },
    form: { type: String as PropType<string>, default: undefined },
    labelField: { type: String as PropType<string>, default: 'label' },
    multiple: { type: Boolean as PropType<boolean>, default: false },
    name: { type: String as PropType<string>, default: undefined },
    options: { type: Array as PropType<options[]>, required: true },
    optionsField: { type: String as PropType<string>, default: 'options' },
    plain: { type: Boolean as PropType<boolean>, default: false },
    required: { type: Boolean as PropType<boolean>, default: undefined },
    selectSize: { type: [Number, String] as PropType<string | number>, default: 0 },
    size: { type: String as PropType<'sm' | 'md' | 'lg'>, default: 'md' },
    state: { type: [Boolean] as PropType<boolean>, default: undefined },
    textField: { type: String as PropType<string>, default: 'text' },
    valueField: { type: String as PropType<string>, default: 'value' },
    customClass: { type: String as PropType<string>, default: '' },
}
