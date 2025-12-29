<template>
  <el-transfer
      v-model="value"
      filterable
      :filter-method="filterMethod"
      filter-placeholder="State Abbreviations"
      :data="data"
  />
</template>

<script setup lang="ts">
  import { filterableGalleryProps } from "@/props/elementPlus/FilterableGallery";
  import { ref } from 'vue'
  const props = defineProps({
    ...filterableGalleryProps
  })

  interface Option {
    key: number
    label: string
    initial: string
  }

  const generateData = () => {
    const data: Option[] = []
    const states = [
      'California',
      'Illinois',
      'Maryland',
      'Texas',
      'Florida',
      'Colorado',
      'Connecticut ',
    ]
    const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT']
    states.forEach((city, index) => {
      data.push({
        label: city,
        key: index,
        initial: initials[index],
      })
    })
    return data
  }

  const data = ref<Option[]>(generateData())
  const value = ref([])

  const filterMethod = (query, item) => {
    return item.initial.toLowerCase().includes(query.toLowerCase())
  }
</script>

<style scoped lang="scss">

</style>