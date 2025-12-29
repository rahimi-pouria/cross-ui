import { PropType } from "vue";

export const customBadgeProps = {
    idBadge: {type: String as PropType<string>, required: true, default: ''},
    typeBadge: {type: String as PropType<'danger' | 'info' | 'success' | 'warning'>, required: false, default: 'danger'},
    valueBadge: { type: [String, Number] as PropType<string | number>, required: true, default: 12 },
    customClassBadge: { type: String as PropType<string | number>, required: true, default: '' },
    maxBadge: { type: Number as PropType<number>, required: false, default: null },
    isDotBadge: { type: Boolean as PropType<boolean>, required: false, default: false },
    hiddenBadge: { type: Boolean as PropType<boolean>, required: false, default: false },
    showZeroBadge: { type: Boolean as PropType<boolean>, required: false, default: true },
    colorBadge: { type: String as PropType<'danger'>, required: false, default: ''},
}

