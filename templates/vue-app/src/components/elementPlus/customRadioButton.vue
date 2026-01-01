<template>
  <el-radio v-model="selectedRadio" :value="valueRadioButton" :size="sizeRadioButton"
            :border="borderRadioButton" :disabled="disabledRadioButton" :label="labelRadioButton">{{ titleRadioButton }}</el-radio>
</template>

<script setup lang="ts">
  import { customRadioButtonProps } from "@/props/elementPlus/customRadioButton";
  import {ref, watch} from 'vue'

  const props = defineProps({
    ...customRadioButtonProps
  })
  const emit = defineEmits(['update:modelValueRadioButton'])

  const selectedRadio = ref(props.modelValueRadioButton)

  watch(selectedRadio, val => {
    emit("update:modelValue", val);
  });

  watch(() => props.modelValue, val => {
    selectedRadio.value = val;
  });


</script>

<style scoped lang="scss">

</style>