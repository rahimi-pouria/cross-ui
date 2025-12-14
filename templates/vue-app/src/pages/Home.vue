<template>
    <div class="d-flex w-100 justify-content-center align-items-center">
      <f-a-q title="faq" description="pouria rahimy faq section" custom-class-title="d-flex flex-column align-items-center"
      :faq-item="faqList"
      />
    </div>
</template>

<script setup lang="ts">


import FAQ from "@/components/bootstrap/sections/webSite/FAQ.vue";
import { faqItemProps } from '@/props/bootstrap/sctions/faqTypes'

const faqList: faqItemProps[] = [
  {
    id: 1,
    title: 'How can I create an account?',
    description: 'To create an account, click on the sign up button and fill in the required information. After submitting the form, your account will be created successfully.'
  },
  {
    id: 2,
    title: 'I forgot my password, what should I do?',
    description: 'Click on the forgot password link on the login page and follow the instructions to reset your password via email.'
  },
  {
    id: 3,
    title: 'Is my personal information secure?',
    description: 'Yes, we use industry-standard security practices to protect your personal data and never share your information with third parties.'
  },
  {
    id: 4,
    title: 'Can I change my account information?',
    description: 'You can update your personal information at any time from your account settings page after logging in.'
  },
  {
    id: 5,
    title: 'How can I contact support?',
    description: 'You can contact our support team via the contact form on the website or by sending an email to support@example.com.'
  }
]



</script>

<style lang="scss" scoped>

</style>
