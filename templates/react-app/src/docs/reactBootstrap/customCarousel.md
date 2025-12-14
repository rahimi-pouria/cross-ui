# CustomCarousel – Bootstrap Version

## Description
The **CustomCarousel** component is a wrapper around **React-Bootstrap Carousel** that allows you to build a fully customizable image slider.  
It also supports optional integration with a **CustomButton**, making it suitable for banners, promos, or call-to-action slides.

---

## Props

### `CustomCarouselProps`
| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique identifier for the carousel. |
| `customClassCarousel` | `string` | Custom CSS class for the carousel container. |
| `customClassCarouselItem` | `string` | Custom CSS class for each carousel item. |
| `customClassCarouselCaption` | `string` | Custom CSS class for the caption area. |
| `customClassTitleCarousel` | `string` | Custom CSS class for the carousel title. |
| `customClassCarouselDescription` | `string` | Custom CSS class for the carousel description. |
| `customClassImgCarousel` | `string` | Custom CSS class for carousel images. |
| `dataBsTheme` | `string` | Bootstrap theme (`"light"` / `"dark"`). |
| `itemSlider` | `itemSlider[]` | Array of slide items (see below). |
| `showBtn` | `boolean` | If `true`, renders a **CustomButton** inside the caption. |

### `itemSlider`
| Prop | Type | Description |
|------|------|-------------|
| `id` | `number` | Unique id for the slide. |
| `srcImage` | `string` | Image source URL. |
| `altImage` | `string` | Alt text for accessibility. |
| `title` | `string` | Title displayed on the slide caption. |
| `description` | `string` | Description displayed below the title. |

---

### `customButtonProps` (optional if `showBtn = true`)
All props from the **CustomButton** component can be passed here, such as:

| Prop | Type | Description |
|------|------|-------------|
| `titleBtn` | `string` | Button text. |
| `variant` | `string` | Bootstrap button variant (`primary`, `secondary`, etc.). |
| `size` | `string` | Button size (`sm`, `lg`). |
| `disable` | `boolean` | Disable the button. |
| `href` | `string` | Link for the button. |
| `onClick` | `function` | Click handler. |
| `customClassBtn` | `string` | Custom CSS class for the button. |

---

## Usage Example

```tsx
import CustomCarousel from "@/components/CustomCarousel";

const data = [
  {
    id: 1,
    srcImage: "/images/slide1.jpg",
    altImage: "Slide 1",
    title: "Welcome to Our Website",
    description: "Discover our features and services"
  },
  {
    id: 2,
    srcImage: "/images/slide2.jpg",
    altImage: "Slide 2",
    title: "Fast and Reliable",
    description: "We provide quick and efficient solutions"
  },
  {
    id: 3,
    srcImage: "/images/slide3.jpg",
    altImage: "Slide 3",
    title: "Contact Us Today",
    description: "Let’s start working together"
  }
];

export default function DemoCarousel() {
  return (
    <CustomCarousel
      id="main-carousel"
      dataBsTheme="dark"
      customClassCarousel="custom-carousel"
      customClassCarouselItem="custom-carousel-item"
      customClassCarouselCaption="custom-caption"
      customClassTitleCarousel="custom-title"
      customClassCarouselDescription="custom-description"
      customClassImgCarousel="custom-img"
      itemSlider={data}
      showBtn={true}
      titleBtn="Learn More"
      variant="primary"
      size="lg"
      onClick={() => alert("Button clicked!")}
    />
  );
}
