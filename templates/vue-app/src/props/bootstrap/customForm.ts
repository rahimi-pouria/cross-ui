import {PropType} from "vue";

export type formOptionType = {
    id: number;
    name: string;
    placeholder: string;
    typeInput: string;
    required: boolean;
    modelValue: string
}


export const customFormProps = {
    id: {type: String as PropType<string>, required: true, default: ''},
    formOptions: {type: Array as PropType<formOptionType[]>, required: true, default: () => {}},
    customClassWrapperForm: {type: String as PropType<string>, required: false, default: ''},
}