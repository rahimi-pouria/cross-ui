<template>
  <footer :class="customClassWrapperFooter">
    <div class="container">
      <slot v-if="$slots.customizeFooter" name="customizeFooter"/>
      <div v-else class="row justify-content-center">
        <div class="col-md-9 text-center">
          <div class="footer-site-logo mb-4">
            <router-link to="/">
              <h2>Cross Ui</h2>
            </router-link>
          </div>
          <div class="mb-4">
            <h3>You can create a fully customized footer based on your personal design preferences.</h3>
          </div>
          <div class="copyright">
            <p class="mb-0"><small>© Cross ui. All Rights Reserved.</small></p>
          </div>
        </div>
      </div>
    </div>
  </footer>

</template>

<script setup lang="ts">
import { footerProps } from "@/props/bootstrap/siteLayout/footer";

const props = defineProps({
  ...footerProps,
})

</script>

<style scoped lang="scss">

</style>