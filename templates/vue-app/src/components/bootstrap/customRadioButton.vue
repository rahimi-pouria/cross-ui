<template>
  <BFormRadio v-model="selected" :value="valueRadioButton">
    {{ titleRadioButton }}
  </BFormRadio>
</template>

<script setup lang="ts">
import { BFormRadio } from "bootstrap-vue-next";
import { customRadioButtonProps } from "@/props/bootstrap/customRadioButton";
import {ref, watch} from "vue";

const props = defineProps({
  ...customRadioButtonProps
});

const emit = defineEmits(['update:modelValue'])

const selected = ref(props.modelValue)

watch(selected, (value: boolean) => {
   emit('update:modelValue', value)
})

</script>

<style scoped lang="scss">

</style>