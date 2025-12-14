<template>
  <BAccordion v-bind="wrapperAttrs">
    <BAccordionItem :id="id" :title="props.title" :visible="visible || modelValue || show" :class="customClass" :button-class="buttonClass"
                    :body-class="bodyClass" :body-style="bodyStyle" :collapse-class="collapseClass" :header-class="headerClass" :header-tag="headerTag"
                    :button-attrs="buttonAttrs" :body-attrs="bodyAttrs" :header-attrs="headerAttrs" :horizontal="horizontal" :is-nav="isNav" :lazy="lazy" :unmount-lazy="unmountLazy" :tag="tag">

      <slot name="body" v-if="$slots.body"></slot>
      <template v-else>
        {{ description }}
      </template>
    </BAccordionItem>
  </BAccordion>
</template>


<script setup lang="ts">
import { customAccordion } from "@/props/customAccordion";
import { BAccordion, BAccordionItem } from 'bootstrap-vue-next'

const props = defineProps(customAccordion)

</script>
<style scoped>
.accordion{
  width: 100% !important;
}
</style>
