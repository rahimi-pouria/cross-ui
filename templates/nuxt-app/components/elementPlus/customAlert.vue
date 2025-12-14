<template>
  <el-alert   :type="props.type" :title="props.title" :effect="props.effect" :hide-after="props.hideAfter"
              :closable="props.closable" :show-icon="props.showIcon">
    <slot name="customBody" v-if="$slots.customBody"></slot>
    <template v-else>
      {{ description }}
    </template>
  </el-alert>
</template>

<script setup lang="ts">
import { customAlertProps } from "@/props/customAlert.ts";

const props = defineProps(customAlertProps)
</script>
