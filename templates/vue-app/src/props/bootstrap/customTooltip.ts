import {defineComponent, PropType} from "vue";

export const customTooltipProps = {
    id: {type: String as PropType<string>, required: true, default: ''},
    description: {type: String as PropType<string>, required: false, default: ''},
}