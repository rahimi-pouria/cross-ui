import {PropType} from "vue";

export const customDatePickerProps = {
    idDatePicker: {type: String as PropType<string>,required: true ,default: null},
    modelValueDatePicker: {type: String as PropType<string>,required: true ,default: null},
    sizeDatePicker: {type: String as PropType<'default' | 'large' | 'small'>,required: true ,default: 'default'},
    showDateRange: {type: Boolean as PropType<boolean>,required: true ,default: null},
    startDate: {type: String as PropType<string>,required: true ,default: 'Start date'},
    EndDate: {type: String as PropType<string>,required: true ,default: 'End date'},
    valueFormat: {type: String as PropType<string>,required: true ,default: 'YYYY-MM-DD HH:mm:ss'},
    typeDatePicker: {type: String as PropType<'daterange' | 'date'>,required: true ,default: 'date'},
    placeholderDatePicker: {type: String as PropType<string>,required: true ,default: 'Pick a Date'},
}