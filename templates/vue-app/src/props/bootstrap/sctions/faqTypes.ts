import { PropType } from 'vue';

export interface faqItemProps {
    id: number;
    title: string;
    description: string;
}

export const faqType = {
    id: { type: String as PropType<string>, required: false, default: '' },
    title: { type: String as PropType<string>, required: false, default: '' },
    description: { type: String as PropType<string>, required: false, default: '' },
    customClassWrapperFaq: {type: String as PropType<string>, required: false, default: 'd-flex flex-column' },
    customClassTitle: {type: String as PropType<string>, required: false, default: 'd-flex'},
    customClassQuestion: {type: String as PropType<string>, required: false, default: 'd-flex flex-column gap-3' },
    faqItem:{type: Array as PropType<faqItemProps[]>, required: false, default: () => {}},
}