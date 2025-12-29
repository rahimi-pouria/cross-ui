<template>
  <el-checkbox :id="idCheckbox" v-model="checkValue" :label="labelCheckbox" :size="sizeCheckbox" :disabled="disabledCheckBox"
               :border="borderCheckBox" :checked="checkedCheckBox" :value="valueCheckBox" :true-value="trueValueCheckBox"
               :false-value="falseValueCheckBox" :name="nameCheckbox" :indeterminate="indeterminateCheckbox"
               :validate-event="validateEventCheckBox" :tabindex="tabindexCheckBox" :aria-controls="ariaControlsCheckBox"
               :true-label="trueLabelCheckBox" :false-label="falseLabelCheckBox" :aria-label="ariaLabelCheckBox" :controls="controlsCheckBox"/>
</template>

<script setup lang="ts">
  import { customCheckboxProps } from "@/props/elementPlus/customCheckbox";
  import {ref, watch} from "vue";

  const props = defineProps({
    ...customCheckboxProps,
  })

  const checkValue = ref(props.modelValue)
  const emit = defineEmits(['update:modelValue'])

  watch(() => props.modelValue, (value) => {
    checkValue.value = value;
  })

  watch(() => props.modelValue, (value) => {
    emit('update:modelValue', value);
  })

</script>

<style scoped lang="scss">

</style>