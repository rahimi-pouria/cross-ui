export type listMenu = {
    id: number,
    title: string,
    link: string
}

export interface customDropdownProps {
    id: string,
    title: string
    listMenu: listMenu[],
    variant: string,
    customClassDropdown: string,
    customClassDropdownToggle: string,
    customClassMenu: string,
    customClassMenuItem: string
}