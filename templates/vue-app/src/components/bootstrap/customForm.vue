<template>
  <form :class="customClassWrapperForm">
    <CustomInput v-for="(item) in formOptions" :key="item.id" :id="item.id" v-model="formModel[item.id]"
                 :input-type="item.typeInput" :placeholder="item.placeholder"
                 :required="item.required" :title="item.name" :label-class="labelClass" :custom-class="customClass" />

    <slot v-if="$slots.customBtn" name="customBtn" />
    <CustomButton v-else :type="typeBtn" @click="click" :variant="variant" :label="label"/>
  </form>

</template>

<script setup lang="ts">
import CustomInput from "@/components/bootstrap/customInput.vue";
import CustomButton from "@/components/bootstrap/customButton.vue";
import { customFormProps } from "@/props/bootstrap/customForm";
import { customInputProps } from '@/props/bootstrap/customInput';
import { customButtonProps } from '@/props/bootstrap/customButton';
import useVuelidate from '@vuelidate/core'
import {reactive} from "vue";
const props = defineProps({
    ...customFormProps,
    ...customInputProps,
    ...customButtonProps
})

const emit = defineEmits(['click', 'update:modelValue'])

const v$ = useVuelidate()

const formModel = reactive<Record<number, string>>({})

props.formOptions.forEach((item) => {
  formModel[item.id] = item.modelValue;
})

const click = async (params: any) => {
  emit('click', params)
  emit('update:modelValue', !props.modelValue)
  const isFormCorrect = await v$.value.$validate()
  if (!isFormCorrect) return
}

</script>