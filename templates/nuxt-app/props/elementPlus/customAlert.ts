import type { PropType } from "vue";

export const customAlertProps = {
    id: {type: String as PropType<string>, default: ''},
    title: {type: String as PropType<string>, default: ''},
    type: { type: String as PropType<'success' | 'warning' | 'info' | 'error'>, default: 'info' },
    effect: {type: String as PropType<'light' | 'dark'>, default: 'light'},
    showIcon: {type: Boolean as PropType<boolean>, default: false},
    description: {type: String as PropType<string>, default: ''},
    hideAfter: {type: Number as PropType<number>, default: 5000},
    closable: {type: Boolean as PropType<boolean>, default: true},

}