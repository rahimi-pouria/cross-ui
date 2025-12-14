# CustomMultiItemSlider – Element Plus Version

## Description
**CustomMultiItemSlider** is a flexible and reusable **multi-item carousel** component built with **Vue 3** and **Element Plus**.  
It displays multiple `CustomCard` components per slide (default 4) and allows full customization of each card.  
The slider supports **autoplay**, **looping**, and **arrow navigation**.

This component is ideal for showcasing **products, portfolios, or any grouped content** with customizable cards.

---

## Props

### Slider Props (`customMultiItemSliderProps`)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `itemCard` | `items[]` | `[]` | Array of items to display. Each item should have `id`, `src`, `alt`, `title`, `description`. |
| `perSlide` | `number` | `4` | Number of cards to show per slide. |
| `modelValue` | `boolean` | `false` | Boolean value toggled when a card is clicked (used with `updateModelValue` emit). |

### Card Props (`customCardProps`)

All props of `CustomCard` are forwarded, including:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `''` | Card title |
| `type` | `string` | `'success'` | Card type (success, warning, etc.) |
| `nativeType` | `string` | `'button'` | Native type for button |
| `titleBtn` | `string` | `''` | Button text |
| `description` | `string` | `''` | Description text inside the card |
| `customClassBodyCard` | `string` | `''` | Custom CSS class for card body |
| `customClassBtn` | `string` | `''` | Custom CSS class for button |
| `customClassHeader` | `string` | `''` | Custom CSS class for header |
| `customClassTextHeader` | `string` | `''` | Custom CSS class for header text |
| `customClassDescription` | `string` | `''` | Custom CSS class for description |
| `customClassFooter` | `string` | `''` | Custom CSS class for footer |
| `customClassTextFooter` | `string` | `''` | Custom CSS class for footer text |
| `customClassImageCard` | `string` | `''` | Custom CSS class for image inside card |
| `hrefBtn` | `string` | `''` | Optional URL for card button |

### Button Props (`customButtonProps`)

All props related to the button inside `CustomCard` are forwarded automatically.

---

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `click` | `any` | Triggered when a card is clicked. Payload contains card-specific data. |
| `updateModelValue` | `boolean` | Emits a toggled value of `modelValue` when a card is clicked. Useful for v-model binding. |

---

## Slots

- This component does **not provide named slots**. All content is passed via **props** to `CustomCard`.

---

## Usage Example

```vue
<CustomMultiItemSlider
  :itemCard="items"
  :perSlide="4"
  type="success"
  native-type="button"
  title-btn="See more"
  v-model="showModal"
  @click="handleCardClick"
/>
