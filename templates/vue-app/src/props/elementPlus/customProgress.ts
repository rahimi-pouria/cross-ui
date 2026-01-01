import  { PropType } from "vue";

export const customProgressProps = {
    idProgress: {type: String as PropType<string>, required: true, default: ''},
    textInside: {type: Boolean as PropType<boolean>,required: true, default: false},
    strokeWidthProgress: {type: Number as PropType<number>,required: true, default: 24},
    percentageProgress: {type: Number as PropType<number>,required: true, default: 100},
    statusProgress: {type: String as PropType<'success' | 'warning' | 'exception'>,required: true, default: 'success'},
    typeStatus: {type: String as PropType<'circle' | 'success' | 'dashboard'>, required: false, default: ''},
    stripedProgress: {type: Boolean as PropType<boolean>,required: true, default: false},
    stripedFlowProgress: {type: Boolean as PropType<boolean>,required: true, default: false},
    showTextProgress: {type: Boolean as PropType<boolean>,required: true, default: false},
    addFormationProgress: {type: Boolean as PropType<boolean>,required: true, default: false},
    durationProgress: {type: Number as PropType<number>,required: true, default: 10},
    indeterminateProgress: {type: Boolean as PropType<boolean>,required: true, default: false},
    colorProgress: {type: [String, Function, Array] as PropType<string | Function | any[]>,required: true, default: null},
}