import {PropType} from "vue";

export interface servicesType {
    id: number,
    title: string,
    description: string,
    link: string,
    image: string,
    alt: string,
}


export const featuresSectionProps = {
    idFeaturesSection: {type: String as PropType<any>, required: true, default: ''},
    titleFeaturesSection: {type: String as PropType<any>, required: true, default: ''},
    descriptionFeaturesSection: {type: String as PropType<any>, required: true, default: ''},
    serviceItem: {type: Array as PropType<servicesType[]>, required: true, default: () => []},
    customClassWrapperServiceSection: {type: String as PropType<string>, required: true, default: 'w-100 d-flex flex-column justify-content-center align-items-center'},
    customClassHeadingServiceSection: {type: String as PropType<string>, required: true, default: 'd-flex flex-column justify-content-center align-items-center'},
    customClassCardServiceSection: {type: String as PropType<string>, required: true, default: ''},
    titleLink: {type: String as PropType<string>, required: false, default: ''},
    customClassWrapperCardServiceSection: {type: String as PropType<string>, required: false, default: 'd-flex gap-4 justify-content-center align-items-center flex-wrap'},
    customClassLinkCardServiceSection: {type: String as PropType<string>, required: true, default: ''},
    customClassTitleCardServiceSection: {type: String as PropType<string>, required: false, default: ''},
    customClassDescriptionServiceSection: {type: String as PropType<string>, required: false, default: ''},
    customClassImageServiceSection: {type: String as PropType<string>, required: false, default: ''},
    customClassWrapperImageServiceSection: {type: String as PropType<string>, required: false, default: 'd-flex'},
    customClassIconServiceSection: {type: String as PropType<string>, required: false, default: ''},
}