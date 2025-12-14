# CustomAccordion – Element Plus Version

## Description
The **CustomAccordion** component is a wrapper around [Element Plus Collapse](https://element-plus.org/en-US/component/collapse.html).  
It allows you to render accordion items dynamically from an array and provides full customization with props and slots.  
Each accordion item supports **custom content via slots**.

---

## Props

| Prop                         | Type                 | Default   | Description |
|------------------------------|----------------------|-----------|-------------|
| `id`                         | `string`             | `''`      | Custom ID for the accordion wrapper. |
| `customActiveTab`            | `number`             | `1`       | The tab that should be active by default. |
| `customClassAccordion`       | `string`             | `''`      | Custom class applied to each accordion item. |
| `customClassWrapperAccordion`| `string`             | `''`      | Custom class applied to the accordion wrapper. |
| `customClassDescriptionAccordion` | `string`        | `''`      | Custom class applied to the description container. |
| `items`                      | `Array<items>`       | `[]`      | The list of items rendered inside the accordion. |

---

## Item Type

```ts
export type items = {
  id: number
  title: string
  description: string
}
example
    <custom-accordion :items="accordionItems" :custom-active-tab="4"
                      customClassWrapperAccordion="my-accordion-wrapper"
                      customClassAccordion="accordion-item"
                      customClassDescriptionAccordion="accordion-desc"
    />