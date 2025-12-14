
export type menuItem = {
    id: number,
    title: string,
    link: string
}

export interface CustomSelectProps {
    id: string,
    title: string,
    menuItem: menuItem[],
    variant: 'standard',
    minWidth: number,
    customClassWrapperSelect: string
}