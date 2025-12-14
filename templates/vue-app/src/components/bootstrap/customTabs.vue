<template>
  <BTabs v-model="activeTab" :content-class="props.contentClass" card>
    <BTab  v-for="(tab, i) in tabList" :key="i" v-bind="tab" :title-item-class="'custom-tab-header'" :title-link-class="'custom-tab-header-link'">
      <p v-if="tab.description" :class="tabDescriptionClass">
        {{ t(tab.description) }}
      </p>
      <slot  :name="'tab-' + i"/>
      </BTab>
  </BTabs>
</template>

<script setup lang="ts">
import { customTabsProps } from "@/props/bootstrap/customTabs";
import { BTabs, BTab } from 'bootstrap-vue-next'
import {ref} from "vue";
import {useI18n} from "vue-i18n";
const { t } = useI18n()

const props = defineProps(customTabsProps)

const activeTab = ref()

</script>
