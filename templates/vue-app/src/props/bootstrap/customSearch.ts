import {PropType} from "vue";

export const customSearchProps = {
    id: { type: String as PropType<string>, required: true, default: '' },
    modelValue: { type: String as PropType<string>, required: true, default: '' },
    customClassInput: { type: String as PropType<string>, required: false, default: 'me-2' },
    customClassNavForm: {type: String as PropType<string>, required: false, default: 'd-flex' },
}