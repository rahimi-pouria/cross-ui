import { PropType } from "vue";

export const customCheckboxProps = {
    idCheckbox: {type: String as PropType<string>, required: true, default: ''},
    labelCheckbox: {type: String as PropType<string>, required: true, default: ''},
    sizeCheckbox: {type: String as PropType<'large' | 'medium' | 'small'>, required: true, default: 'medium'},
    modelValue: {type: String as PropType<string>, required: true, default: ''},
    disabledCheckBox: {type: Boolean as PropType<boolean>, required: false, default: false},
    borderCheckBox: {type: Boolean as PropType<boolean>, required: false, default: false},
    checkedCheckBox: {type: Boolean as PropType<boolean>, required: false, default: false},
    valueCheckBox: {type: [String, Number, Boolean, Object] as PropType<boolean | number | string | object>, required: false, default: null},
    trueValueCheckBox: {type: [String, Number] as PropType<string | number>, required: false, default: null},
    falseValueCheckBox: {type: [String, Number] as PropType<string | number>, required: false, default: null},
    nameCheckbox: {type: String as PropType<string>, required: true, default: ''},
    indeterminateCheckbox: {type: Boolean as PropType<boolean>, required: false, default: false},
    validateEventCheckBox: {type: Boolean as PropType<boolean>, required: false, default: false},
    tabindexCheckBox: {type: [String, Number] as PropType<string | number>, required: false, default: null},
    ariaControlsCheckBox: {type: String as PropType<string>, required: false, default: ''},
    ariaLabelCheckBox: {type: String as PropType<string>, required: false, default: ''},
    trueLabelCheckBox: {type: [String, Number] as PropType<string | number>, required: false, default: null},
    falseLabelCheckBox: {type: [String, Number] as PropType<string | number>, required: false, default: null},
    controlsCheckBox: {type: String as PropType<string>, required: false, default: ''},
}