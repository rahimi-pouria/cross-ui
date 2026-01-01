import { PropType } from "vue";

export const customNotificationProps = {
    idNotification: {type: String as PropType<string>, required: true, default: ''},
    title: {type: String as PropType<string>, required: true, default: ''},
    message: {type: String as PropType<string>, required: true, default: ''},
    typeMessage: {type: String as PropType<string>, required: true, default: ''},
}