import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'

type AnyObj = Record<string, any>

export const useAutoStore = defineStore('auto', () => {
    const state = reactive<AnyObj>({})
    const actions: AnyObj = {}
    const getters: AnyObj = {}

    const addModule = (options: { state?: AnyObj; actions?: AnyObj; getters?: AnyObj }) => {
        if (options.state) {
            Object.assign(state, options.state)
        }

        if (options.actions) {
            for (const key in options.actions) {
                actions[key] = (...args: any[]) => options.actions[key](state, ...args)
            }
        }

        if (options.getters) {
            for (const key in options.getters) {
                getters[key] = computed(() => options.getters![key](state))
            }
        }

        return { state, actions, getters }
    }

    return { state, actions, getters, addModule }
})
