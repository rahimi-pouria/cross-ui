import type { PropType } from "vue";

export type items = {
    id: number,
    title: string,
    description: string
}

export const customAccordionProps = {
    id: {type: String as PropType<string>, default: ''},
    customActiveTab: {type: Number as PropType<number>, default: 1},
    customClassAccordion: {type: String as PropType<string>, default: ''},
    customClassWrapperAccordion: {type: String as PropType<string>, default: ''},
    items: {type: Array as PropType<items[]>, default: () => []},
    customClassDescriptionAccordion: {type: String as PropType<string>, default: ''},
}