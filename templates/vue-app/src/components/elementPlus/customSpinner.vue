<template>
  <div class="d-flex">
    spinner
  </div>
</template>

<script setup lang="ts">
  import { customSpinnerProps } from "@/props/elementPlus/customSpinner";

  const props = defineProps({
    ...customSpinnerProps,
  })
</script>

<style scoped lang="scss">

</style>