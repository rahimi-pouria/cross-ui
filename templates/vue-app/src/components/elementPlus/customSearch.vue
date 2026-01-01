<template>
    <custom-input :label="label" :model-value="input" required input-type="text"/>
    <slot name="customBody" />
</template>

<script setup lang="ts">
  import { customSearchProps } from "@/props/elementPlus/customSearch";
  import CustomInput from "@/components/elementPlus/customInput.vue";
  import { customInputProps } from "@/props/elementPlus/customInput";
  import { ref } from "vue";
  const input = ref()

  const props = defineProps({
    ...customSearchProps,
    ...customInputProps,
  })
  const click = (params: any) => {
    emit('click', params);
    emit('update:modelValue', !props.modelValue);
  };

</script>

<style scoped lang="scss">

</style>