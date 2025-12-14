<template>
  <BPlaceholderWrapper :loading="loading">
    <slot />
    <template #loading>
      <slot name="loadingData" />
    </template>
  </BPlaceholderWrapper>
</template>

<script setup lang="ts">

import {BPlaceholderWrapper} from "bootstrap-vue-next";
import { customPlaceholderProps } from "@/props/bootstrap/customPlaceholder";
const props = defineProps({
  ...customPlaceholderProps
})
</script>

<style scoped lang="scss">

</style>