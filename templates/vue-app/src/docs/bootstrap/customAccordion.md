# CustomAccordion – BootstrapVueNext Version

## Description
A flexible and highly customizable accordion component built with **Vue 3** and **BootstrapVueNext**.  
Supports full control over appearance, animations, and behavior through multiple props and slots.  
Ideal for complex UI needs with options for horizontal collapse, lazy loading, and detailed styling.

---

## Props

| Prop Name       | Type                             | Required | Default      | Description                                                                                  |
|-----------------|---------------------------------|----------|--------------|----------------------------------------------------------------------------------------------|
| `id`            | `String`                        | No       | `''`         | Unique identifier used in the accordion item and collapse elements.                         |
| `visible`       | `Boolean`                       | No       | `false`      | Controls whether the accordion item is initially open (`true`) or closed (`false`).          |
| `modelValue`    | `Boolean`                       | No       | `false`      | Supports `v-model` for reactive visibility control.                                         |
| `show`          | `Boolean`                       | No       | `false`      | Animates from closed to open on mount if `true`.                                            |
| `title`         | `String`                        | No       | `'Accordion Item'` | Text to display in the accordion header.                                                    |
| `description`   | `String`                        | No       | `''`         | Default content inside the accordion body.                                                  |
| `customClass`   | `String`                        | No       | `''`         | Custom CSS classes for the root accordion item element.                                     |
| `buttonClass`   | `String \| Array \| Object`     | No       | `''`         | CSS classes applied to the accordion header toggle button.                                  |
| `bodyClass`     | `String \| Array \| Object`     | No       | `''`         | CSS classes applied to the accordion body wrapper.                                         |
| `bodyStyle`     | `String \| Object`              | No       | `''`         | Inline styles for the accordion body wrapper.                                              |
| `collapseClass` | `String \| Array \| Object`     | No       | `''`         | CSS classes applied to the collapse wrapper controlling show/hide animation.               |
| `headerClass`   | `String \| Array \| Object`     | No       | `''`         | CSS classes for the accordion header element.                                              |
| `buttonAttrs`   | `Object`                       | No       | `{}`         | Additional HTML attributes to add to the toggle button.                                    |
| `bodyAttrs`     | `Object`                       | No       | `{}`         | Additional HTML attributes to add to the accordion body.                                   |
| `headerAttrs`   | `Object`                       | No       | `{}`         | Additional HTML attributes to add to the header element.                                   |
| `wrapperAttrs`  | `Object`                       | No       | `{}`         | Attributes applied to the root accordion container (`BAccordion`).                         |
| `headerTag`     | `String`                       | No       | `'h2'`       | HTML tag used for the accordion header element.                                            |
| `tag`           | `String`                       | No       | `'div'`      | HTML tag used for the root accordion item element.                                         |
| `horizontal`    | `Boolean`                      | No       | `false`      | Enables horizontal collapse animation (width transition instead of height).                |
| `isNav`         | `Boolean`                      | No       | `false`      | Enables navbar mode for special accordion behaviors in navbars.                            |
| `lazy`          | `Boolean`                      | No       | `false`      | If `true`, delays mounting accordion body content until expanded.                          |
| `unmountLazy`   | `Boolean`                      | No       | `false`      | If true and `lazy` is enabled, unmounts content when accordion closes.                     |

---

## Slots

| Slot Name | Description                                                        |
|-----------|--------------------------------------------------------------------|
| `default` | Main content inside the accordion body (fallback to `description` prop). |
| `title`   | Custom content for the accordion header title (overrides `title` prop).  |
| `header`  | Fully customize the entire accordion header element.              |
| `button`  | Customize the toggle button element inside the header.            |
| `body`    | Customize the content inside the accordion body.                  |

---

## Usage Notes

- Use `modelValue` with `v-model` for two-way reactive control of the open/closed state.
- Classes props (`buttonClass`, `bodyClass`, etc.) accept strings, arrays, or objects as per Vue's `:class` binding.
- Inline styles in `bodyStyle` can be strings or objects.
- Horizontal mode (`horizontal` prop) changes collapse animation to horizontal width transition.
- Lazy loading of accordion content improves performance on large accordions.
- Use `wrapperAttrs` to pass attributes to the outer `BAccordion` component.

---

Notes
When using v-model, ensure the value (true or false) reflects the open/close state of the accordion.
If both visible and modelValue are provided, modelValue takes precedence.
If only description is passed, its content will be displayed in the accordion body. If a default slot is used, the description will be ignored.
For full control over the component's appearance, use props like buttonClass, bodyClass, collapseClass, customClass, and headerClass.
bodyStyle is useful for applying custom styles such as padding, background, or borders to the accordion body.
Use the horizontal prop to display the accordion horizontally instead of vertically — useful for sidebar layouts or horizontal content structures.
The lazy prop is helpful for loading heavy or expensive content only when needed, improving performance.
When lazy is enabled and unmountLazy is set to true, the accordion content will be fully removed from the DOM when collapsed.
Slots provide flexibility for customizing various parts of the accordion — for example, the header slot allows full override of the header section.
With wrapperAttrs, you can pass arbitrary attributes (such as data-*, classes, etc.) directly to the root BAccordion without needing to modify the source.


## Example

```vue
  <custom-accordion
      id="myAccordion"
      title="Click Me"
      :visible="true"
      custom-class="my-accordion-item"
      body-class="p-3 bg-light"
      :body-style="{ border: '1px solid #ccc' }"
      header-tag="h3"
  >
    <template #body>
      <p>This is the accordion content with custom slot.</p>
    </template>
