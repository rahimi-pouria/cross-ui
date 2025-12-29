<template>
  <el-tooltip content="Top center" placement="top">
    <el-button>Dark</el-button>
  </el-tooltip>
</template>

<script setup lang="ts">
  import { customTooltipProps } from "@/props/elementPlus/customTooltip";

  const props = defineProps({
    ...customTooltipProps
  })
</script>

<style scoped lang="scss">

</style>