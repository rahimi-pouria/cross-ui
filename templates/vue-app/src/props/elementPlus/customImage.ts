import { PropType } from "vue";

export type PreviewSrcListType = string[];

export const customImageProps = {
    id: { type: String as PropType<string>, required: true, default: '' },
    customClassImage: {type: String as PropType<string>, required: false, default: ''},
    srcImg: { type: String as PropType<string>, required: true, default: '' },
    lazyLoad: { type: Boolean as PropType<boolean>, default: false },
    altImage: { type: String as PropType<string>, required: true, default: '' },
    fitImage: {type: String as PropType<'fill' | 'contain' | 'cover' | 'none' | 'scale-down'>, default: 'fill'},
    zoomRate: { type: Number as PropType<number>, default: 0 },
    maxScale: { type: Number as PropType<number>, default: 0 },
    minScale: { type: Number as PropType<number>, default: 0 },
    showProgress: { type: Boolean as PropType<boolean>, required: false, default: false },
    initialIndex: { type: Number as PropType<number>, required: false, default: 0 },
    previewSrcList: { type: Array as PropType<PreviewSrcListType>, default: () => [] },

};
