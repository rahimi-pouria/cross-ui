# BCarousel – Bootstrap Vue Next

## Description

The `<BCarousel>` component is a flexible and responsive image/content slider based on **Bootstrap Vue Next**.  
It supports navigation controls, indicator buttons, auto-sliding, touch gestures, and more.  
Ideal for showcasing banners, product slides, or image carousels.

---

## Props

| Prop Name               | Type                       | Default                           | Description                                                                 |
|------------------------|----------------------------|-----------------------------------|-----------------------------------------------------------------------------|
| `background`           | `string`                   | `undefined`                       | Set the CSS color of the carousel's background                             |
| `controls`             | `boolean`                  | `false`                           | Enable the previous and next controls                                      |
| `controlsNextText`     | `string`                   | `'Next'`                          | Set the text for the "Next" control                                        |
| `controlsPrevText`     | `string`                   | `'Previous'`                      | Set the text for the "Previous" control                                    |
| `fade`                 | `boolean`                  | `false`                           | Use crossfade animation instead of slide                                   |
| `id`                   | `string`                   | `undefined`                       | Set ID on carousel and sub-elements                                        |
| `imgHeight`            | `string`                   | `undefined`                       | Set default height for child slide images                                  |
| `imgWidth`             | `string`                   | `undefined`                       | Set default width for child slide images                                   |
| `indicators`           | `boolean`                  | `false`                           | Show indicator buttons                                                     |
| `indicatorsButtonLabel`| `string`                   | `'Slide'`                         | ARIA label for indicator buttons                                           |
| `interval`             | `number`                   | `5000`                            | Time delay between slides (ms)                                             |
| `keyboard`             | `boolean`                  | `true`                            | Enable left/right arrow navigation                                         |
| `labelIndicators`      | `string`                   | `'Select a slide to display'`     | ARIA label for indicators                                                  |
| `modelValue`           | `number`                   | `0`                               | Currently active slide index                                               |
| `noAnimation`          | `boolean`                  | `false`                           | Disable all animations                                                     |
| `noHoverPause`         | `boolean`                  | `false`                           | Disable pause on hover                                                     |
| `noTouch`              | `boolean`                  | `false`                           | Disable touch swipe                                                        |
| `noWrap`               | `boolean`                  | `false`                           | Do not loop to beginning after last slide                                  |
| `ride`                 | `boolean | 'carousel'`     | `false`                           | Auto animate on load or interaction                                        |
| `rideReverse`          | `boolean`                  | `false`                           | Animate in reverse direction                                               |
| `touchThreshold`       | `number`                   | `undefined`                       | Minimum distance (in px) for touch swipe                                   |

---
Notes
modelValue can be used with v-model to bind the currently visible slide index.
When using ride="carousel", the carousel auto-plays from the beginning.
Use fade for a cross-fade animation instead of sliding.
Use noWrap to prevent the carousel from looping to the beginning after the last slide.
Supports swipe gestures on touch devices.

## Example
<custom-carousel
:item-slide="[
    { title: 'Slide 1', img: 'img1.jpg', alt: 'Image 1', description: 'Desc 1', linkBtn: '/product/1' },
    { title: 'Slide 2', img: 'img2.jpg', alt: 'Image 2', description: 'Desc 2', linkBtn: '/product/2' }
    ]"
    :controls="true"
    :indicators="true"
    effect-slide="fade"
    :intervalTimeSlide="2000"
    ride="carousel"
 />

