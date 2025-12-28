<template>
    <div class="wrapper-select">
      <label v-if="label" :class="labelClass">{{ label }}</label>
      <el-select v-model="selectedValue " :placeholder="placeholder" class="select-box" :class="customClassSelect"
                 :clearable="clearable"
                 :multiple="multiple" :collapse-tags="collapseTags">
        <template #label="{ label}">
          <span :class="customClassLabelSelect">{{ label }}: </span>
        </template>
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <div v-for="error in v$.model?.$errors || []" :key="error.$uid" class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
        {{
          (error.$validator === 'required' || error.$validator === 'requiredIf')
              ? t(`${error.$message}`, { value: label || t(customValidationTitle) })
              : error.$message
        }}
      </div>
    </div>
</template>

<script lang="ts" setup>
import { customSelectProps } from "@/props/elementPlus/customSelect.ts";
import {useVModelSync} from "@/composables/useVModelSync.ts";
import { useI18n } from "vue-i18n";
import {computed} from "vue";
import {helpers, required as fieldRequired} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";


const props = defineProps({
  ...customSelectProps
})
const { t } = useI18n()
const emit = defineEmits(['update:modelValue'])

const selectedValue = useVModelSync<string | number | Array<string | number>>(props, emit)

const rules = computed(() => ({
  model: {
    required: props.required && !props.disabled ? helpers.withMessage('ValueMandatory', fieldRequired) : false
  }
}))



const v$ = useVuelidate(rules, { model: selectedValue })

</script>

<style scoped lang="scss">
  .select-box{
    width: 100%;
  }
  .wrapper-select{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
</style>