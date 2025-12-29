import {defineComponent, PropType} from "vue";

export const customRadioButtonProps = {
    idRadioButton: {type: String as PropType<string>, required: true, default: ''},
}