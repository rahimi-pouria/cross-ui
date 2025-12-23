<template>
  <div :class="customClassWrapperCalender" class="w-100">
    <h1 :class="customClassTitle">{{ title }}</h1>
    <FullCalendar :options='calendarOptions' />
  </div>
</template>


<script setup lang="ts">
import FullCalendar from "@fullcalendar/vue3";

import { customCalendarProps } from '@/props/bootstrap/customCalendar'

const props = defineProps({
  ...customCalendarProps
})

</script>

<style lang="scss" scoped>
</style>
