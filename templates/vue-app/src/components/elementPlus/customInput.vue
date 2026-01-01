<template>
  <div class="wrapper-input" :class="customClassWrapperInput">
    <label v-if="label" class="custom-label" :class="labelClass">{{ label }}</label>
    <el-input v-model="model" :type="showPassword ? 'text' : inputType" :clearable="clearable" :clear-icon="CloseBold" :placeholder="placeholder"
        :required="required" :state="v$.model.$dirty ? !v$.model.$invalid : null" :minlength="minLength" :maxlength="maxlength" :betweenValue="betweenValue"
        :show-password="false">
      <template v-if="inputType === 'password'" #suffix>
        <span @click="togglePassword" class="cursor-pointer flex items-center">
          <el-icon v-if="showPassword"><View /></el-icon>
          <el-icon v-else><Hide /></el-icon>
        </span>
      </template>
    </el-input>

    <div v-for="error in v$.model?.$errors || []" :key="error.$uid" class="fv-plugins-message-container text-red fv-plugins-message-container--enabled invalid-feedback">
      {{
        (error.$validator === 'required' || error.$validator === 'requiredIf') ?
            t(`${error.$message}`, {value: title || t(customValidationTitle)}) :
            error.$validator === 'numeric' ? t(`${error.$message}`) :
                error.$validator === 'email' ? t(`${error.$message}`) :
                    error.$validator === 'integer' ? t(`${error.$message}`) :
                        error.$validator === 'minLength' ? t(`${error.$message}`, {value: props.minLength}) :
                            error.$validator === 'betweenValue' ? t(`${error.$message}`, {
                                  min: props.betweenValue[0],
                                  max: props.betweenValue[1]
                                }) :
                                error.$validator === 'valid' ? t(`${error.$message}`, {value: t(`${title}`) || t(`${customValidationTitle}`)}) :
                                    error.$validator === 'checkFractalDigitCount' ? t(`${error.$message}`, {count: maximumFractalDigits}) :
                                        error.$message
      }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { customInputProps } from "@/props/elementPlus/customInput";
import {computed, reactive, ref, watch} from "vue";

import useVuelidate from "@vuelidate/core";
import {decimal, email, helpers, integer, minLength, numeric, required as fieldRequired, requiredIf as fieldRequiredIf} from "@vuelidate/validators";
import { useI18n } from "vue-i18n";
import {Hide, View} from "@element-plus/icons-vue";
const showPassword = ref(false)
const model: any = defineModel()

const { t } = useI18n()

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const props = defineProps({
  ...customInputProps
})

const emit = defineEmits(['update:modelValue'])
const customModel = reactive({
  model
})

const rules = computed(() => ({
  model: {
    required: props.required && !props.disabled ? helpers.withMessage(`${props.label} Mandatory`, fieldRequired) : '',
    requiredIf: props.requiredIf && !props.disabled ? helpers.withMessage('ValueMandatory', fieldRequiredIf(props.requiredIf)) : '',
    numeric: props.numeric ? helpers.withMessage('OnlyNumericDataIsAllowed', numeric) : '',
    integer: props.integer ? helpers.withMessage('OnlyNonDecimalNumericDataIsAllowed', integer) : '',
    decimal: props.decimal ? helpers.withMessage(t('DecimalOnNumber'), decimal) : '',
    email: props.inputType === 'email' ? helpers.withMessage('InvalidEmail', email) : '',
    valid: props.regex ? helpers.withMessage('ValueRegexNotValid', helpers.regex(new RegExp(props.regex))) : '',
    checkFractalDigitCount: props.maximumFractalDigits ? helpers.withMessage('MaxDigitsDecimal', checkNumbersAfterFloatingPoint) : ''
  }
}))



const v$ = useVuelidate(rules, { model: model })

watch(() => props.modelValue, (val) => {
  customModel.value = val;
})

watch(customModel, (val) => {
  emit("update:modelValueRadioButton", val);
})

</script>

<style scoped>
.wrapper-input {
  display: flex;
  gap: 10px;
  flex-direction: column;
}
.input-icon-eye{
  position: relative;
}

.icon-pass{
  position: absolute;
  right: 0;
  top: 23px;
}

html[dir="rtl"] .icon-pass {
  left: 0;
  top: 0;
}

html[dir="ltr"] .icon-pass {
  right: 0;
  top: 0;
}

html[dir="rtl"] .input-email-type {
  text-align: end;
}

.styleShowTitle {
  display: flex;
  flex-direction: column;
  justify-content: start;
}
.text-red{
  color: red;
}
</style>
