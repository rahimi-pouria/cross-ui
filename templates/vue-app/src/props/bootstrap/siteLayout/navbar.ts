import { PropType } from "vue";

export interface DropdownItem {
    id: string;
    name: string;
    icon: string;
    link: string;
}

export interface DropdownItems {
    title: string
    items: DropdownItem[]
}

export interface NavbarItemType {
    id: number;
    title: string;
    url: string;
    icon: string;
    dropdownItems?: DropdownItems[];
}

export interface langItemType {
    id: number;
    title: string;
    flag: string;
}

export const navbarProps = {
    idNavbar: { type: String as PropType<string>, required: true, default: '' },
    navbarItems: { type: Array as PropType<NavbarItemType[]>, required: true, default: () => [] },
    langItems: { type: Array as PropType<langItemType[]>, required: true, default: () => [] },
    labelLink: { type: String as PropType<string>, required: true, default: 'Cross UI' },
    urlLink: { type: String as PropType<string>, required: true, default: '/' },
    customClassLinkLogo: { type: String as PropType<string>, required: true, default: 'navbar-brand' },
    customClassWrapperNavbar: { type: String as PropType<string>, required: false,  default: 'container-fluid d-flex justify-content-between align-items-center gap-5'},
    customClassNav: { type: String as PropType<string>, required: false,   default: 'navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between align-items-center'},
    customClassUlItem: { type: String as PropType<string>, required: false, default: 'navbar-nav me-auto mb-2 mb-lg-0' },
    customClassNavItem: { type: String as PropType<string>, required: false, default: 'nav-item' },
};
