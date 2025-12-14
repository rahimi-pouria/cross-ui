<template>
  <div class="wrapper-input" :class="customClassWrapperInput">
    <label v-if="label" class="custom-label" :class="labelClass">{{ label }}</label>

    <el-input
        v-model="customModel"
        :type="showPassword ? 'text' : inputType"
        :clearable="clearable"
        :clear-icon="CloseBold"
        :placeholder="placeholder"
        :required="required"
        :show-password="false">
      <template #suffix>
    <span @click="togglePassword" class="cursor-pointer flex items-center">
      <el-icon v-if="showPassword"><View /></el-icon>
      <el-icon v-else><Hide /></el-icon>
    </span>
      </template>
    </el-input>

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
import { CloseBold, View, Hide } from '@element-plus/icons-vue'
import { customInputProps } from "@/props/customInput.ts";
import { useVModelSync } from "@/composables/useVModelSync.ts";
import {computed, ref} from "vue";
import useVuelidate from "@vuelidate/core";
import { helpers, required as fieldRequired } from "@vuelidate/validators";
import { useI18n } from "vue-i18n";
const showPassword = ref(false)

const { t } = useI18n()

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const props = defineProps({
  ...customInputProps
})

const emit = defineEmits(['update:modelValue'])
const customModel = useVModelSync<string | number | Array<string | number>>(props, emit)

const rules = computed(() => ({
  model: {
    required: props.required && !props.disabled ? helpers.withMessage('ValueMandatory', fieldRequired) : false
  }
}))

const v$ = useVuelidate(rules, { model: customModel })


</script>

<style scoped>
.wrapper-input {
  display: flex;
  gap: 10px;
  flex-direction: column;
}
</style>
