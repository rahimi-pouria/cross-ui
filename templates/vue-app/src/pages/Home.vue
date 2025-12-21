<template>
  <div class="d-flex w-100 justify-content-center align-items-center p-4 wrapper ">
    <testimonials :testimonial-item="testimonialMock" id="" show-slider :item-slider="testimonialMock"/>
  </div>
</template>

<script setup lang="ts">
import Testimonials from "@/components/bootstrap/sections/webSite/Testimonials.vue";
 import { testimonialItemTypes } from '@/props/bootstrap/sctions/testimonials'

const testimonialMock: testimonialItemTypes[] = [
  {
    id: 1,
    title: "CrossUI saved weeks of development",
    description:
        "Using CrossUI, we were able to build a full admin panel with reusable components in a fraction of the usual time.",
    imgSrc: "https://picsum.photos/1024/480/?image=25",
    imgAlt: "Frontend Developer",
    link: "https://crossui.dev/case-study-1"
  },
  {
    id: 2,
    title: "One codebase, multiple frameworks",
    description:
        "CrossUI allowed our team to use the same component logic across Vue and React without rewriting everything.",
    imgSrc: "https://picsum.photos/1024/480/?image=26",
    imgAlt: "Tech Lead",
    link: "https://crossui.dev/case-study-2"
  },
  {
    id: 3,
    title: "Perfect for scalable admin panels",
    description:
        "The component architecture is clean, predictable, and extremely flexible for large-scale dashboards.",
    imgSrc: "https://picsum.photos/1024/480/?image=27",
    imgAlt: "Tech Lead",
    link: "https://crossui.dev/case-study-3"
  },
  {
    id: 4,
    title: "CrossUI saved weeks of development",
    description:
        "Using CrossUI, we were able to build a full admin panel with reusable components in a fraction of the usual time.",
    imgSrc: "https://picsum.photos/1024/480/?image=28",
    imgAlt: "Frontend Developer",
    link: "https://crossui.dev/case-study-1"
  },
  {
    id: 5,
    title: "One codebase, multiple frameworks",
    description:
        "CrossUI allowed our team to use the same component logic across Vue and React without rewriting everything.",
    imgSrc: "https://picsum.photos/1024/480/?image=29",
    imgAlt: "Tech Lead",
    link: "https://crossui.dev/case-study-2"
  },
  {
    id: 6,
    title: "Perfect for scalable admin panels",
    imgSrc: "https://picsum.photos/1024/480/?image=24",
    imgAlt: "Frontend Developer",
    description:
        "The component architecture is clean, predictable, and extremely flexible for large-scale dashboards.",
    link: "https://crossui.dev/case-study-3"
  },
  {
    id: 7,
    title: "CrossUI saved weeks of development",
    description:
        "Using CrossUI, we were able to build a full admin panel with reusable components in a fraction of the usual time.",
    imgSrc: "https://picsum.photos/1024/480/?image=24",
    imgAlt: "Frontend Developer",
    link: "https://crossui.dev/case-study-1"
  },
  {
    id: 8,
    title: "One codebase, multiple frameworks",
    description:
        "CrossUI allowed our team to use the same component logic across Vue and React without rewriting everything.",
    imgSrc: "https://picsum.photos/1024/480/?image=24",
    imgAlt: "Frontend Developer",
    link: "https://crossui.dev/case-study-2"
  },
  {
    id: 9,
    title: "Perfect for scalable admin panels",
    imgSrc: "https://picsum.photos/1024/480/?image=24",
    imgAlt: "Frontend Developer",
    description:
        "The component architecture is clean, predictable, and extremely flexible for large-scale dashboards.",
    link: "https://crossui.dev/case-study-3"
  },
  {
    id: 10,
    title: "CrossUI saved weeks of development",
    description:
        "Using CrossUI, we were able to build a full admin panel with reusable components in a fraction of the usual time.",
    imgSrc: "https://picsum.photos/1024/480/?image=24",
    imgAlt: "Frontend Developer",
    link: "https://crossui.dev/case-study-1"
  },
  {
    id: 11,
    title: "One codebase, multiple frameworks",
    description:
        "CrossUI allowed our team to use the same component logic across Vue and React without rewriting everything.",
    imgSrc: "https://picsum.photos/1024/480/?image=24",
    imgAlt: "Frontend Developer",
    link: "https://crossui.dev/case-study-2"
  },
  {
    id: 12,
    title: "Perfect for scalable admin panels",
    imgSrc: "https://picsum.photos/1024/480/?image=24",
    imgAlt: "Frontend Developer",
    description:
        "The component architecture is clean, predictable, and extremely flexible for large-scale dashboards.",
    link: "https://crossui.dev/case-study-3"
  },
  {
    id: 13,
    title: "CrossUI saved weeks of development",
    description:
        "Using CrossUI, we were able to build a full admin panel with reusable components in a fraction of the usual time.",
    imgSrc: "https://picsum.photos/1024/480/?image=24",
    imgAlt: "Frontend Developer",
    link: "https://crossui.dev/case-study-1"
  },
  {
    id: 14,
    title: "One codebase, multiple frameworks",
    description:
        "CrossUI allowed our team to use the same component logic across Vue and React without rewriting everything.",
    imgSrc: "https://picsum.photos/1024/480/?image=24",
    imgAlt: "Frontend Developer",
    link: "https://crossui.dev/case-study-2"
  },
  {
    id: 15,
    title: "Perfect for scalable admin panels",
    imgSrc: "https://picsum.photos/1024/480/?image=24",
    imgAlt: "Frontend Developer",
    description:
        "The component architecture is clean, predictable, and extremely flexible for large-scale dashboards.",
    link: "https://crossui.dev/case-study-3"
  }
]

</script>

<style lang="scss" scoped>
.wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.from{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  background: #ffffff;
}
</style>
