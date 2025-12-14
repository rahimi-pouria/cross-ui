<template>
  <div class="flex h-screen">

    <!-- Sidebar — Desktop -->
    <Sidebar class="hidden md:block w-[15%] bg-[var(--bg-color-sidebar)] text-white"/>
    <!-- Sidebar — Mobile Overlay -->
    <transition name="slide">
      <Sidebar class="fixed inset-y-0 left-0 w-64 bg-[var(--bg-color-sidebar)] text-white z-50 md:hidden"/>
    </transition>


    <div class="flex flex-col flex-1">
      <HeaderLayout />
      <main class="flex-1 p-4 overflow-y-auto">
        <router-view />
      </main>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Sidebar from "../src/components/tailwind/layout/sidebar.vue"
import HeaderLayout from "../src/components/tailwind/layout/headerLayout.vue"

</script>

<style scoped lang="scss">
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease;
}
</style>
