<template>
  <BBadge :id="idBadge" :variant="variantBadge" :class="customClassBadge" :dot-indicator="dotIndicator">{{ titleBadge }}</BBadge>
</template>

<script setup lang="ts">

import {BBadge} from "bootstrap-vue-next";
import { customBadgeProps } from '@/props/bootstrap/customBadge'

const props = defineProps({
  ...customBadgeProps
})
</script>

<style scoped lang="scss">

</style>