import { PropType} from 'vue'

export interface serviceItemsType {
    id: number
    title: string
    subTitle: string
    imgSrc: string
    description: string
    imgAlt: string
    link: string
}

export const ServicesProps = {
    id: { type: String as PropType<string>, required: true, default: '' },
    title: { type: String as PropType<string>, required: true, default: '' },
    description: { type: String as PropType<string>, required: true, default: '' },
    customClassWrapperService: {type: String as PropType<string>, required: false, default: 'd-flex'},
    customClassTextBlock: {type: String as PropType<string>, required: false, default: 'd-flex flex-column'},
    customClassTitle: {type: String as PropType<string>, required: false, default: '' },
    customClassDescription: {type: String as PropType<string>, required: false, default: '' },
    customClassWrapperServiceCard: {type: String as PropType<string>, required: false, default: 'w-100'},
    customClassBodyCard: {type: String as PropType<string>, required: false, default: 'd-flex w-25' },
    serviceItems: {type: Array as PropType<serviceItemsType[]>, required: true, default: () => {}},
}