export type itemCarousel = {
    name: string,
    description: string,
    srcImage: string,
    altImg: string
}

export interface CustomCarouselProps {
    idCarousel: string,
    customClassCarouselWrapper: string
    itemCarousel: itemCarousel[],
    customHeight: string,
    customClassImg: string,
    customClassWrapperText: string,
    customClassNameTextSlider: string,
    customClassDescriptionSlider: string
}