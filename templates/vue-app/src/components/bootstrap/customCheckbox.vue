<template>
  <BFormCheckbox :id="idCheckbox" v-model="selected" :value="valueCheckbox" :unchecked-value="uncheckedValue">
    {{ titleCheckbox }}
  </BFormCheckbox>
</template>

<script setup lang="ts">
import {customCheckboxProps} from "@/props/bootstrap/CustomCheckbox";
import { BFormCheckbox } from "bootstrap-vue-next";
import {ref, watch} from "vue";

const props = defineProps({
  ...customCheckboxProps,
})

const emit = defineEmits(['update:modelValue'])

const selected = ref(props.modelValue)

watch(selected, (value: boolean) => {
  emit('update:modelValue', value)
})


</script>

<style scoped lang="scss">

</style>