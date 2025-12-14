<template>
  <BListGroupItem :class="customClassGroupItem">
    <BAvatar :id="idAvatar" :variant="variantAvatar" :src="srcAvatar" :size="sizeAvatar"  :class="customClassAvatar" :bg-variant="bgVariant" :rounded="roundedAvatar"
             :rounded-top="roundedTopAvatar" :rounded-bottom="roundedBottomAvatar" :rounded-start="roundedStartAvatar" :rounded-end="roundedEndAvatar" :badge-variant=" badgeVariantAvatar"
             :text-variant="textVariantAvatar" :badge="badgeAvatar"></BAvatar>
    <span :class="customClassTitleAvatar">{{titleAvatar}}</span>
  </BListGroupItem>

</template>

<script setup lang="ts">
import {BAvatar, BListGroupItem} from "bootstrap-vue-next";
import { customAvatarProps } from "@/props/bootstrap/customAvatar";

const props = defineProps({
  ...customAvatarProps
})

</script>


<style scoped lang="scss">

</style>