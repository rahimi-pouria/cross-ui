import type { PropType } from "vue";

export type FamilyMember = {
    name: string
    state: string
    city: string
    address: string
    zip: string
}

export type tableData = {
    date: string
    name: string
    state: string
    city: string
    address: string
    zip: string
    family: FamilyMember[]
}

export type defaultSort = {
    prop: string,
    order: string
}

export const customTableProps = {
    id: {type: String as PropType<string>, default: ''},
    dataTable: {type: Array as PropType<tableData[]>, default: () => []},
    selection: {type: Boolean as PropType<boolean>, default: false},
    fixed: {type: String as PropType<'right | left'>, default: 'right'},
    labelOperation: {type: String as PropType<string>, default: ''},
    stripe: {type: Boolean as PropType<boolean>, default: false},
    showSearch: {type: Boolean as PropType<boolean>, default: false},
    subColumns: {type: Boolean as PropType<boolean>, default: false},
    parentBorder: {type: Boolean as PropType<boolean>, default: false},
    childBorder: {type: Boolean as PropType<boolean>, default: false},
    preserveExpanded: {type: Boolean as PropType<boolean>, default: false},
    defaultSort:  {type: Array as PropType<defaultSort[]>, default: () => []},
    customClassExpandTable: {type: String as PropType<string>, default: ''},
    customClassColumnTable: {type: String as PropType<string>, default: ''},
    customClassTable: {type: String as PropType<string>, default: ''},
}