<template>
  <el-table :data="dataTable" :class="customClassTable" :stripe="stripe" :default-sort="defaultSort" :border="parentBorder" :preserve-expanded-content="preserveExpanded"  style="width: 100%">
    <el-table-column :class="customClassColumnTable" v-if="selection" type="selection" width="55" />
    <el-table-column v-if="subColumns" type="expand">
      <template #default="props">
        <div m="4" :class="customClassExpandTable">
          <el-table :data="props.row.family || []">
            <el-table-column v-for="col in expandColumns" :class="customClassColumnTable" :key="col.prop" :prop="col.prop" :label="col.label"/>
          </el-table>
        </div>
      </template>
    </el-table-column>
    <el-table-column :class="customClassColumnTable" v-for="(label, prop) in columns" :key="prop" :prop="prop"
                     :sortable="sortTable.includes(prop)"  :label="label" width="180" />
    <el-table-column :class="customClassColumnTable" :fixed="fixed" :label="labelOperation" min-width="120">
      <template v-if="showSearch" #header>
        <custom-input :custom-class-input="customClassInput" :size="size" :placeholder="placeholder" />
      </template>
      <template #default>
          <slot name="operation"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { customTableProps } from "@/props/customTable.ts";
import {computed} from "vue";
import CustomInput from "@/components/elementPlus/customInput.vue";
import { customInputProps } from "@/props/customInput.ts";

const props = defineProps({
  ...customTableProps,
  ...customInputProps
})

const columns = computed(() => {
  if (!props.dataTable || !props.dataTable.length) return {} as Record<string, string>
  // @ts-ignore
  return Object.keys(props?.dataTable[0]).filter(key => key !== "family").reduce((acc, key) => {
        acc[key] = key.charAt(0).toUpperCase() + key.slice(1)
    return acc}, {} as Record<string, string>)
})

const sortTable = computed(() => {
  return props.defaultSort?.map(item => item.prop) || []
})

const expandColumns = computed(() => {
  if (!props.dataTable.length) return []
// @ts-ignore
  const firstFamily = props?.dataTable[0].family?.[0] || {}
  return Object.keys(firstFamily).map(key => ({
    prop: key,
    label: key.charAt(0).toUpperCase() + key.slice(1)
  }))
})
</script>