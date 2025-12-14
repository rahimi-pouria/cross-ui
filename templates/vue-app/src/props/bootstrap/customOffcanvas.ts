import {PropType} from "vue";

export const customOffcanvasProps = {
    id: {type: String as PropType<string>, required: true, default: ''},
    titleButton: {type: String as PropType<string>, required: true, default: ''},
    modelValueCanvas: {type: String as PropType<string>, required: true, default: false},
}