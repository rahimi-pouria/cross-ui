import {PropType} from "vue";

export const customAvatarProps = {
    idAvatar: {type:String as PropType<string>, required: false, default: ''},
    titleAvatar: {type:String as PropType<string>, required: false, default: 'John Doe'},
    variantAvatar: {type:String as PropType<"info" | "primary" | "success" | "secondary" | "dark" | "light" | "danger" | "warning" | string>, required: false, default: 'secondary'},
    srcAvatar: {type:String as PropType<string>, required: false, default: ''},
    customClassAvatar: {type:String as PropType<string>, required: false, default: 'mx-3'},
    sizeAvatar: {type:String as PropType<"sm" | "lg" | "">, required: false, default: ''},
    customClassTitleAvatar: {type:String as PropType<string>, required: false, default: 'me-auto'},
    customClassGroupItem: {type:String as PropType<string>, required: false, default: 'd-flex align-items-center'},
    bgVariantAvatar: {type:String as PropType<"primary" | "secondary" | "warning">, required: false, default: ''},
    textVariantAvatar: {type:String as PropType<"light" | "info">, required: false, default: ''},
    roundedAvatar: {type:String as PropType<"sm" | "lg" | "md" | "circle">, required: false, default: 'md'},
    roundedTopAvatar: {type:String as PropType<"sm" | "lg" | "md" | "circle">, required: false, default: 'md'},
    roundedBottomAvatar: {type:String as PropType<"sm" | "lg" | "md" | "circle">, required: false, default: 'md'},
    roundedStartAvatar: {type:String as PropType<"sm" | "lg" | "md" | "circle">, required: false, default: 'md'},
    roundedEndAvatar: {type:String as PropType<"sm" | "lg" | "md" | "circle">, required: false, default: 'md'},
    badgeAvatar: {type:Boolean as PropType<boolean>, required: false, default: false},
    badgeVariantAvatar: {type: String as PropType<"danger" | "warning" | "success" | "dark">, required: false, default: ''},
}