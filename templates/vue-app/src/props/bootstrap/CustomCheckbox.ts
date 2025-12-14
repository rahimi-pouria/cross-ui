import {PropType} from "vue";

export const customCheckboxProps = {
    idCheckbox: {type: String as PropType<string>, required: false, default: ''},
    titleCheckbox: {type: String as PropType<string>, required: false, default: ''},
    valueCheckbox: {type: String as PropType<string>, required: false, default: ''},
    uncheckedValue: {type: String as PropType<string>, required: false, default: ''},
    modelValue: {type: Boolean as PropType<boolean>, required: false, default: false},
}