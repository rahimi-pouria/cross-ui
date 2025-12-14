import type { PropType } from "vue";

export type TabItem  = {
    id: number,
    title: string,
    description: string,
    icon: string
}

export const customTabsProps = {
    id: {type: String as PropType<string>, default: ''},
    tabs: {type: Array as PropType<TabItem[]>, default: () => []},
    type: {type: String as PropType<'primary' | 'card' | 'border-card'>, default: 'border-card'},
    customClassDescriptionTabs: {type: String as PropType<string>, default: ''},
    customClassTitleTabs: {type: String as PropType<string>, default: ''}

}