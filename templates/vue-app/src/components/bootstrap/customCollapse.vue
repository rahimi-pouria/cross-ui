<template>
    <custom-button :btn-class="visible ? null : 'collapsed'" :label="labelBtn" :aria-controls="idCollapse"
                   :aria-expanded="visible ? 'true' : 'false'" @click="visible = !visible"/>
  <BCollapse :id="idCollapse" v-model="visible" :class="customClassCollapse"
  >
  <div class="flex border border-gray-200 rounded-lg p-4">
   <template v-if="titleCollapse">
     {{ titleCollapse }}
   </template>
    <template v-else>
      <slot name="content"/>
    </template>
  </div>
  </BCollapse>
</template>

<script setup lang="ts">
import { customCollapseProps } from "@/props/bootstrap/customCollapse";
import CustomButton from "@/components/bootstrap/customButton.vue";
import { customButtonProps } from "@/props/bootstrap/customButton";
import { BCollapse } from "bootstrap-vue-next";
import {ref} from 'vue'

const props = defineProps({
  ...customCollapseProps,
  ...customButtonProps,
})

const visible = ref(true)

</script>

<style scoped lang="scss">

</style>