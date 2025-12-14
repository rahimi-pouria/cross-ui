import {PropType} from "vue";

export const customPlaceholderProps = {
    id: {type: String as PropType<string>, required: true},
    loading: {type: Boolean as PropType<boolean>, required: true, default: false},
}