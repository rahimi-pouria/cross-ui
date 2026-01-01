import { PropType } from "vue";

export interface collapseItemType {
    id: number,
    title: string
    description: string
    icon?: string,
    nameCollapse: string,
}

export const customCollapseProps = {
    idCollapse: {type: String as PropType<number>, required: true, default: ''},
    customClassWrapperCollapse: {type: String as PropType<string>, required: false, default: ''},
    titleCollapse: {type: String as PropType<string>, required: false, default: ''},
    nameCollapse: {type: String as PropType<string>, required: false, default: '1'},
    descriptionCollapse: {type: String as PropType<string>, required: false, default: ''},
    customClassDescriptionCollapse:{type: String as PropType<string>, required: false, default: ''},
    collapseItem: {type: Array as PropType<collapseItemType[]>, required: false, default: () => {}},
    accordionCollapse: {type: Boolean as PropType<boolean>, required: false, default: true},
    modelValue: {type: String as PropType<string>, required: false, default: ''},
}