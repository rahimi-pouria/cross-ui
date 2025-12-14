<template>
  <BCarousel v-model="currentIndex" :id="id" :fade="fade" :controls="controls" :controls-next-text="controlsNextText" :controls-prev-text="controlsPrevText"
      :indicators="indicators" :indicators-button-label="indicatorsButtonLabel" :interval="interval" :keyboard="keyboard"
      :label-indicators="labelIndicators" :no-animation="noAnimation" :no-hover-pause="noHoverPause" :no-touch="noTouch"
      :no-wrap="noWrap" :ride="ride" :ride-reverse="rideReverse" :touch-threshold="touchThreshold" :class="customClassSlider">

    <BCarouselSlide v-for="(item, index) in itemSlide" :key="index" :img-src="item.img" :img-alt="item.title" :img-height="imgHeight" :img-width="imgWidth">
      <h1>{{ item.title }}</h1>
      <p>{{ item.description }}</p>
    </BCarouselSlide>

  </BCarousel>

  <template v-if="showThumbnailSlider">
    <div :class="thumbnailsWrapperClass">
      <img v-for="(item, index) in itemSlide" :key="index" :src="item.img" @click="currentIndex = index"
           :class="[thumbnailClass || 'thumbnail', { active: currentIndex === index }]" alt=""/>
    </div>
  </template>

</template>

<script setup lang="ts">
import { customCarousel } from "@/props/customCarousel.ts"
import { BCarousel, BCarouselSlide } from "bootstrap-vue-next"
import { ref, watch } from "vue"

const props = defineProps(customCarousel)
const emit = defineEmits(["update:modelValue"])

const currentIndex = ref(props.modelValue)

watch(() => props.modelValue, (newVal) => {currentIndex.value = newVal})

watch(currentIndex, (newVal) => {emit("update:modelValue", newVal)})
</script>

<style scoped>
.carousel-item {
  height: 500px;
}
.carousel-item img {
  height: 100%;
  object-fit: cover;
}
.thumbnail {
  width: 100px;
  height: 60px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 4px;
  transition: border-color 0.3s;
}

.thumbnail.active {
  border-color: #007bff;
}
</style>
