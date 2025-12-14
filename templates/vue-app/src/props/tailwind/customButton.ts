import { PropType } from "vue";

export const CustomButtonProps = {
    idBtn: {type: String, required: false, default: ''},
    titleBtn: {type: String, required: false, default: ''},
    customClassBtn: {type: String as PropType<string>, default: 'text-black bg-brand shadow-xs font-medium leading-5' ,required: false},
    typeBtn: {type: String as PropType<'button' | 'reset' | 'submit'>, required: false, default: 'button'},
    showIcon: {type: Boolean, default: false},
    icon: { type: [String, Array] as PropType<string | any[]>, required: false, default: '' },
    modelValue: { type: [String, Number, Boolean, Object, Array] as PropType<string | number | boolean | object | any[]>, default: null },
    customClassIcon: {type: String as PropType<string>,required: false, default: 'rounded-full' },
    iconTheme: {type: Boolean as PropType<boolean>,required: false, default: true },
    dataAccordionTarget: {type: String as PropType<string>,required: false, default: '' },
    ariaExpanded: {type: String as PropType<boolean | string>, required: false, default: false},
    ariaControls: {type: String as PropType<string>,required: false, default: ''},
}