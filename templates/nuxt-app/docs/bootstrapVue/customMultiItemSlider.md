# MultiItemSlider – Vue 3 + Swiper

## Description

A responsive, customizable multi-item slider built using **Vue 3** and **Swiper**.  
Ideal for displaying card-based slides in a carousel layout.  
Supports autoplay, navigation arrows, pagination, and responsive breakpoints.

Uses a `CustomCard` component for displaying content inside each slide.

---

## Props

| Prop Name         | Type                    | Required | Default                        | Description                                                                 |
|-------------------|-------------------------|----------|--------------------------------|-----------------------------------------------------------------------------|
| `slides`          | `Array`                | ✅ Yes   | `[]`                           | Array of slide objects, each with `title`, `img`, `alt`, `description`, and `linkBtn`. |
| `slidesPerView`   | `Number`               | No       | `3`                            | Number of slides visible per view.                                          |
| `spaceBetween`    | `Number`               | No       | `16`                           | Space between slides in pixels.                                             |
| `loop`            | `Boolean`              | No       | `true`                         | Whether the slider should loop infinitely.                                  |
| `autoplay`        | `Boolean`              | No       | `true`                         | Enables auto-slide with 3s delay.                                           |
| `navigation`      | `Boolean`              | No       | `true`                         | Enables next/prev navigation arrows.                                        |
| `pagination`      | `Boolean/Object`       | No       | `{ clickable: true }`          | Enables Swiper pagination bullets. Can pass full config object.            |
| `slidesPerGroup`  | `Number`               | No       | `1`                            | Number of slides to group per swipe.                                        |
| `breakpoints`     | `Object`               | No       | See default below              | Responsive slide view settings.                                             |
| `labelBtn`        | `String`               | No       | `''`                           | Label text for button in the card.                                          |
| `showBtn`         | `Boolean`              | No       | `false`                        | Whether to show the button in each card.                                    |
| `typeButton`      | `String`               | No       | `'button'`                     | Button type: `button`, `submit`, or `reset`.                                |
| `variantBtn`      | `String`               | No       | `''`                           | Bootstrap-style variant for the card button.                                |
| `btnClass`        | `String`               | No       | `''`                           | Custom classes for the card button.                                         |
| `idBtn`           | `String`               | No       | `''`                           | HTML `id` for the card button.                                              |
| `imgSrcError`     | `String`               | No       | `''`                           | Fallback image URL when the main image fails.                               |
| `overlay`         | `Boolean`              | No       | `false`                        | Adds an overlay to the card image if `true`.                                |
| `noBody`          | `Boolean`              | No       | `false`                        | Hides the body section of the card.                                         |
| `customClassText` | `String`               | No       | `''`                           | Custom class for card text/description.                                     |
| `multiItemClass`  | `String`               | No       | `''`                           | Custom class for the full card container.                                   |

### Default `breakpoints`

```js
{
  320:   { slidesPerView: 1 },
  640:   { slidesPerView: 2 },
  1024:  { slidesPerView: 3 },
  1280:  { slidesPerView: 4 }
}

Usage Notes
This component depends on Swiper and assumes global CSS for Swiper is imported.

Each item in slides array should include at least:
title, img, alt, description, and linkBtn (optional).

Button is optional and only shown when showBtn is true.

Responsive design is handled via the breakpoints prop.

Example

<multi-item-slider
  :slides="[
    { title: 'Slide 1', img: 'img1.jpg', alt: 'Image 1', description: 'Desc 1', linkBtn: '/product/1' },
    { title: 'Slide 2', img: 'img2.jpg', alt: 'Image 2', description: 'Desc 2', linkBtn: '/product/2' }
  ]"
  :autoplay="true"
  :navigation="true"
  :pagination="{ clickable: true }"
  :show-btn="true"
  label-btn="Shop Now"
  variant-btn="primary"
  btn-class="btn-sm"
  :slides-per-view="3"
  :loop="true"
  :space-between="24"
/>


