export type Items = {
    id: number,
    title: string,
    link: string,
}


export interface CustomDropdownProps {
    id: string,
    title: string,
    items: Items[]
}