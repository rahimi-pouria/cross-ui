<template>
  <router-link v-if="hrefBtn" :to="hrefBtn" :class="customClassBtn">
    {{ titleBtn }}
  </router-link>

  <el-button v-else :type="type" :native-type="nativeType" :class="customClassBtn" :size="size" @click="click">
    <slot name="customBody">
      {{ titleBtn }}
    </slot>
  </el-button>
</template>

<script setup lang="ts">
import { customButtonProps } from "@/props/bootstrap/customButton";

const props = defineProps({ ...customButtonProps })
const emit = defineEmits(['click', 'updateModelValue'])

const click = (params: any) => {
  emit('click', params)
  emit('updateModelValue', !props.modelValue)
}
</script>
