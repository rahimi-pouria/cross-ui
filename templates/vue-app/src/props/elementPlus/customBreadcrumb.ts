import { PropType } from "vue";


export interface breadCrumbItemType {
    id: number;
    title: string;
    link: string;
    icon?: string;
}

export const customBreadcrumbProps = {
    idBreadcrumb: {type: String as PropType<string>, required: true, default: ''},
    breadCrumbItem: {type: Array as PropType<breadCrumbItemType[]>, required: true, default: () => {}},
    separatorBreadCrumb: {type: String as PropType<string>,required: true, default: ''},
    customClassBreadCrumb: {type: String as PropType<string>,required: true, default: ''},
}