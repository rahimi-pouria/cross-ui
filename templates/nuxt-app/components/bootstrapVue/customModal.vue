<template>
  <CustomButton label="showModal" @click="modal = !modal"/>
  <BModal ref="modalRef" v-model="modal" :title="title" :title-class="titleClass" :size="size" :ok-title="okTitle" :ok-class="okClass"
      :cancel-title="cancelTitle" :centered="centered" :scrollable="scrollable" :backdrop="backdrop" :keyboard="keyboard"
      @show="onShow" @hide="onHide" @ok="$emit('ok')" @cancel="$emit('cancel')" :header-class="headerClass"
      :header-close-class="headerCloseClass" :button-size="buttonSize" :body-scrolling="bodyScrolling" :body-class="bodyClass"
      :cancel-class="cancelClass" :content-class="contentClass" :footer-class="footerClass" :no-header="noHeader" :no-header-close="noHeaderClose" :no-footer="noFooter">
    <slot v-if="$slots.customDescription" name="customDescription" />
    <template v-else>
      {{ description }}
    </template>
  </BModal>
</template>

<script setup>
import CustomButton from "@/components/customButton.vue";
import { customModal } from "@/props/customModal.ts";
import { customButton } from "@/props/customButton.ts";
import { ref, watch } from 'vue'
import { BModal } from 'bootstrap-vue-next'
import {useI18n} from "vue-i18n";
const { t } = useI18n()

const props = defineProps({
  ...customModal,
  ...customButton
})

const emit = defineEmits(['update:modelValue', 'ok', 'cancel'])

const modalRef = ref(null)
const localShow = ref(props.modelValue)
const modal = ref(false)
watch(() => props.modelValue, (val) => {
      localShow.value = val
      if (val) modalRef.value?.show()
      else modalRef.value?.hide()
    }
)

const show = () => {
  modalRef.value?.show()
}
const  hide = () => {
  modalRef.value?.hide()
}

const onShow  = () => {
  emit('update:modelValue', true)
}
const onHide = () => {
  emit('update:modelValue', false)
}

defineExpose({ show, hide })
</script>
