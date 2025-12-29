<template>
  <el-calendar v-model="value" :range="rangeCalendar">
    <template v-if="showTime" #date-cell="{data}">
      <p :class="data.isSelected ? 'is-selected' : ''">
        {{ data.day.split('-').slice(1).join('-') }}
        {{ data.isSelected ? '✔️' : '' }}
      </p>
    </template>
  </el-calendar>
</template>

<script setup lang="ts">
import { customCalendarProps } from "@/props/elementPlus/customCalendar";
import { ref } from 'vue';

const props = defineProps({
  ...customCalendarProps,
})
const value = ref(new Date())
</script>

<style scoped lang="scss">

</style>