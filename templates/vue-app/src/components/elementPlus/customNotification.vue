<template>
  <custom-button :id="idNotification" :custom-class-btn="['!ml-0', customButtonProps]" plain-btn @click="showNotification"
                 title-btn="Primary pouria"/>
</template>

<script setup lang="ts">
  import { customNotificationProps } from "@/props/elementPlus/customNotification";
  import CustomButton from "@/components/elementPlus/customButton.vue";
  import { customButtonProps } from '@/props/elementPlus/customButton'
  import { ElNotification } from 'element-plus'

  const props = defineProps({
    ...customNotificationProps,
    ...customButtonProps
  })

  const showNotification = () => {
    ElNotification({
      title: props.title,
      message: props.message,
      type: props.typeMessage,
    })
  }
</script>

<style scoped lang="scss">

</style>