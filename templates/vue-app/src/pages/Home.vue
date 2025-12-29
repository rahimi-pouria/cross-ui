<template>
  <div class="text">
    <custom-choose-file />
    <custom-collapse id-collapse="" />
  </div>
</template>

<script setup lang="ts">

import CustomChooseFile from "@/components/elementPlus/customChooseFile.vue";
import CustomCollapse from "@/components/elementPlus/customCollapse.vue";
</script>

<style lang="scss">
  .text{
    padding: 20px;
    color: black;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
</style>
