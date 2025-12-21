<template>
  <div class="d-flex gap-2">
    <multi-item-slider v-if="showSlider" :item-slider="itemSlider" active-slide/>
    <custom-card v-else v-for="(item) in testimonialItem" :key="item.id" :title="item.title" label="see more" type-btn="button" :img-src="item.imgSrc"
        :img-alt="item.imgAlt" :link-btn="item.link"  label-btn="" :description-card="item.description"/>
  </div>
</template>

<script setup lang="ts">

import CustomCard from "@/components/bootstrap/customCard.vue";
import {testiMonialsProps} from "@/props/bootstrap/sctions/testimonials";
import MultiItemSlider from "@/components/bootstrap/sliders/multiItemSlider.vue";
import {multiItemSliderProps} from "@/props/bootstrap/multiItemSlider";

const props = defineProps({
  ...testiMonialsProps,
  ...multiItemSliderProps
})
</script>

<style scoped lang="scss">

</style>