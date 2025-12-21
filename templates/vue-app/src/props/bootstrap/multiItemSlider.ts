import { PropType } from 'vue';

export interface itemSliderType {
    id: number;
    title: string;
    description: string;
    imgSrc?: string;
    imgAlt?: string;
    link: string;
}

export const multiItemSliderProps = {
    id: {type: String as PropType<string>,required: false, default: ''},
    itemSlider: {type: Array as PropType<itemSliderType[]>,required: true, default: () => {}},
    counterShowSlider: {type: Number as PropType<number>,required: false, default: 4},
    activeSlide: {type: Boolean as PropType<boolean>,required: true, default: true},
}