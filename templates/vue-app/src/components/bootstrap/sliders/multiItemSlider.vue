<template>
    <div class="d-flex w-100 p-2 position-relative">
      <div class="d-flex justify-content-between w-100 position-absolute z-3 align-items-center h-100">
        <div class="d-flex">
          <custom-button label="<" type-btn="button" btn-class="arrow-controll-slider" @click="nextSlide" />
        </div>
        <div class="d-flex">
          <custom-button label=">"  type-btn="button" btn-class="arrow-controll-slider"  @click="prevSlide" />
        </div>
      </div>
      <div class="slider-track" :style="`--slides-to-show: ${props.counterShowSlider}; transform: translateX(-${currentIndex * (100 / props.itemSlider)}%);`">
        <CustomCard v-for="(item, i) in visibleSlides" :key="i" id="product-card" :title="item.title" :sub-title="item.subTitle"
            :img-src="item.imgSrc" img-top
            class-card="w-75 multi-item-slider active"
            :description-card="item.description"
            custom-card-link="https://example.com/product"
            :show-btn="true"
            btn-class="btn btn-success"
            label-btn="Buy Now"
            @click="handleBuy"
            img-alt="" label="" link-btn="" type-btn="button"/>
      </div>
    </div>
</template>



<script setup lang="ts">
import CustomCard from "@/components/bootstrap/customCard.vue";
import { multiItemSliderProps } from "@/props/bootstrap/multiItemSlider";
import { ref, watch, computed  } from "vue";
import CustomButton from "@/components/bootstrap/customButton.vue";

const currentIndex = ref(0);


const props = defineProps({
  ...multiItemSliderProps
})

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.itemSlider.length;
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + props.itemSlider.length) % props.itemSlider.length;
}


const visibleSlides = computed(() => {
  const slides = []
  for(let i = 0; i < props.counterShowSlider; i++) {
    slides.push(props.itemSlider[(currentIndex.value + i) % props.itemSlider.length]);
  }
  return slides;
})

</script>

<style scoped lang="scss">
.d-flex > * {
  flex: 0 0 auto;
}
.active {
  display: block;
}
.hidden {
  display: none;
}
.arrow-controll-slider{
  font-size: 20px;
  height: 50px;
  background: #cccccc;
}
</style>
