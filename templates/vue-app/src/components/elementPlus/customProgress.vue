<template>
  <el-progress
      :text-inside="true"
      :stroke-width="24"
      :percentage="100"
      status="success"
  />
</template>

<script setup lang="ts">
  import { customProgressProps } from "@/props/elementPlus/customProgress";

  const props = defineProps({
    ...customProgressProps,
  })
</script>

<style scoped lang="scss">

</style>