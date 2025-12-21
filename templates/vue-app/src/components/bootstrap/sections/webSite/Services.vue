<template>
    <div :class="customClassWrapperService">
      <div :class="customClassTextBlock">
        <h2 :class="customClassTitle">{{ title }}</h2>
        <p :class="customClassDescription">{{ description }}</p>
      </div>
      <div :class="customClassWrapperServiceCard">
        <div v-for="item in serviceItems" :key="item.id" :class="customClassBodyCard">
          <div :class="customClassCardSection">
            <div :class="customClassCardHeader">
              <div :class="customClassCircleIcon">
                <img src="" :class="customClassIcon" alt="">
              </div>
            </div>
            <div :class="customClassCardBody">
              <h5 :class="customClassCardTitle">{{ item.title }}</h5>
              <p :class="customClassDescriptionCard">{{ item.description }}</p>
            </div>
            <div :class="customClassCardFooter">
              <router-link :to="item.link" :class="customClassLinkCard">{{ labelLink }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ServicesProps } from '@/props/bootstrap/sctions/Services';

const props = defineProps({
  ...ServicesProps,
})


</script>


<style scoped lang="scss">

</style>