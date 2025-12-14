<template>
  <BCard :id="id" :title="props.title" :sub-title="subTitle" :sub-title-tag="subTitleTag" :title-tag="titleTag" :img-src="imgSrc"
      :img-alt="imgAlt" :img-top="imgTop" :img-bottom="imgBottom" :img-end="imgEnd" :img-start="imgStart" :img-height="imgHeight"
      :img-width="imgWidth" :tag="tag" :no-body="noBody" :overlay="overlay" :class="classCard">
    <!-- Custom Header -->
    <template #header v-if="headerCard !== ''">
      <small :class="headerClass">{{ headerCard }}</small>
    </template>

    <!-- Custom Body -->
    <template v-if="!noBody">
      <slot>
        <div class="d-flex flex-column gap-4">
          <b-card-text :class="customClassText">{{ descriptionCard }}</b-card-text>
          <div>
            <router-link :to="customCardLink" target="_blank">{{ titleCustomLink }}</router-link>
            <template v-if="showBtn">
              <custom-button :id="idBtn" :href="linkBtn" :btn-class="btnClass" :variant-btn="variantBtn" :label="labelBtn" @click="emit('click')" :type-button="typeButton"/>
            </template>
          </div>
        </div>
      </slot>
    </template>

    <!-- Custom Footer -->
    <template #footer v-if="footerCard !== ''">
      <small :class="footerClass">{{ footerCard }}</small>
    </template>
  </BCard>
</template>

<script setup lang="ts">
import {customCardProps} from "@/props/customCard.ts";
import { customButton } from "@/props/customButton.ts";
import CustomButton from "./customButton.vue";
import { BCard, BCardText } from 'bootstrap-vue-next'

const emit = defineEmits(['click'])

const props = defineProps({
  ...customCardProps,
  ...customButton
});
</script>

<style scoped lang="scss">
</style>
