<template>
  <BButton :id="id" :type="typeBtn" :variant="variant" :href="href ? href : undefined" :to="to ? to : undefined" :disabled="disabled" :class="btnClass"
      :loading="loading" :loading-fill="loadingFill" :loading-text="loadingText" :pill="pill" :pressed="pressed" :size="size"
      :squared="squared" :tag="tag" @click="click">
    <slot name="icon"/>
    {{ label }}
  </BButton>
</template>

<script setup lang="ts">
import {customButtonProps} from "@/props/bootstrap/customButton";
import { BButton } from 'bootstrap-vue-next'

const props = defineProps(customButtonProps)

const emit = defineEmits(['click', 'update:modelValue'])

const click = async (params: any) => {
  emit('click', params)
  emit('update:modelValue', !props.modelValue)
}
</script>
