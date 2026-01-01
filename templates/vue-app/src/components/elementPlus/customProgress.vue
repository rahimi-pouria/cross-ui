<template>
  <el-progress :id="idProgress" :text-inside="textInside" :stroke-width="strokeWidthProgress" :percentage="percentageProgress"
      :status="statusProgress" :striped="stripedProgress" :striped-flow="stripedFlowProgress" :duration="durationProgress"
            :indeterminate="indeterminateProgress"  :color="colorProgress"/>
</template>

<script setup lang="ts">
  import { customProgressProps } from "@/props/elementPlus/customProgress";

  const props = defineProps({
    ...customProgressProps,
  })


</script>

<style scoped lang="scss">

</style>