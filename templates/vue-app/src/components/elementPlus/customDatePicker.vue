<template>
  <el-date-picker v-model="selectDate" :type="typeDatePicker" :start-placeholder="startDate"
      :end-placeholder="EndDate"
      :value-format="valueFormat"
      :default-time="defaultTime"
      :placeholder="placeholderDatePicker"
  />
</template>

<script lang="ts" setup>
import { customDatePickerProps } from "@/props/elementPlus/customDatePicker";
import { ref, watch } from 'vue'

const props = defineProps({
  ...customDatePickerProps
})

const emit = defineEmits(['update:modelValueDatePicker'])

const selectDate = ref(props.modelValueDatePicker)

watch(() => props.modelValueDatePicker, (val) => {
  selectDate.value = val
})

watch(selectDate, (val) => {
  emit('update:modelValueDatePicker', val)
})
</script>

<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 1.5rem 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 1rem;
  width: 100%;
}

@media screen and (max-width: 1200px) {
  .demo-date-picker .block {
    flex: 0 0 50%;
    border-bottom: solid 1px var(--el-border-color);
  }

  .demo-date-picker .block:nth-child(2n) {
    border-right: none;
  }

  .demo-date-picker .block:nth-last-child(-n + 2):nth-child(2n + 1),
  .demo-date-picker .block:last-child {
    border-bottom: none;
  }
}

@media screen and (max-width: 768px) {
  .demo-date-picker .block {
    flex: 0 0 100%;
    padding: 1rem 0;
    min-width: auto;
    border-right: none;
    border-bottom: solid 1px var(--el-border-color);
  }

  .demo-date-picker .block:last-child {
    border-bottom: none;
  }
}
</style>