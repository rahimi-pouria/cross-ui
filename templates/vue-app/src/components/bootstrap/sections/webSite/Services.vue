<template>
    <div :class="customClassWrapperService">
      <div :class="customClassTextBlock">
        <h2 :class="customClassTitle">{{ title }}</h2>
        <p :class="customClassDescription">{{ description }}</p>
      </div>
      <div :class="customClassWrapperServiceCard">
        <div class="col-md-4" v-for="item in serviceItems" :key="item.id">
          <div class="card h-100 text-center border-0 shadow-sm">
            <!-- آیکن -->
            <div class="d-flex justify-content-center mt-4">
              <div class="bg-dark text-white rounded-circle p-3">
                <i :class="item.iconClass" style="font-size: 1.5rem;"></i>
              </div>
            </div>

            <!-- عنوان و متن -->
            <div class="card-body">
              <h5 class="card-title fw-bold mt-3">{{ item.title }}</h5>
              <p class="card-text text-muted">{{ item.description }}</p>
            </div>

            <!-- دکمه بیشتر -->
            <div class="card-footer bg-transparent border-0 mb-3">
              <router-link :to="item.link" class="btn btn-outline-dark btn-sm">MORE</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ServicesProps } from '@/props/bootstrap/sctions/Services';
import { customCardProps } from '@/props/bootstrap/customCard'

const props = defineProps({
  ...ServicesProps,
})


</script>


<style scoped lang="scss">

</style>