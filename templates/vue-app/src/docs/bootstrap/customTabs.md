# CustomTabs – Vue 3 + BootstrapVueNext

## Description

A flexible tab component built using **Vue 3** and **BootstrapVueNext (`BTabs` & `BTab`)**.  
Allows dynamic tab generation, slot-based content, and custom styling for tab headers.  
Supports card-style tabs with descriptions for each tab.

- Fully reactive `v-model` for active tab.
- Dynamic generation from `tabList` prop.
- Supports slot content for each tab.
- Customizable tab header and link classes.

---

## Props

| Prop Name          | Type       | Required | Default | Description                                                                 |
|-------------------|------------|----------|---------|-----------------------------------------------------------------------------|
| `tabList`          | `Array`    | ✅ Yes   | `[]`    | Array of tab objects. Each object can include `title`, `description`, `disabled`, `lazy`, etc. |
| `contentClass`     | `String`   | No       | `''`    | Class applied to the content wrapper of the tabs.                            |

### Tab Object Structure

| Field              | Type      | Default | Description                                                                 |
|-------------------|----------|---------|-----------------------------------------------------------------------------|
| `title`           | `String`  | `''`    | The title text of the tab.                                                  |
| `description`     | `String`  | `''`    | Optional description shown inside the tab content.                          |
| `disabled`        | `Boolean` | `false` | Disables the tab if `true`.                                                 |
| `lazy`            | `Boolean` | `false` | Lazily render the tab content when activated.                                |
| `noBody`          | `Boolean` | `false` | Hides the default body wrapper if `true`.                                   |
| `id`              | `String`  | `''`    | Optional HTML id for the tab.                                               |
| `titleItemClass`  | `String`  | `''`    | Additional class for the tab header item.                                   |
| `titleLinkClass`  | `String`  | `''`    | Additional class for the tab link element.                                  |

---

## Events

| Event             | Description                                           |
|------------------|-------------------------------------------------------|
| `update:modelValue` | Emits the active tab index whenever it changes.     |

---

## Example Usage

```vue
  <custom-tabs :tab-list="tabs" content-class="my-tabs-content" v-model="activeTab">
    <template #tab-0>
      <p>Content for the first tab</p>
    </template>
    <template #tab-1>
      <p>Content for the second tab</p>
    </template>
  </custom-tabs>

const tabs = [
  { title: 'Tab 1', description: 'This is the first tab' },
  { title: 'Tab 2', description: 'This is the second tab', disabled: false },
]
