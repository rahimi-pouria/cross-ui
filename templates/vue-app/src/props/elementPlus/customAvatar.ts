import { PropType } from "vue";


export const customAvatarProps = ({
    id: {type: String as PropType<string>, required: true , default: ''},
    srcAvatar: {type: String, required: false, default: ''},
    size: {type: Number as PropType<number>, default: 60},
})