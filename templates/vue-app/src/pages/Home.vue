<template>
    <div class="d-flex flex-column w-100 justify-content-center align-items-center">
      <Services title="service page" description="loremqpkwmdpkjnqpwodnkpoqkwndlkjbnqwiodbjqwd"
                custom-class-wrapper-service="d-flex flex-column justify-content-center align-items-center" custom-class-wrapper-service-card="d-flex flex-wrap gap-3"
                :service-items="services" custom-class-body-card="d-flex w-25" class-card=""
                />
    </div>
</template>

<script setup lang="ts">

import Services from "@/components/bootstrap/sections/webSite/Services.vue";


import { serviceItemsType } from "@/props/bootstrap/sctions/Services";

const services: serviceItemsType[] = [
  {
    id: 1,
    title: "Web Development",
    subTitle: "Frontend & Backend",
    imgSrc: "https://picsum.photos/1024/480/?image=25",
    description: "We build responsive and modern web applications using the latest technologies.",
    imgAlt: "Web Development Image",
    link: "/services/web-development"
  },
  {
    id: 2,
    title: "Mobile App Development",
    subTitle: "iOS & Android",
    imgSrc: "https://picsum.photos/1024/480/?image=24",
    description: "Creating high-quality mobile applications for both Android and iOS platforms.",
    imgAlt: "Mobile App Image",
    link: "/services/mobile-app-development"
  },
  {
    id: 3,
    title: "UI/UX Design",
    subTitle: "User-centered Design",
    imgSrc: "https://picsum.photos/1024/480/?image=23",
    description: "Designing intuitive and engaging user interfaces and experiences.",
    imgAlt: "UI/UX Design Image",
    link: "/services/ui-ux-design"
  },
  {
    id: 4,
    title: "SEO Optimization",
    subTitle: "Increase Visibility",
    imgSrc: "https://picsum.photos/1024/480/?image=26",
    description: "Optimize your website to rank higher on search engines and attract more traffic.",
    imgAlt: "SEO Optimization Image",
    link: "/services/seo-optimization"
  },
  {
    id: 5,
    title: "Cloud Services",
    subTitle: "AWS & Azure",
    imgSrc: "https://picsum.photos/1024/480/?image=27",
    description: "Deploy and manage your applications efficiently on cloud platforms.",
    imgAlt: "Cloud Services Image",
    link: "/services/cloud-services"
  },
  {
    id: 6,
    title: "Cloud pouria",
    subTitle: "AWS & Azure",
    imgSrc: "https://picsum.photos/1024/480/?image=27",
    description: "Deploy and manage your applications efficiently on cloud platforms.",
    imgAlt: "Cloud Services Image",
    link: "/services/cloud-services"
  }
];

const feature = [
  {
    id: 1,
    title: "طراحی وب سایت",
    description: "ایجاد وب سایت‌های مدرن و ریسپانسیو با تجربه کاربری عالی.",
    link: "/services/web-design",
    image: "https://picsum.photos/1024/480/?image=25",
    alt: "طراحی وب سایت"
  },
  {
    id: 2,
    title: "توسعه اپلیکیشن موبایل",
    description: "ساخت اپلیکیشن‌های موبایل برای اندروید و iOS با عملکرد بالا.",
    link: "/services/mobile-app",
    image: "/images/services/mobile-app.jpg",
    alt: "اپلیکیشن موبایل"
  },
  {
    id: 3,
    title: "سئو و بهینه‌سازی",
    description: "بهینه‌سازی وب سایت برای موتورهای جستجو و افزایش بازدید.",
    link: "/services/seo",
    image: "/images/services/seo.jpg",
    alt: "سئو و بهینه‌سازی"
  },
  {
    id: 4,
    title: "طراحی گرافیک",
    description: "طراحی لوگو، بنر، پوستر و محتوای بصری جذاب.",
    link: "/services/graphic-design",
    image: "/images/services/graphic-design.jpg",
    alt: "طراحی گرافیک"
  },
  {
    id: 5,
    title: "بازاریابی دیجیتال",
    description: "کمک به رشد کسب‌وکار شما از طریق تبلیغات و شبکه‌های اجتماعی.",
    link: "/services/digital-marketing",
    image: "/images/services/digital-marketing.jpg",
    alt: "بازاریابی دیجیتال"
  }
]

</script>

<style lang="scss" scoped>

</style>
