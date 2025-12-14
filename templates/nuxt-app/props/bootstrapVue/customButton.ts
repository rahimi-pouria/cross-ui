import type { PropType } from "vue";

export const customButton = {
    id: { type: String as PropType<string>, default: '' },
    label: { type: String as PropType<string>, required: true },
    typeBtn: { type: String as PropType<'button' | 'submit' | 'reset'>, required: true },
    variant: { type: String as PropType<string>, default: 'primary' },
    href: { type: String as PropType<string>, default: '' },
    to: { type: String as PropType<string>, default: '' },
    disabled: { type: Boolean, default: false },
    btnClass: { type: String as PropType<string>, default: '' },
    loading: { type: Boolean, default: false },
    loadingFill: { type: Boolean, default: false },
    loadingText: { type: String, default: 'Loading...' },
    pill: { type: Boolean, default: false },
    pressed: { type: Boolean, default: false },
    size: { type: String as PropType<'sm' | 'md' | 'lg'>, default: 'md' },
    squared: { type: Boolean, default: false },
    tag: { type: String as PropType<'div' | 'button' | 'a'>, default: 'div' },
    modelValue: { type: [String, Number, Boolean, Object, Array] as PropType<string | number | boolean | object | any[]>, default: null },
};
