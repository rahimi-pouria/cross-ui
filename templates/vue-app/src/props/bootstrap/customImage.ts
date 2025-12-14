import {PropType} from "vue";

export const customImageProps = {
    id: {type: String as PropType<string>, required: true, default: ''},
    srcImage: {type: String as PropType<string>, required: true, default: ''},
    alt: {type: String as PropType<string>, required: true, default: ''},
    fluid: {type: Boolean as PropType<boolean>,required: false, default: false},
    fluidGrow: {type: Boolean as PropType<boolean>,required: false, default: false},
    lazy: {type: Boolean as PropType<boolean>,required: false, default: false},
    width: {type: Number as PropType<number>, required: true, default: 0},
    height: {type: Number as PropType<number>, required: true, default: 0},
    thumbnail: {type: Boolean as PropType<boolean>,required: false, default: false},
    sizes: {type: String as PropType<string>,required: false, default: ''},
    rounded: {type: Boolean as PropType<boolean>,required: false, default: false},
    roundedBottom: {type: Boolean as PropType<boolean>,required: false, default: false},
    roundedEndP: {type: Boolean as PropType<boolean>,required: false, default: false},
    roundedStart: {type: Boolean as PropType<boolean>,required: false, default: false},
    roundedTop: {type: Boolean as PropType<boolean>,required: false, default: false},
}