# CustomCard Component – Element Plus Version

## Description
The **CustomCard** component is a flexible card UI built using **Element Plus**.  
It supports custom header, footer, body content, image, and a button.  
All parts are customizable via props, including classes for styling.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | `''` | Unique ID for the card. |
| `title` | `string` | `''` | Title of the card (if needed). |
| `description` | `string` | `''` | Default body text of the card. |
| `headerContent` | `string` | `''` | Content for the card header. |
| `footerContent` | `string` | `''` | Content for the card footer. |
| `srcImg` | `string` | `''` | Image URL for the card image. |
| `altImg` | `string` | `''` | `alt` text for the image. |
| `customClassCard` | `string` | `''` | Custom class for the `<el-card>` wrapper. |
| `customClassImageCard` | `string` | `''` | Custom class for the `<img>` element. |
| `customClassHeader` | `string` | `''` | Custom class for the header container. |
| `customClassTextHeader` | `string` | `''` | Custom class for the header text. |
| `customClassDescription` | `string` | `''` | Custom class for the description text. |
| `customClassBodyCard` | `string` | `''` | Custom class for the body container (including button). |
| `customClassFooter` | `string` | `''` | Custom class for the footer container. |
| `customClassTextFooter` | `string` | `''` | Custom class for the footer text. |

---

## Slots

| Slot Name | Description |
|-----------|-------------|
| `customBody` | Slot for custom body content. Overrides `description` prop if provided. |
| `header` | Slot for header content (optional). |
| `footer` | Slot for footer content (optional). |

---

## Usage Example

```vue
<template>
  <CustomCard
    title="Card Title"
    description="This is a sample description."
    headerContent="Header Text"
    footerContent="Footer Text"
    srcImg="/images/sample.jpg"
    altImg="Sample Image"
    customClassCard="my-card"
    customClassImageCard="my-image"
    customClassHeader="my-header"
    customClassTextHeader="my-header-text"
    customClassDescription="my-description"
    customClassBodyCard="my-body"
    customClassFooter="my-footer"
    customClassTextFooter="my-footer-text"
    :type="'primary'"
    :nativeType="'button'"
    :titleBtn="'Click Me'"
    :hrefBtn="'/next-page'"
  />
</template>

<script setup lang="ts">
import CustomCard from "@/components/elementPlusComponent/customCard.vue";
</script>
