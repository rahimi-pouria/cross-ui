<template>
  <custom-carousel v-if="showCarousel" :item-slide="itemSlide" :controls="controls" :indicators="indicators" :ride="ride" :id="idCarousel"
      :fade="fade"  :controls-next-text="controlsNextText" :controls-prev-text="controlsPrevText" :indicators-button-label="indicatorsButtonLabel" :interval="interval"
      :keyboard="keyboard" :label-indicators="labelIndicators" :no-animation="noAnimation" :no-hover-pause="noHoverPause" :no-touch="noTouch" :no-wrap="noWrap"
      :ride-reverse="rideReverse" :touch-threshold="touchThreshold" :class="customClassSlider" />

  <custom-image v-else :id="id" :src-image="srcImage" :alt="alt" :fluid="fluid" :fluid-grow="fluidGrow" :lazy="lazy" :width="width" :height="height" :thumbnail="thumbnail"
                :sizes="sizes" :rounded="rounded" :rounded-bottom="roundedBottom" :rounded-end="roundedEndP" :rounded-start="roundedStart" :rounded-top="roundedTop"/>
</template>

<script setup lang="ts">

import CustomCarousel from "@/components/bootstrap/sliders/customCarousel.vue";
import CustomImage from "@/components/bootstrap/customImage.vue";
import { heroSectionProps } from "@/props/bootstrap/sctions/heroSection";
import { customCarousel } from "@/props/bootstrap/customCarousel"
import { customImageProps } from "@/props/bootstrap/customImage";

const props = defineProps({
  ...heroSectionProps,
  ...customCarousel,
  ...customImageProps
})


</script>

<style scoped lang="scss">

</style>