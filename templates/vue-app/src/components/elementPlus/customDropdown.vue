<template>
  <el-dropdown :placement="props.placement" :class="customClassWrapperDropdown">
    <custom-button :title-btn="titleBtn" :custom-class-btn="customClassBtn" />
    <template #dropdown>
      <el-dropdown-menu :class="customClassMenu">
        <el-dropdown-item :class="customClassItem" v-for="item in dropdownItem" :key="item.id">
          <custom-button v-if="item.link" :custom-class-btn="customClassLinkDropdown" :href-btn="item.link" :title-btn="item.title" />
          <template v-else>
            {{ item.title }}
          </template>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { customDropdownProps } from "@/props/customDropdown.ts";
import CustomButton from "@/components/customButton.vue";
import { customButtonProps } from "@/props/customButton.ts";

const props = defineProps({
  ...customDropdownProps,
  ...customButtonProps
})

</script>
