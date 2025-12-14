import type { PropType } from "vue";

export type optionsField = {
    value: string,
    label: string
}

export type rules = [string]

export type formFields = {
    id: number,
    type: string,
    name: string,
    label: string,
    placeholder: string,
    rules: rules[],
    options: optionsField[]
}

export const customFormProps = {
    id: {type: String as PropType<string>, default: ''},
    formFields:{type: Array as PropType<formFields[]>, default: () => []},
    errorMessageNotEqualPassword: {type: String as PropType<string>, default: 'The password and confirm password do not match.'},
    endPointSendData: {type: String as PropType<string>, default: ''},
    successMessage: {type: String as PropType<string>, default: 'The operation was completed successfully.'}
}