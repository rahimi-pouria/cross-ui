<template>
  <BFormFile v-model="file" :label="titleFile"/>
  <div class="mt-3">
    Files: <strong>{{ file?.name || 'No file selected' }}</strong>
  </div>
</template>

<script setup lang="ts">
import {BFormFile} from "bootstrap-vue-next";
import { customChooseFileProps } from "@/props/bootstrap/customChooseFile";

import {ref, watch} from 'vue'

const file = ref<null | File>(null)

const props = defineProps({
  ...customChooseFileProps
})

const emit = defineEmits(['update:modelValue'])

watch(file, (newValue) => {
  emit("update:modelValue", newValue)
})

</script>

<style scoped></style>