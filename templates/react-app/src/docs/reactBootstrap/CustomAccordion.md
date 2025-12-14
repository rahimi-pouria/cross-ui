# CustomAccordion – React-Bootstrap Version

## Description
The **CustomAccordion** component is a wrapper around React-Bootstrap's `Accordion`.  
It provides a simple way to display **collapsible sections** with a title and description.  
You can control the open/close state, default expanded panel, and whether multiple panels can stay open.

---

## Props

| Prop               | Type                 | Default | Description                                                                 |
|--------------------|----------------------|---------|-----------------------------------------------------------------------------|
| `title`            | `string`             | `''`    | The title displayed in the accordion header.                                |
| `description`      | `string`             | `''`    | The content/body displayed when the accordion is expanded.                  |
| `eventKey`         | `string \| number`   | `'0'`   | A unique key for the accordion item. Used to control expand/collapse state. |
| `defaultActiveKey` | `string \| number`   | `'0'`   | Defines which accordion item should be open by default.                     |
| `alwaysOpen`       | `boolean`            | `false` | If true, allows multiple accordion items to stay open simultaneously.       |

---

## Example Usage

```tsx

  <CustomAccordion
        title="Accordion Item 1"
        description="This is the first accordion content."
        eventKey="0"
        defaultActiveKey="0"
      />

      <CustomAccordion
        title="Accordion Item 2"
        description="This is the second accordion content."
        eventKey="1"
        alwaysOpen={true}
      />
