import { ref, watch } from 'vue'

export const useVModelSync = <T>(props: Record<string, any>, emit: (event: string, ...args: any[]) => void, propName = 'modelValue') => {
    const state = ref<T>(props[propName])

    watch(() => props[propName], (val) => {
        state.value = val
        })

    watch(state, (val) => {
        emit(`update:${propName}`, val)
    })

    return state
}
