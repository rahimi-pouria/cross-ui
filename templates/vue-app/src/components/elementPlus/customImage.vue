<template>
  <div :id="id" v-if="previewSrcList && previewSrcList.length > 0">
    <CustomButton @click="showPreview = true" :title-btn="titleBtn">
      <template #customBody>
        <el-image :class="customClassImage"  :id="id" :src="srcImg" :lazy="lazyLoad" :alt="altImage" :fit="fitImage" :zoom-rate="zoomRate" :max-scale="maxScale"
                  :min-scale="minScale" :show-progress="showProgress" :initial-index="initialIndex" />
      </template>
    </CustomButton>
    <el-image-viewer :class="customClassImage" v-if="showPreview" :url-list="previewSrcList" :show-progress="showProgress" :initial-index="initialIndex" @close="showPreview = false"/>
  </div>
  <el-image :class="customClassImage" v-else :id="id" :src="srcImg" :lazy="lazyLoad" :alt="altImage" :fit="fitImage" :zoom-rate="zoomRate" :max-scale="maxScale"
      :min-scale="minScale" :show-progress="showProgress" :initial-index="initialIndex" />
</template>

<script setup lang="ts">
import { customImageProps } from "@/props/elementPlus/customImage";
import CustomButton from "@/components/elementPlus/customButton.vue";
import { customButtonProps } from "@/props/elementPlus/customButton";
import { ref } from "vue";

const props = defineProps({
  ...customImageProps,
  ...customButtonProps
});

const showPreview = ref(false);

</script>
