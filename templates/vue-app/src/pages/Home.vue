<template>
  <div class="text">
    <custom-form />
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import useVuelidate from '@vuelidate/core'
import CustomForm from "@/components/elementPlus/customForm.vue";
const v$ = useVuelidate()


const search =  async () => {
  console.log('search');
  const isFormCorrect = await v$.value.$validate()
  if (!isFormCorrect) return
}


</script>

<style lang="scss">
  .text{
    padding: 20px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;

  }
</style>
