import {PropType} from "vue";

export const customRadioButtonProps = {
    id: {type: String as PropType<string>, required: false, default: ''},
    titleRadioButton: {type: String as PropType<string>, required: true,  deadline: ''},
    modelValue: {type: Boolean as PropType<boolean>, required: false, default: false},
    valueRadioButton: {type: String as PropType<boolean>, required: false, default: ''},
}