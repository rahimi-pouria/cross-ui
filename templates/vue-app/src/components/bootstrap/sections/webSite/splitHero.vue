<template>
  <div :class="customClassWrapperSplitSection">
    <div :class="customClassTextSplitSection">
      <template v-if="title">
        <h2 :class="customClassTitleSplitSection">{{ title }}</h2>
      </template>
      <slot v-else name="titleSlot" />
      <template v-if="description">
        <p :class="customClassDescriptionSplitSection">{{ description }}</p>
      </template>
      <slot v-else name="descriptionSlot" />
      <slot name="contentSplit" />
    </div>
    <div :class="customClassImageSplitSection">
      <template v-if="srcImage">
        <custom-image :id="id" :src-image="srcImage" :alt="alt" :width="width" :height="height"/>
      </template>
      <slot v-else name="photoSplitSection" />
    </div>
  </div>

</template>

<script setup lang="ts">
  import {splitHeroProps} from "@/props/bootstrap/sctions/splitHero";
  import CustomImage from "@/components/bootstrap/customImage.vue";
  import { customImageProps } from "@/props/bootstrap/customImage";

  const props = defineProps({
    ...splitHeroProps,
    ...customImageProps
  })

</script>

<style scoped lang="scss">

</style>