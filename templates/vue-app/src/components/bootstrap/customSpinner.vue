<template>
  <BSpinner :type="typeSpinner" :label="labelSpinner" :class="customSpinnerProps" :variant="variantSpinner" />
</template>

<script setup lang="ts">

import {BSpinner} from "bootstrap-vue-next";
import { customSpinnerProps } from "@/props/bootstrap/customSpinner";

const props = defineProps({
  ...customSpinnerProps
})

</script>

<style scoped lang="scss">

</style>