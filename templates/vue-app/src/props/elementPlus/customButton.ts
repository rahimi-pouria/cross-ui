import type { PropType } from "vue";

export const customButtonProps = {
    id: {type: String as PropType<string>, default: ''},
    titleBtn: {type: String as PropType<string>, default: ''},
    link: {type: Boolean as PropType<boolean>, default: false},
    size: {type: String as PropType<'small' | 'large' | 'default'>, default: 'default'},
    type: {type: String as PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'>, default: ''},
    nativeType: {type: String as PropType<'button' | 'submit' | 'reset'>, default: 'button'},
    modelValue: { type: [String, Number, Boolean, Object, Array] as PropType<string | number | boolean | object | any[]>, default: null },
    hrefBtn: {type: String as PropType<string>, default: ''},
    customClassBtn: { type: String as PropType<string>, default: '' },
    ariaControls: {type: String as PropType<string>, default: ''},
    dataAccordionTarget: {type: String as PropType<string>, default: ''},
    dataModalTarget: {type: String as PropType<string>, default: undefined},
    ariaExpanded: {type: Boolean as PropType<boolean>, default: false},
    dataModalHide: {type: String as PropType<string>, default: undefined},
    ariaLabel: {type: String as PropType<string>, default: ''},
    dataDropdownToggle: { type: String as PropType<string>, default: undefined },
    dataModalToggle: {type: String as PropType<string>, default: undefined},
    dataDismissTarget: {type: String as PropType<string>, default: undefined},
    plainBtn: {type: Boolean as PropType<boolean>,required: false, default: false},


}