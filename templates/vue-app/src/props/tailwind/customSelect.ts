import { PropType } from "vue";

export interface optionsTypes {
    idOption: number;
    title: string;
    icon: string;
}

export const customSelectProps = {
    idSelect: { type: String as PropType<string>, required: true },
    titleSelect: { type: String as PropType<string>, required: false, default: '' },
    options: { type: Array as PropType<optionsTypes[]>, required: true, default: () => [] },
    showLang: { type: Boolean as PropType<boolean>, required: false, default: false },
    placeholder: { type: String as PropType<string>, required: false, default: '' },
    customClassLabelSelect: {type:String as PropType<string>, required: false, default: 'block mb-2.5 text-sm font-medium text-heading' },
    customClassSelect: {type:String, required: false, default: 'block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body' },
};
