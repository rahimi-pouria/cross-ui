<template>
  <BAccordion v-bind="wrapperAttrs">
    <BAccordionItem :id="props.id" :title="props.title" :visible="props.visible || props.modelValue || props.show" :class="props.customClass"
        :button-class="props.buttonClass" :body-class="props.bodyClass" :body-style="props.bodyStyle" :collapse-class="props.collapseClass"
        :header-class="props.headerClass" :header-tag="props.headerTag" :button-attrs="props.buttonAttrs"
        :body-attrs="props.bodyAttrs" :header-attrs="props.headerAttrs" :horizontal="props.horizontal"
        :is-nav="props.isNav" :lazy="props.lazy" :unmount-lazy="props.unmountLazy" :tag="props.tag">
      <slot name="body" v-if="$slots.body"></slot>
      <template v-else>
        {{ description }}
      </template>
    </BAccordionItem>
  </BAccordion>
</template>


<script setup lang="ts">
import { customAccordion } from "@/props/bootstrap/customAccordion";
import { BAccordion, BAccordionItem } from 'bootstrap-vue-next'

const props = defineProps(customAccordion)

</script>
<style scoped>
.accordion{
  width: 100% !important;
}
</style>
