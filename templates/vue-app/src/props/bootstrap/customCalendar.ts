import {PropType} from "vue";

export interface EventType {
    title: string;
    start: Date | string | null;
    end?: Date | string | null;
    color?: string;
}

export interface CalendarOptionsType {
    plugins: any[];
    initialView: string;
    weekends: boolean;
    events: EventType[];
}

export const customCalendarProps = {
    id: {type: String as PropType<string>,required: false, default: null},
    title: {type: String as PropType<string>, required: false, default: null},
    calendarOptions: {type: Array as PropType<CalendarOptionsType[]>,required: false, default: null},
    customClassWrapperCalender: {type: String as PropType<string>,required: false, default: 'd-flex w-100 p-4'},
    customClassTitle: {type: String as PropType<string>,required: false, default: ''},
}