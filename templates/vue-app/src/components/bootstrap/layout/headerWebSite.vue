<template>
  <nav :class="customClassNav">
    <div :class="customClassWrapperNavbar">
      <router-link :to="urlLink" :class="customClassLinkLogo">
        {{ labelLink }}
      </router-link>
      <custom-button class="navbar-toggler" type-btn="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                     aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <template #icon>
          <span class="navbar-toggler-icon"></span>
        </template>
      </custom-button>
      <div class="collapse navbar-collapse " id="navbarScroll">
        <slot v-if="$slots.customHeader" name="customHeader" />
        <ul v-else-if="navbarItems" :class="customClassUlItem">
          <template v-for="(item, index) in navbarItems" :key="index">
            <li :class="customClassNavItem">
              <router-link :to="item.url" class="nav-link active" aria-current="page">{{ item.title }}</router-link>
            </li>
            <template v-for="(data) in item.dropdownItems">
              <custom-dropdown :text="data.title" v-if="data.items" :dropdown-item="data.items" />
            </template>
          </template>
        </ul>
        <h4 v-else>You can create a fully customized header based on your personal design preferences.</h4>
        <slot name="extra"/>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">

import CustomButton from "@/components/bootstrap/customButton.vue";
import CustomDropdown from "@/components/bootstrap/customDropdown.vue";
import { navbarProps } from "@/props/bootstrap/siteLayout/navbar";
import {CustomDropdownProps} from '@/props/bootstrap/customDropdown';
import { customButtonProps } from "@/props/bootstrap/customButton";

const props = defineProps({
  ...navbarProps,
  ...CustomDropdownProps,
  ...customButtonProps
})
</script>

<style scoped lang="scss">

</style>