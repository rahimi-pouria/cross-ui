<template>
  <div class="d-flex">
    <el-steps :id="idStep" :class="['wrapperSteps', customClassWrapperSteps]" :space="spaceSteps" :active="activeSteps"
              :simple="simpleSteps" :direction="directionSteps" :process-status="processStatusSteps" :align-center="alignCenterSteps"
              :description="descriptionSteps">
      <el-step v-for="(item, i) in stepItems" :key="i" :title="item.title" :icon="item.icon" />
    </el-steps>
  </div>
</template>

<script setup lang="ts">
import { customStepsProps } from "@/props/elementPlus/customSteps";

const props = defineProps({
  ...customStepsProps,
})
</script>

<style scoped lang="scss">
  .wrapperSteps{
    max-width: 600px;
    background: #fff
  }
</style>