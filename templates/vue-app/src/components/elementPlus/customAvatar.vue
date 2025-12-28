<template>
  <el-avatar :size="size" :src="srcAvatar">
    <custom-image :src-img="srcImg" :alt-image="altImage" :preview-src-list="previewSrcList" />
  </el-avatar>
</template>

<script setup lang="ts">
  import { customAvatarProps } from "@/props/elementPlus/customAvatar";
  import CustomImage from "@/components/elementPlus/customImage.vue";
  import { customImageProps } from "@/props/elementPlus/customImage";

  const props = defineProps({
    ...customAvatarProps,
    ...customImageProps
  })

</script>

<style scoped lang="scss">

</style>