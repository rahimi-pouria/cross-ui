<template>
  <el-breadcrumb :class="customClassBreadCrumb" :separator="separatorBreadCrumb">
    <el-breadcrumb-item v-for="(item, i) in breadCrumbItem" :key="i">
      <router-link :to="item.link">
        {{ item.title }}
      </router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { customBreadcrumbProps } from "@/props/elementPlus/customBreadcrumb";

const props = defineProps({
  ...customBreadcrumbProps,
})

</script>

<style scoped lang="scss">

</style>