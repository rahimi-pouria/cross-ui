import { PropType } from "vue";

export interface testimonialItemTypes {
    id: number;
    title: string;
    description: string;
    imgSrc?: string;
    imgAlt?: string;
    link: string;
}


export const testiMonialsProps = {
    id: {type: String as PropType<string>, required: true, default: ''},
    testimonialItem: {type: Array as PropType<testimonialItemTypes[]>, required: true, default: () => {}},
    showSlider: {type: Boolean as PropType<boolean>, required: false, default: false},
}