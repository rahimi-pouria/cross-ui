<template>
    <div class="d-flex flex-column">
      <p>{{ titleProgress }}</p>
      <BProgress
          :value="valueProgress"
          :variant="variantProgress"
          :animated="animated"
          :striped="striped"
          :height="heightProgress"
          :class="customClassProgress"
      />
    </div>
</template>

<script setup lang="ts">
import { BProgress } from "bootstrap-vue-next";

import { customProgressProps } from "@/props/bootstrap/customProgress";

const props = defineProps({
  ...customProgressProps
})

</script>

<style scoped lang="scss">

</style>