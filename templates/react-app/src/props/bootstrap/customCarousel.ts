export type itemSlider = {
    id: number,
    srcImage: string,
    title: string,
    description: string,
    altImage: string
}


export interface CustomCarouselProps {
    id: string,
    customClassImgCarousel: string,
    customClassCarouselItem: string,
    customClassCarouselCaption: string,
    customClassTitleCarousel: string,
    customClassCarouselDescription: string,
    customClassCarousel: string,
    dataBsTheme: string
    itemSlider: itemSlider[],
    showBtn: boolean
}