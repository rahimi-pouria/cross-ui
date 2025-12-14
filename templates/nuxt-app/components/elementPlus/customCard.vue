<template>
  <el-card :class="customClassCard"  class="card-element-plus">
    <img :src="props.srcImg" :alt="altImg" :class="customClassImageCard" class="img-card"/>
    <template v-if="headerContent" #header>
      <div class="card-header" :class="customClassHeader">
        <span :class="customClassTextHeader">{{ headerContent }}</span>
      </div>
    </template>
    <slot name="customBody">
      <p :class="customClassDescription">
        {{ description }}
      </p>
    </slot>
    <div :class="customClassBodyCard">
      <custom-button :type="type" :native-type="nativeType"
                     :class="customClassBtn"
                     @click="click"
                     :href-btn="hrefBtn" :title-btn="titleBtn" />
    </div>
    <template v-if="footerContent" #footer>
      <div class="card-footer" :class="customClassFooter">
        <span :class="customClassTextFooter">Footer content</span>
      </div>
    </template>
  </el-card>
</template>

<script setup lang="ts">

import CustomButton from "@/components/customButton.vue";
import { customCardProps } from "@/props/customCard.ts";
import { customButtonProps } from "@/props/customButton.ts";

const props = defineProps({
  ...customCardProps,
  ...customButtonProps
})

const emit = defineEmits(['click', 'updateModelValue'])

const click = (params: any) => {
  emit('click', params)
  emit('updateModelValue', !props.modelValue)
}
</script>

<style scoped>
.el-card {
  --el-card-padding: 8px !important;
}

.card-element-plus{
  max-width: 400px
}

.img-card{
  height: 250px;
  border-radius: 5px
}
</style>