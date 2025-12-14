import {PropType} from "vue";

export interface breadcrumbItems {
    text: string,
    href: string,
}

export const customBreadcrumbProp = {
    items: {type: Array as PropType<breadcrumbItems[]>, required: true, default: () => []},

}