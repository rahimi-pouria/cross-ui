<template>
  <custom-button @click="isVisible = true" :title-btn="props.titleBtnShowModal"/>
  <el-dialog v-model="isVisible" :title="titleModal" :width="customWithModal" @open="openModal" @opened="onOpenedModal" @close="onCloseModal" @closed="onClosedModal">
    <div :class="customClassDescriptionModal">
      <slot name="customBodyModal">
        {{ description }}
      </slot>
    </div>
    <template #footer>
      <div class="dialog-footer" :class="customClassFooterModal">
        <custom-button @click="isVisible = false" :type="typeBtnCancel" :title-btn="titleBtnCancel"/>
        <custom-button :type="typeBtnConfirm" @click="clickConfirmBtn" :title-btn="titleBtnConfirm" />
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { customModalProps } from "@/props/elementPlus/customModal.ts"
import CustomButton from "@/components/customButton.vue"
import { customButtonProps } from "@/props/elementPlus/customButton.ts";
import {ref, watch} from "vue";

const props = defineProps({
  ...customModalProps,
  ...customButtonProps
})

const emit = defineEmits(['click', 'updateModelValue'])

const isVisible = ref(props.modelValue)

watch(() => props.modelValue, (val) => {
  isVisible.value = val
})

const clickConfirmBtn = (params: any) => {
  emit('click', params)
  emit('updateModelValue', !props.modelValue)
}

</script>

<style scoped lang="scss">
.dialog-footer{
  display: flex;
  gap: 10px;
}
</style>
