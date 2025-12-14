import {PropType} from "vue";

export const customCollapseProps = {
    idCollapse: {type: String as PropType<string>, required: true, default: ""},
    title: {type: String as PropType<string>, required: true, default: ""},
    labelBtn: {type: String as PropType<string>,required: true, default: ""},
    customClassCollapse: {type: String as PropType<string>, required: false, default: 'mt-2'},
    titleCollapse: {type: String as PropType<string>, required: false, default: ''},
}