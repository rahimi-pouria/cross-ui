
export interface itemBreadcrumbsType {
    id: string;
    title: string;
    href: string;
}

export interface customBreadcrumbsProps {
    idBreadcrumbs: string
    itemBreadcrumbs: itemBreadcrumbsType[],
    customClassWrapperBreadcrumb: string,
    customClassBreadcrumbItem: string,
    customClassBreadcrumbLink: string
}