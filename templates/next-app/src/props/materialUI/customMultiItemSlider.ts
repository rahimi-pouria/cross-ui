export type itemMultiSlider = {
    id: number,
    title: string,
    description: string,
    srcImage: string,
    altImage: string
    link: string
}


export interface CustomMultiItemSliderProps {
    id: number,
    itemMultiSlider: itemMultiSlider[]
}