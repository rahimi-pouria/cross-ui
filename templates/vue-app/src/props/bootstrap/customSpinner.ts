import {PropType} from "vue";

export const customSpinnerProps = {
    id: {type: String as PropType<string>, required: true, default: ''},
    labelSpinner: {type: String as PropType<string>, required: true, default: ''},
    typeSpinner: {type: String as PropType<string>, required: true, default: ''},
    customClassSpinner: {type: String as PropType<string>, required: true, default: ''},
    variantSpinner: { type: String as PropType<'success' | 'info' | 'warning' | 'danger' | 'primary'>, required: false, default: 'primary' },

}