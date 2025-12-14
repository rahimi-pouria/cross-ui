import { PropType } from 'vue'

export const customProgressProps = {
    idProgress: { type: String, required: false, default: '' },
    titleProgress: { type: String, required: true, default: '' },
    animated: { type: Boolean, required: false, default: false },
    variantProgress: { type: String as PropType<'success' | 'info' | 'warning' | 'danger' | 'primary'>, required: false, default: 'primary' },
    valueProgress: { type: Number, required: false, default: 0 },
    customClassProgress: { type: String, required: false, default: 'mt-2' },
    striped: { type: Boolean, required: false, default: false },
    heightProgress: { type: String, required: false, default: '1rem' }
}
