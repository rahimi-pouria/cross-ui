import type { PropType } from "vue";

export type itemDropdown = {
    id: number,
    title: string,
    link: string
}

export const customDropdownProps = {
    id: {type: String as PropType<string>,default: '' },
    placement: {type: String as PropType<'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end'>, default: 'top'},
    dropdownItem: {type: Array as PropType<itemDropdown[]>, default: () => []},
    customClassWrapperDropdown: {type: String as PropType<string>,default: '' },
    customClassMenu: {type: String as PropType<string>,default: '' },
    customClassItem: {type: String as PropType<string>,default: '' },
    customClassLinkDropdown: {type: String as PropType<string>,default: '' },
}