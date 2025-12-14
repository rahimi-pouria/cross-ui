<template>
  <div class="w-100">
    <BTable striped hover :items="props.itemTableList" :fields="simpleFields" :key-field="props.key" :foot-clone="props.footClone"
        :footer-label="props.footerLabel" :sort-desc="props.sortDesc" :sort-direction="props.sortDirection" :select-mode="props.selectMode" :sticky-header="props.stickyHeader"
        :tbody-transition-props="props.tbodyTransitionProps" :thead-transition-props="props.theadTransitionProps" :per-page="perPageLocal" :current-page="currentPageLocal"/>
    <BPagination v-model="currentPageLocal" :total-rows="rows" :per-page="perPageLocal" aria-controls="my-table"/>
  </div>
</template>

<script setup lang="ts">
import { customTable } from "@/props/customTable.ts";
import { BTable, BPagination } from 'bootstrap-vue-next'
import { computed, ref, watch } from "vue";

const props = defineProps(customTable);

const simpleFields = computed(() =>
    props.fields?.map(f => ({ key: f.key, label: f.label }))
);

const currentPageLocal = ref(props.currentPage)
const perPageLocal = ref(props.perPage)
const rows = computed(() => Array.isArray(props.itemTableList) ? props.itemTableList.length : 0)

watch(() => props.currentPage, (newVal) => {
  currentPageLocal.value = newVal
})

watch(() => props.perPage, (newVal) => {
  perPageLocal.value = newVal
})

const emit = defineEmits(['update:currentPage', 'update:perPage'])

watch(() => currentPageLocal, (val) => {
  emit('update:currentPage', val)
})

watch(() => perPageLocal, (val) => {
  emit('update:perPage', val)
})
</script>
