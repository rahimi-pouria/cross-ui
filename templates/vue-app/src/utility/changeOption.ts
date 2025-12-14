import { optionsDropdownType } from "@/props/tailwind/customDropDownProps";

export const changeOption = (options: optionsDropdownType[], selectedId: number) => {
    if (!Array.isArray(options)) return;

    const item = options.find(opt => Number(opt.idOption) === selectedId);
    if (!item) return;

    // change lang
    if (item.type === 'lang') {
        const lang = item.value;
        localStorage.setItem('lang', lang);
    }

    // change theme
    if (item.type === 'theme') {
        const theme = item.value;
        localStorage.setItem('theme', theme);
    }

    return item;
};
