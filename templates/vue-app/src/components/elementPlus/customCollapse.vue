<template>
  <el-collapse v-model="activeNames" :class="customClassWrapperCollapse" :accordion="accordionCollapse">
    <el-collapse-item v-for="(item) in collapseItem" @change="handleChange(item.id)" :key="item.id" :title="collapseItem ? item.title : titleCollapse" :name="collapseItem ?  item.nameCollapse : nameCollapse">
      <slot v-if="$slots[`customBody${item.id}`]" :name="`customBody${item.id}`" />
      <div v-else :class="customClassDescriptionCollapse">
        {{ collapseItem ? item.description : descriptionCollapse }}
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script setup lang="ts">
import { customCollapseProps } from "@/props/elementPlus/customCollapse";
import { ref } from 'vue'

const props = defineProps({
  ...customCollapseProps
})

const activeNames = ref(props.modelValue)

const emit = defineEmits(['update:modelValue', "change"])
const handleChange = (val: any) => emit("change", val)

</script>

<style scoped lang="scss">

</style>