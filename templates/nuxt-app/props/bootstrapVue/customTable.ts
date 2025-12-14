import type { PropType } from "vue";

export type itemTableList = {
    [key: string]: string | number | boolean | null;
};

export type fields = {
    key: string;
    label: string;
    headerTitle?: string;
    headerAbbr?: string;
    class?: string;
    sortable?: boolean;
    sortDirection?: 'asc' | 'desc';
    sortByFormatted?: boolean;
    filterByFormatted?: boolean;
    tdClass?: string;
    thClass?: string;
    thStyle?: object;
    variant?: string;
    tdAttr?: object;
    thAttr?: object;
    isRowHeader?: boolean;
    stickyColumn?: boolean;
    scope?: string;
};

export const customTable = {
    id: { type: String as PropType<string>, required: true },
    label: { type: String as PropType<string>, default: '' },
    itemTableList: { type: Array as PropType<itemTableList[]>, required: true },
    fields: { type: Array as PropType<fields[]>, required: true },
    key: { type: [String, Number] as PropType<string | number>, default: '' },
    footerLabel: { type: String as PropType<string>, default: '' },
    footClone: { type: Boolean as PropType<boolean>, default: false },
    sortBy: { type: [String, Array] as PropType<string | string[]>, default: '' },
    sortDesc: { type: Boolean as PropType<boolean>, default: false },
    sortDirection: { type: String as PropType<'asc' | 'desc'>, default: '' },
    perPage: { type: Number as PropType<number>, default: 0 },
    currentPage: { type: Number as PropType<number>, default: 1 },
    striped: { type: Boolean as PropType<boolean>, default: true },
    hover: { type: Boolean as PropType<boolean>, default: true },
    selectMode: { type: String as PropType<"multi" | "single" | "range">, default: null },
    stickyHeader: { type: Boolean as PropType<boolean>, default: false },
    tbodyTransitionProps: { type: Object as PropType<object>, default: null },
    theadTransitionProps: { type: Object as PropType<object>, default: null },
};
