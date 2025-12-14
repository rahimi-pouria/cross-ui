<template>
  <el-carousel :height="props.customHeight">
    <el-carousel-item v-for="item in props.itemCarousel":key="item.id" class="carousel-item">
      <img :src="item.srcImage" :alt="item.altImage" class="cover-image" :class="customClassImg"/>
      <div class="slot-overlay">
        <slot :name="`customSlide-${item.id}`" />
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
import { customCarouselProps } from "@/props/customCarousel.ts";

const props = defineProps({
  ...customCarouselProps
})
</script>

<style scoped lang="scss">


.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.slot-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
}



</style>

