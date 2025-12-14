import type { PropType } from "vue";

export const customModalProps = {
    id: {type: String as PropType<string>, default: ''},
    titleModal: {type: String as PropType<string>, default: ''},
    description: {type: String as PropType<string>, default: ''},
    customClassDescriptionModal: {type: String as PropType<string>, default: ''},
    modelValue: {type: [String, Number, Boolean] as PropType<string | number | boolean>, default: undefined},
    titleBtnCancel: {type: String as PropType<string>, default: 'cancel'},
    titleBtnConfirm: {type: String as PropType<string>, default: 'confirm'},
    titleBtnShowModal: {type: String as PropType<string>, default: ''},
    openModal: {type: String as PropType<string>, default: ''},
    onOpenedModal: {type: String as PropType<string>, default: ''},
    onCloseModal: {type: String as PropType<string>, default: ''},
    onClosedModal: {type: String as PropType<string>, default: ''},
    customClassFooterModal: {type: String as PropType<string>, default: ''},
    customWithModal: {type:  [String, Number ] as PropType<string | number>, default: '800'},
    typeBtnConfirm: {type: String as PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'>, default: 'primary'},
    typeBtnCancel: {type: String as PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'>, default: 'primary'},
}