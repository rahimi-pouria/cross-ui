import { PropType } from "vue";

export interface stepItemsType {
    id: number;
    title: string;
    icon: string;
}


export const customStepsProps = {
    idStep: {type: String as PropType<string>, required: false, default: null},
    customClassWrapperSteps: {type: String as PropType<string>, required: false, default: 'mb-4'},
    stepItems: {type: Array as PropType<stepItemsType[]>, required: true, default: () => {}},
    spaceSteps: {type: [Number, String] as PropType<string|number>, required: false, default: 200},
    activeSteps: {type: Number as PropType<number>, required: false, default: 1},
    simpleSteps: {type: Boolean as PropType<boolean>, required: false, default: false},
    finishStatusSteps: {type: String as PropType<'success' | ''>, required: false, default: 'success'},
    directionSteps: {type: String as PropType<'vertical'| 'horizontal'>, required: false, default: 'horizontal'},
    processStatusSteps: {type: String as PropType<'process'>, required: false, default: 'process'},
    alignCenterSteps: {type: Boolean as PropType<boolean>, required: false, default: false},
    descriptionSteps: {type: String as PropType<string>, required: false, default: ''},
}