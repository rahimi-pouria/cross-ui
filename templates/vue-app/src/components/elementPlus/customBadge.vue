<template>
  <el-badge :id="idBadge" :value="valueBadge" :class="customClassBadge" :max="maxBadge" :is-dot="isDotBadge" :hidden="hiddenBadge" :type="typeBadge"
    :show-zero="showZeroBadge" :color="colorBadge"
  >
      <slot name="content" />
      <slot name="customBodyBadge" />
  </el-badge>
</template>

<script setup lang="ts">
  import { customBadgeProps } from "@/props/elementPlus/customBadge";

  const props = defineProps({
    ...customBadgeProps,
  })


</script>

<style scoped lang="scss">

</style>