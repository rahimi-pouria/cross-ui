# CustomTabs – Element Plus Version

## Description
The **CustomTabs** component provides a flexible tab navigation interface built on top of **Element Plus**.  
It supports custom icons for each tab, dynamic tab titles, and customizable content per tab using slots.

---

## Props

| Prop                       | Type                        | Default    | Description                                                                 |
|----------------------------|-----------------------------|------------|-----------------------------------------------------------------------------|
| `tabs`                     | `TabItem[]`                 | `[]`       | Array of tab items to display. Each tab can have a title, description, and optional icon. |
| `type`                     | `'card' \| 'border-card' \| 'line'` | `'line'` | The style type of the tabs, following Element Plus options.                 |
| `customClassTitleTabs`     | `string`                    | `''`       | Custom class for the tab title text.                                        |
| `customClassDescriptionTabs` | `string`                  | `''`       | Custom class for the tab content/description container.                     |

---

## Slots

| Slot Name           | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `customDataTabs`    | Slot to provide custom content for each tab instead of using the default description text. |

---

## Types

```ts
export type TabItem = {
  id: number
  title: string
  description: string
  icon?: any // Vue component or Element Plus icon
}

<CustomTabs
  :tabs="[
    { id: 1, title: 'Dashboard', description: 'Overview of all metrics', icon: DashboardIcon },
    { id: 2, title: 'Profile', description: 'User information and settings', icon: UserIcon },
    { id: 3, title: 'Messages', description: 'Check your messages', icon: MessageIcon }
  ]"
  type="card"
  customClassTitleTabs="my-tab-title"
  customClassDescriptionTabs="my-tab-content"
/>

