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
    customClassBodyCard: {type: String as PropType<string>, required: false, default: 'col-md-4' },
    customClassCardSection: {type: String as PropType<string>, required: false, default: 'card h-100 text-center border-0 shadow-sm' },
    customClassCardHeader: {type: String as PropType<string>, required: false, default: 'd-flex justify-content-center mt-4' },
    customClassCircleIcon:{type: String as PropType<string>, required: false, default: 'text-white rounded-circle p-3'},
    customClassIcon: {type: String as PropType<string>, required: false, default: ''},
    customClassCardBody:{type: String as PropType<string>, required: false, default: 'card-body'},
    customClassCardTitle: {type: String as PropType<string>, required: false, default: 'card-title fw-bold mt-3' },
    customClassDescriptionCard: {type: String as PropType<string>, required: false, default: 'card-text text-muted' },
    customClassCardFooter: {type: String as PropType<string>, required: false, default: 'card-footer bg-transparent border-0 mb-3'},
    customClassLinkCard: {type: String as PropType<string>, required: false, default: 'btn btn-success btn-sm'},
    serviceItems: {type: Array as PropType<serviceItemsType[]>, required: true, default: () => {}},
    labelLink: {type: String as PropType<string>, required: false, default: 'see more'},
}