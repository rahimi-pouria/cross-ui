<template>
  <header>
    <HeaderWeb  id-navbar="" :lang-items="language" :navbar-items="menuItems" custom-class-link-logo=""
                label-link="Cross Ui" url-link=""  dropdown-item="" label="" text="" type-btn=""/>
  </header>

  <main>
    <slot />
  </main>
  <footer>
    <FooterWeb custom-class-wrapper-footer="" id="" />
  </footer>

</template>

<script setup lang="ts">

import HeaderWeb from "@/components/bootstrap/layout/headerWebSite.vue";
import FooterWeb from "@/components/bootstrap/layout/footerWebSite.vue";
import CustomSearch from "@/components/bootstrap/customSearch.vue";
import {useVuelidate} from "@vuelidate/core";

import {ref} from "vue";

const menuItems = [
  {
    id: 1,
    title: 'Home',
    icon: '',
    url: '/'
  },
  {
    id: 2,
    title: 'Product',
    icon: '',
    url: '/'
  },
  {
    id: 3,
    title: 'About us',
    icon: '',
    url: '/'
  },
  {
    id: 4,
    title: 'contact us',
    icon: '',
    url: '/'
  },
  {
    id: 5,
    dropdownItems: [
      {
        title: 'pouria',
        items: [
          { id: '1', name: 'mobile', link: '/', icon: '' },
          { id: '2', name: 'tablet', link: '/', icon: '' },
          { id: '3', name: 'laptop', link: '/', icon: '' }
        ]
      },
      {
        title: 'saman',
        items: [
          { id: '1', name: 'mobile', link: '/', icon: '' },
          { id: '2', name: 'tablet', link: '/', icon: '' },
          { id: '3', name: 'laptop', link: '/', icon: '' }
        ]
      },
      {
        title: 'product',
        items: [
          { id: '1', name: 'mobile', link: '/', icon: '' },
          { id: '2', name: 'tablet', link: '/', icon: '' },
          { id: '3', name: 'laptop', link: '/', icon: '' }
        ]
      }
    ],
  },
]

const language = [
  {
    id: 1,
    title: 'English',
  },
  {
    id: 2,
    title: 'Persian',
  }
]

const searchWord = ref('')
const v$ = useVuelidate(searchWord)

const searchData = async () => {
  // const isFormCorrect = await v$.value.$validate()
  // if (!isFormCorrect) return
  const findData = menuItems.find((item) => item.title === searchWord.value)
}
</script>

<style scoped lang="scss">

</style>