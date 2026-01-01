import { PropType } from "vue";

export const customChooseFileProps = {
    idChooseFile: {type: String as PropType<string>, required: true, default: ''},
    idPreviewImage: {type: String as PropType<string>, required: false, default: ''},
    customClassPreviewImage: {type: String as PropType<string>, required: false ,default: ''},
    idPreviewImage: {type: String as PropType<string>, required: false, default: ''},
    autoUploadChooseFile: {type: Boolean as PropType<boolean>, required: false, default: false},
    listTypeChooseFile: {type: String as PropType<string>, required: false, default: 'picture-card'},
    actionChooseFile: {type: String as PropType<string>, required: false, default: '#'},
    multipleChooseFile: {type: Boolean as PropType<boolean>, required: false, default: false},
    dragChooseFile: {type: Boolean as PropType<boolean>, required: false, default: false},
    nameChooseFile: {type: String as PropType<string>, required: false, default: ''},
    withCredentialsChooseFile: {type: Boolean as PropType<boolean>, required: false, default: false},
    showFileListChooseFile:{type: Boolean as PropType<boolean>, required: false, default: false},
}