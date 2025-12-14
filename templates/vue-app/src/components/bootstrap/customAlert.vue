<template>
  <BAlert :model-value="props.modelValue" :class="alertClass" :bg-variant="bgVariant" :body="body" :body-class="bodyClass"
      :close-class="closeClass" :close-content="closeContent" :close-label="closeLabel" :close-variant="closeVariant" :dismissible="dismissible"
      :header-class="headerClass" :header-tag="headerTag" :id="id" :initial-animation="initialAnimation" :interval="interval" :is-status="isStatus" :lazy="lazy"
      :no-animation="noAnimation" :no-fade="noFade" :no-hover-pause="noHoverPause" :no-resume-on-hover-leave="noResumeOnHoverLeave" :progress-props="progressProps" :show="show"
      :show-on-pause="showOnPause" :text-variant="textVariant" :title="title" :trans-props="transProps" :unmount-lazy="unmountLazy" :variant="variant" :visible="visible">
    <slot name="customContent" />
  </BAlert>
</template>

<script setup lang="ts">
import { customAlert } from "@/props/customAlert.ts";
import { BAlert } from 'bootstrap-vue-next'

const props = defineProps(customAlert)
</script>

<style scoped lang="scss">
</style>
