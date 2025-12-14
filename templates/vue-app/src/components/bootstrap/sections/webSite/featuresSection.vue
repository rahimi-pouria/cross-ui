<template>
    <div :class="customClassWrapperServiceSection">
      <div :class="customClassHeadingServiceSection">
        <h3 :class="customClassTitleFeaturesSection">{{ titleFeaturesSection }}</h3>
        <p :class="customClassDescriptionFeaturesSection">{{ descriptionFeaturesSection }}</p>
      </div>
      <div :class="customClassWrapperCardServiceSection">
        <div v-for="(item) in serviceItem" :key="item.id" :class="customClassCardServiceSection">
          <div :class="customClassWrapperImageServiceSection">
            <span v-if="item.image" :class="customClassIconServiceSection">
              <img :src="item.image" :class="customClassImageServiceSection" :alt="item.alt" />
            </span>
          </div>
          <h4 :class="customClassTitleCardServiceSection">{{ item.title }}</h4>
          <p :class="customClassDescriptionServiceSection">{{ item.description }}</p>
          <router-link v-if="item.link" :class="customClassLinkCardServiceSection" :to="item.link">{{ titleLink }}</router-link>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { featuresSectionProps } from "@/props/bootstrap/sctions/featuresSection";

const props = defineProps({
  ...featuresSectionProps
})

</script>


<style scoped lang="scss">

</style>