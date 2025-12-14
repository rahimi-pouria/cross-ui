<template>
    <div :class="customClassWrapperFaq">
        <slot v-if="$slots.title" name="title"/>
        <div v-else :class="customClassTitle">
          <h3>{{ title }}</h3>
          <p>{{ description }}</p>
        </div>
      <div :class="customClassQuestion">
        <custom-accordion
            v-for="(item) in faqItem"
            :key="item.id"
            :id="id"
            :title="item.title"
            :description="item.description"
            :visible="true"
            :custom-class="customClass"
            :body-class="bodyClass"
            :body-style="{ border: '1px solid #ccc' }"
            header-tag="h3"
        />
      </div>
    </div>
</template>

<script setup lang="ts">
import { faqType } from '@/props/bootstrap/sctions/faqTypes'
import CustomAccordion from "@/components/bootstrap/customAccordion.vue";
import { customAccordionProps } from '@/props/bootstrap/customAccordion'

const props = defineProps({
  ...faqType,
  ...customAccordionProps
})


</script>

<style scoped lang="scss">

</style>