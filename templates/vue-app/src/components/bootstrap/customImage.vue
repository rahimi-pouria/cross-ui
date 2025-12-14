<template>
  <BImg :id="id" :src="srcImage" :alt="alt" :fluid="fluid" :fluid-grow="fluidGrow" :lazy="lazy" :width="width" :height="height" :thumbnail="thumbnail"
      :sizes="sizes" :rounded="rounded" :rounded-bottom="roundedBottom" :rounded-end="roundedEndP" :rounded-start="roundedStart" :rounded-top="roundedTop"/>
</template>

<script setup lang="ts">

import {BImg} from "bootstrap-vue-next";
import { customImageProps } from "@/props/bootstrap/customImage";

const props = defineProps({
  ...customImageProps
})

</script>

<style scoped lang="scss">

</style>