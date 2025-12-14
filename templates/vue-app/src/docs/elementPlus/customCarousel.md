# CustomCarousel – Element Plus Version

## Description
The **CustomCarousel** component is a reusable and flexible carousel built using **Vue 3** and **Element Plus**.  
It supports dynamic slides via the `itemCarousel` prop and allows slot-based customization on each slide.

---

## Props

| Prop Name        | Type                   | Default   | Description |
|-----------------|------------------------|-----------|-------------|
| `id`            | `string`               | `''`      | Optional ID for the carousel container |
| `title`         | `string`               | `'500px'` | Title text (optional, mostly unused if using slides array) |
| `description`   | `string`               | `''`      | Description text (optional) |
| `srcImg`        | `string`               | `''`      | Default image source (optional, mostly unused if using `itemCarousel`) |
| `altImg`        | `string`               | `''`      | Default image alt text (optional) |
| `customClassImg`| `string`               | `''`      | Additional classes for images |
| `itemCarousel`  | `Array<itemCarousel>`  | `[]`      | Array of slide objects. Each object should have `{ id, srcImage, altImage }` |
| `customHeight`  | `string`               | `'500px'` | Height of the carousel |
| `interval`      | `number`               | `5000`    | Time interval (ms) for autoplay |
| `loop`          | `boolean`              | `false`   | Enable loop sliding |
| `autoplay`      | `boolean`              | `false`   | Enable automatic sliding |

---

## itemCarousel Object

Each slide object should have the following shape:

```ts
type itemCarousel = {
  id: number;          // Unique ID for the slide
  srcImage: string;    // Image URL
  altImage: string;    // Alt text for the image
}

Example
<CustomCarousel
  :itemCarousel="[
    { id: 1, srcImage: '/img1.jpg', altImage: 'Image 1' },
    { id: 2, srcImage: '/img2.jpg', altImage: 'Image 2' }
  ]"
  :interval="3000"
  :loop="true"
  :autoplay="true"
>
  <template #customSlide-1>
    <div class="custom-content">Slide 1 Content</div>
  </template>
  <template #customSlide-2>
    <div class="custom-content">Slide 2 Content</div>
  </template>
</CustomCarousel>

