import {defineComponent, PropType} from "vue";

export const customRadioButtonProps = {
    idRadioButton: {type: String as PropType<string>, required: true, default: ''},
    sizeRadioButton: {type: String as PropType<'small' | 'large'>, required: true, default: 'large'},
    titleRadioButton: {type: String as PropType<string>, required: true, default: ''},
    valueRadioButton: {type: [String, Number, Boolean] as PropType<string | number | boolean>, required: true, default: '1'},
    borderRadioButton: {type: Boolean as PropType<boolean>, required: false, default: false},
    modelValueRadioButton: {type: String as PropType<boolean>, required: false, default: '1'},
    disabledRadioButton: {type: Boolean as PropType<boolean>, required: false, default: false},
    labelRadioButton: {type: [String, Number, Boolean] as PropType<string | number | boolean>, required: false, default: ''},
}