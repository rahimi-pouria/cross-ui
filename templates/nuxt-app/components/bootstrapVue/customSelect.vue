<template>
  <BFormSelect :id="id" v-model="internalValue" :class="customClass" :aria-invalid="ariaInvalid" :autofocus="autofocus" :disabled="disabled"
      :disabled-field="disabledField" :form="form" :label-field="labelField" :multiple="multiple" :name="name" :options-field="optionsField"
      :plain="plain" :required="required" :select-size="selectSize" :size="size" :state="state" :text-field="textField" :value-field="valueField">
    <template v-if="firstTitle" #first>
      <BFormSelectOption  :value="null">{{ t(firstTitle) }}</BFormSelectOption>
    </template>
    <BFormSelectOption
        v-for="(item, i) in options"
        :key="i"
        :value="item.value"
        :disabled="item.notEnabled"
    >
      {{ t( item.name ) }}
    </BFormSelectOption>
  </BFormSelect>
</template>

<script setup lang="ts">
import { customSelect } from "@/props/customSelect.ts";
import { BFormSelect, BFormSelectOption } from 'bootstrap-vue-next'
import {ref, watch} from "vue";
import {useI18n} from "vue-i18n";

const { t } = useI18n()
const props = defineProps(customSelect)
const emit = defineEmits(['update:modelValue'])
const internalValue = ref(props.modelValue)

watch(() => props.modelValue, (val) => {internalValue.value = val})

watch(() => internalValue, (val) => {emit('update:modelValue', val)})

</script>
