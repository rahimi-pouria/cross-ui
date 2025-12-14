<template>
    <div :class="customClass" class="input-icon-eye">
      <label for="input-small" v-if="title" :class='labelClass' >
        <span :class="(required || requiredIf) && 'required'">{{ t(title) }} :</span>
      </label>
      <BFormInput :title="titleToolTip" hide-details="auto" v-model="model" :id="id" :state="v$.model.$dirty ? !v$.model.$invalid : null" :disabled="disabled"
          :listSeach="listSearch" :searchable="searchable" :minlength="minLength" :maxlength="maxlength" :betweenValue="betweenValue"
          :placeholder="placeholder" :autocomplete="autocomplete" :class="[inputType === 'email' ? 'input-email-type form-control' : 'form-control',
          inputClass]" :required="required"
          :type="showPassword ? 'text' : inputType" @input="$emit('update:modelValue', $event.target.value)" @keyup="$emit('keyup', $event)"/>
      <template v-if="inputType === 'password' && canShowPassword">
        <span class="p-2 border-0 icon-pass">
          <custom-button type-button="button" @click="changeType" variant="link-info"
                         btn-class="btn btn-icon w-30px h-30px ms-auto" style="margin-right: 10px;">
           <template #icon>
               <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
           </template>
          </custom-button>

        </span>
      </template>
      <div v-for="error of v$.model.$errors" :key="error.$uid" class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
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

<script setup lang="ts">
import {useVuelidate} from "@vuelidate/core";
import {computed, reactive, ref, watch} from "vue";
import {email, helpers, minLength, numeric, integer, decimal, required as fieldRequired, requiredIf as fieldRequiredIf} from "@vuelidate/validators";

import {useI18n} from "vue-i18n";
import { BFormInput } from 'bootstrap-vue-next'
import { customInputProps } from "@/props/bootstrap/customInput";
import CustomButton from "@/components/bootstrap/customButton.vue";

const {t} = useI18n()
const setType = ref('')
const showPassword = ref(false)
const model: any = defineModel()

const props = defineProps(customInputProps);
defineEmits(['update:modelValue', 'keyup'])

if (props.betweenValue) {
  watch(() => model, (val) => {
    if (!val) {
      model.value = null;
    }
  })
}



const rules = computed(() => ({
  model: {
    required: props.required && !props.disabled ? helpers.withMessage(`${props.title} Mandatory`, fieldRequired) : '',
    requiredIf: props.requiredIf && !props.disabled ? helpers.withMessage('ValueMandatory', fieldRequiredIf(props.requiredIf)) : '',
    numeric: props.numeric ? helpers.withMessage('OnlyNumericDataIsAllowed', numeric) : '',
    integer: props.integer ? helpers.withMessage('OnlyNonDecimalNumericDataIsAllowed', integer) : '',
    decimal: props.decimal ? helpers.withMessage(t('DecimalOnNumber'), decimal) : '',
    email: props.inputType === 'email' ? helpers.withMessage('InvalidEmail', email) : '',
    valid: props.regex ? helpers.withMessage('ValueRegexNotValid', helpers.regex(new RegExp(props.regex))) : '',
    checkFractalDigitCount: props.maximumFractalDigits ? helpers.withMessage('MaxDigitsDecimal', checkNumbersAfterFloatingPoint) : ''
  }
}))

const checkNumbersAfterFloatingPoint = (): any => {
  if (!model.value || !props.maximumFractalDigits)
    return true
  const parts = model.value.toString().split('.');
  return parts.length === 1 || parts[1].length <= props.maximumFractalDigits;
}

const inputModel = reactive({
  model
})

const v$ = useVuelidate(rules, {model})

const changeType = () => {
  showPassword.value = !showPassword.value
  if (showPassword.value) {
    setType.value = 'password'
  } else {
    setType.value = 'text'
  }
}

</script>

<style scoped lang="scss">
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
</style>