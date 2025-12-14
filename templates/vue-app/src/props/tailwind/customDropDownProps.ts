import {PropType} from "vue";

export interface optionsDropdownType {
    idOption: number;
    title: string;
    icon: string;
    link?: string;
    type: string;
    value: string;
}

export const customDropDownProps = {
    idSelector: {type: String as PropType<string>,default: '', required: false},
    titleDropDown: { type: String as PropType<string>, required: false, default: '' },
    optionsDropDown: { type: Array as PropType<optionsDropdownType[]>, required: true, default: () => [] },
    showCustomDropDown: { type: Boolean as PropType<boolean>, required: false, default: false },
    placeholder: { type: String as PropType<string>, required: false, default: '' },
    hideSelectedIcon: { type: Boolean as PropType<boolean>, default: true }
}