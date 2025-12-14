# CustomCarousel – Material UI Version

## Description
The **CustomCarousel** component is a responsive, fully customizable carousel/slider built with **React** and **SwiperJS**.  
It supports autoplay, navigation arrows, pagination dots, and allows for dynamic rendering of slides using an array of items.  
Each slide can display an image along with a title and description. You can customize CSS classes for each element.

---

## Props

| Prop Name                        | Type                                                                 | Description                                                                                     | Required |
|----------------------------------|----------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|----------|
| `itemCarousel`                    | `{ name: string, description: string, srcImage: string, altImg: string }[]` | Array of items to render as slides in the carousel.                                             | ✅       |
| `customClassImg`                  | `string`                                                              | Custom CSS class for the `<img>` element in each slide.                                         | ❌       |
| `customClassWrapperText`          | `string`                                                              | Custom CSS class for the container holding the title and description overlay.                   | ❌       |
| `customClassNameTextSlider`       | `string`                                                              | Custom CSS class for the slide title `<h2>`.                                                   | ❌       |
| `customClassDescriptionSlider`    | `string`                                                              | Custom CSS class for the slide description `<p>`.                                              | ❌       |

---

## Item Type Example

```ts
    const slides = [
        { name: "Slide 1", description: "This is the first slide.", srcImage: "/images/slide1.jpg", altImg: "Slide 1" },
        { name: "Slide 2", description: "This is the second slide.", srcImage: "/images/slide2.jpg", altImg: "Slide 2" },
        { name: "Slide 3", description: "This is the third slide.", srcImage: "/images/slide3.jpg", altImg: "Slide 3" },
    ];

        <CustomCarousel 
            itemCarousel={slides} 
            customClassImg="my-slide-img" 
            customClassWrapperText="my-slide-overlay" 
            customClassNameTextSlider="my-slide-title" 
            customClassDescriptionSlider="my-slide-description"
        />
