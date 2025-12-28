<template>
  <el-collapse :class="customClassWrapperAccordion" v-model="activeName" accordion>
    <el-collapse-item  :class="[customClassAccordion, `${customClassAccordion}-${item.id}`]"
                       v-for="(item) in items"
                       :key="item.id" :title="item.title" :name="item.id">
      <div :class="customClassDescriptionAccordion">
        <slot :name="`description-${item.id}`">
          {{ item.description }}
        </slot>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script lang="ts" setup>
import { customAccordionProps } from "@/props/elementPlus/customAccordion.ts";

const props = defineProps({
  ...customAccordionProps
})


import { ref } from 'vue'

const activeName = ref(props.customActiveTab)
</script>