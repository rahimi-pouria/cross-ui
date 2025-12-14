import type { PropType } from "vue";

export type items = {
    id: number,
    src: string,
    alt: string,
    title: string,
    description: string

}

export const customMultiItemSliderProps = {
    id: {type: String as PropType<string>, default: ''},
    perSlide: {type: Number as PropType<number>, default: 4},
    itemCard: {type: Array as PropType<items[]>, default: () => []}
}