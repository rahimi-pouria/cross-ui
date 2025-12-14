<template>
  <BTooltip>
    <template #target>
      <slot />
    </template>
    {{ description }}
  </BTooltip>
</template>

<script setup lang="ts">

import {BTooltip} from "bootstrap-vue-next";
</script>

<style scoped lang="scss">

</style>