import {PropType} from "vue";

export const customBadgeProps = {
    idBadge: {type: String as PropType<string>, required: false, default: ''},
    titleBadge: {type: String as PropType<string>, required: false, default: 'title'},
    variantBadge: {type: String as PropType<"secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark">, required: false, default: 'secondary'},
    customClassBadge: {type: String as PropType<string>, required: false, default: ''},
    dotIndicator: {type: Boolean as PropType<boolean>, required: false, default: false},
}