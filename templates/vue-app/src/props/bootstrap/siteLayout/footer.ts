import {PropType} from "vue";

export const footerProps = {
    id: {type: String as PropType<string>, required: true, default: ''},
    customClassWrapperFooter: {type: String as PropType<string>, required: true, default: 'd-flex bg-black-footer justify-content-center align-items-center p-5'},
}