<template>
  <el-tabs :type="props.type" class="demo-tabs">
    <el-tab-pane v-for="(item) in tabs" :key="item.id">
      <template #label>
        <span class="custom-tabs-label">
          <component v-if="item.icon" :is="item.icon" class="tab-icon"/>
          <span :class="customClassTitleTabs">{{ item.title }}</span>
        </span>
      </template>
      <slot name="customDataTabs">
        <div :class="customClassDescriptionTabs">
          {{ item.description }}
        </div>
      </slot>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import {customTabsProps} from "@/props/customTabs.ts";

const props = defineProps({
  ...customTabsProps
})

</script>

<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
.custom-tabs-label {
  svg{
    width: 20px;
    height: auto;
  }
}
</style>