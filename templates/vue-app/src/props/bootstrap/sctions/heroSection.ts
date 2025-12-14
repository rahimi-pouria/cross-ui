import {PropType} from "vue";

export const heroSectionProps = {
    id: {type: String as PropType<string>, required: true, default: ''},
    idCarousel: {type: String as PropType<string>, required: true, default: ''},
    showCarousel: {type: Boolean as PropType<boolean>, default: false, required: true},
}