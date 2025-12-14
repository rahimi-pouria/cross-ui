import {PropType} from "vue";

export const customChooseFileProps = {
    ied: {type: String as PropType<string>, required: false ,default: false},
    state: {type: Boolean as PropType<boolean>, required: false, default: false},
    titleFile: {type: String as PropType<string>, required: true, default: ''},
    modelValue: { type: Array as PropType<File[]>, required: true, default: () => [] },
    multiple: {type: Boolean as PropType<boolean>, required: false, default: false},
}