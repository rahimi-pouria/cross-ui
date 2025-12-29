<template>
  <el-radio value="1" size="large">Option 1</el-radio>
</template>

<script setup lang="ts">
  import { customRadioButtonProps } from "@/props/elementPlus/customRadioButton";

  const props = defineProps({
    ...customRadioButtonProps
  })

</script>

<style scoped lang="scss">

</style>