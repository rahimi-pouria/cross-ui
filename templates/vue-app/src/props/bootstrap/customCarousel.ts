import type {PropType} from 'vue'

export type itemSlider  = {
    img: string,
    alt: string,
    title: string,
    description: string,
    linkBtn: string,
    label: string,
    btnClass: string
}

export const customCarousel = {
    id: { type: String as PropType<string>, required: true },
    itemSlide: { type: Array as PropType<itemSlider[]>, required: true },
    customClassSlider: { type: String as PropType<string>, default: 'w-100' },
    background: { type: String as PropType<string>, default: undefined },
    controls: { type: Boolean as PropType<boolean>, default: false },
    controlsNextText: { type: String as PropType<string>, default: 'Next' },
    controlsPrevText: { type: String as PropType<string>, default: 'Previous' },
    fade: { type: Boolean as PropType<boolean>, default: false },
    imgHeight: { type: String as PropType<string>, default: undefined },
    imgWidth: { type: String as PropType<string>, default: undefined },
    indicators: { type: Boolean as PropType<boolean>, default: false },
    indicatorsButtonLabel: { type: String as PropType<string>, default: 'Slide' },
    interval: { type: Number as PropType<number>, default: 5000 },
    keyboard: { type: Boolean as PropType<boolean>, default: true },
    labelIndicators: { type: String as PropType<string>, default: 'Select a slide to display' },
    modelValue: { type: Number as PropType<number>, default: 0 },
    noAnimation: { type: Boolean as PropType<boolean>, default: false },
    noHoverPause: { type: Boolean as PropType<boolean>, default: false },
    noTouch: { type: Boolean as PropType<boolean>, default: false },
    noWrap: { type: Boolean as PropType<boolean>, default: false },
    ride: { type: String as PropType<string>, default: 'carousel' },
    rideReverse: { type: Boolean as PropType<boolean>, default: false },
    touchThreshold: { type: Number as PropType<number>, default: undefined },
    wrapperClass: { type: String as PropType<string>, required: false, default: '' },
    thumbnailClass: { type: String, default: 'thumbnail' },
    intervalTimeSlide: { type: Number as PropType<number>, default: 0 },
    showThumbnailSlider: { type: Boolean as PropType<boolean>, default: false },
    thumbnailsWrapperClass: { type: String as PropType<string>, default: 'w-100 d-flex justify-content-center align-items-center' }
}
