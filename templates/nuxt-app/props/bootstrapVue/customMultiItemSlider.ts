import type { PropType } from "vue";

export type slides = {
    title: string,
    img: string,
    alt: string,
    description: string,
    linkBtn: string
}

export const customMultiItemSlider = {
    idBtn: { type: String as PropType<string>, required: true },
    slides: { type: Array as PropType<slides[]>, required: true },
    loop: { type: Boolean as PropType<boolean>, default: true },
    btnClass: { type: String as PropType<string>, default: '' },
    multiItemClass: { type: String as PropType<string>, default: '' },
    noBody: { type: Boolean as PropType<boolean>, default: false },
    autoplay: { type: Boolean as PropType<boolean>, default: true },
    navigation: { type: Boolean as PropType<boolean>, default: true },
    pagination: { type: [Boolean, Object] as PropType<boolean | object>, default: () => ({ clickable: true }) },
    slidesPerView: { type: Number as PropType<number>, default: 3 },
    spaceBetween: { type: Number as PropType<number>, default: 16 },
    labelBtn: { type: String as PropType<string>, default: '' },
    showBtn: { type: Boolean as PropType<boolean>, default: false },
    overlay: { type: Boolean as PropType<boolean>, default: false },
    slidesPerGroup: { type: Number as PropType<number>, default: 1 },
    typeButton: { type: String as PropType<string>, validator: (value: any) => ['button', 'submit', 'reset'].includes(value), default: 'button' },
    variantBtn: { type: String as PropType<string>, default: '' },
    customClassText: { type: String as PropType<string>, default: '' },
    imgSrcError: { type: String as PropType<string>, default: '' },
    breakpoints: { type: Object as PropType<object>,
        default: () => ({
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
        })
    }
}
