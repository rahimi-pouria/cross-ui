<template>
  <BButton :id="id" :type="typeBtn" :variant="variant" :href="href ? href : undefined" :to="to ? to : undefined" :disabled="disabled" :class="btnClass"
      :loading="loading" :loading-fill="loadingFill" :loading-text="loadingText" :pill="pill" :pressed="pressed" :size="size"
      :squared="squared" :tag="tag" @click="click">
    <slot name="icon" v-if="$slots.icon"/>
    <template v-else>
      {{ label }}
    </template>

  </BButton>
</template>

<script setup lang="ts">
import { customButton } from "@/props/customButton.ts";
import { BButton } from 'bootstrap-vue-next'

const props = defineProps(customButton)

const emit = defineEmits(['click', 'update:modelValue'])

const click = async (params: any) => {
  emit('click', params)
  emit('update:modelValue', !props.modelValue)
}
</script>
