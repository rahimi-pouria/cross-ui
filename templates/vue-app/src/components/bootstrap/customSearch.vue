<template>
  <BNavForm :class="customClassNavForm">
    <custom-input  :class="customClassInput" :placeholder="placeholder" v-model="text"/>
    <custom-button :label="label" :type-btn='typeBtn' @click="click" :variant="variant"/>
  </BNavForm>
</template>

<script setup lang="ts">

import {BNavForm} from "bootstrap-vue-next";
import CustomInput from "@/components/bootstrap/customInput.vue";
import CustomButton from "@/components/bootstrap/customButton.vue";
import { customSearchProps } from "@/props/bootstrap/customSearch";
import { customButtonProps } from "@/props/bootstrap/customButton";
import {ref, watch} from "vue";

const props = defineProps({
  ...customSearchProps,
  ...customButtonProps
})


const text = ref(props.modelValue);

const emit = defineEmits(['click', 'update:modelValue']);

watch(() => props.modelValue, (val) => {
  text.value = val;
});

watch(text, (newVal) => {
  emit('update:modelValue', newVal);
});

const click = (params: any) => {
  emit('click', params);
  emit('update:modelValue', !props.modelValue);

};







</script>

<style scoped lang="scss">

</style>