import type { PropType } from "vue";

export type itemCarousel = {
    id: number,
    srcImage: string,
    altImage: string
}

export const customCarouselProps = {
    id: {type: String as PropType<string>, default: ''},
    title: { type: String as PropType<string>, default: '500px' },
    description: {type: String as PropType<string>, default: ''},
    srcImg: {type :String as PropType<string>, default: ''},
    altImg: {type: String as PropType<string>, default: ''},
    customClassImg: {type: String as PropType<string>, default: ''},
    itemCarousel: { type: Array as PropType<itemCarousel[]>, default: () => [] },
    customHeight: { type: String as PropType<string>, default: '500px' },
    interval: {type: Number as PropType<number>, default: 5000},
    loop: {type: Boolean as PropType<boolean>, default: false},
    autoplay: {type: Boolean as PropType<boolean>, default: false}
}