<template>
    <custom-button @click="click" :label="titleButton"/>
    <BOffcanvas v-model="show" />
</template>

<script setup lang="ts">
import { customOffcanvasProps } from "@/props/bootstrap/customOffcanvas";
import CustomButton from "@/components/bootstrap/customButton.vue";
import { customButtonProps } from "@/props/bootstrap/customButton";
import {watch, ref} from "vue";
import { BOffcanvas } from "bootstrap-vue-next";

const props = defineProps({
  ...customOffcanvasProps,
  ...customButtonProps
});

const emit = defineEmits(['click', 'update:modelValue'])
const show = ref(props.modelValueCanvas)

watch(show, (newVal) => {
  emit('update:modelValue', newVal)
})

const click = async (params: any) => {
  emit('click', params)
  emit('update:modelValue', !props.modelValue)
  show.value = !show.value;
}
</script>

<style scoped lang="scss">

</style>