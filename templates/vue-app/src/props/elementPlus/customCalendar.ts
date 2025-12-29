import {PropType} from "vue";

export type dateType = date[]

export const customCalendarProps = {
    idCalendar: {type: String as PropType<string>, required: true, default: ''},
    showTime: {type: Boolean as PropType<boolean>, required: false, default: false},
    rangeCalendar: {type: Array as PropType<Date[]>,required: false, default: ''},
}