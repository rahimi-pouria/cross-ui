import {PropType} from "vue";

export const customAccordionProps = {
    id: {type: String as PropType<string>, required: false, default: ''},
    title: {type: String as PropType<string>, required: true, default: ''},
    description: {type: String as PropType<string>, required: false, default: ''},
    customClassDescription: {type: String as PropType<string>, required: false, default: 'hidden border border-s-0 border-e-0 border-t-0 border-b-default'},
}