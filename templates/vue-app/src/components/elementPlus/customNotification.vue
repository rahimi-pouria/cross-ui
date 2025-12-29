<template>
  <el-button class="!ml-0" plain @click="open5">Primary</el-button>
</template>

<script setup lang="ts">
  import { customNotificationProps } from "@/props/elementPlus/customOffcanvas";
  import { ElNotification } from 'element-plus'

  const props = defineProps({
    ...customNotificationProps,
  })

  const open5 = () => {
    ElNotification({
      title: 'Primary',
      message: 'This is a primary message',
      type: 'primary',
    })
  }
</script>

<style scoped lang="scss">

</style>