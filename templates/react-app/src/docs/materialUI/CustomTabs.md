# CustomTabs – Material UI Version

## Description
The **CustomTabs** component is a fully customizable tab interface built with **React** and **Material UI Lab** components (`TabContext`, `TabList`, `TabPanel`).  
It allows dynamic tab headers and corresponding content. You can pass either plain text (`description`) or custom React nodes (`content`) for each tab panel.

---

## Props

| Prop Name       | Type                                                                 | Description                                                                                     | Required |
|-----------------|----------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|----------|
| `idTab`         | `string`                                                              | Unique ID for the entire tab component.                                                        | ✅       |
| `itemTab`       | `{ headerTab: {id: string, title: string}[], body: {id: string, description: string, content: React.ReactNode}[] }` | Object containing the headers and corresponding body content for tabs.                         | ✅       |
| `children`      | `React.ReactNode`                                                     | Optional custom children to render inside the tabs component.                                   | ❌       |

**`itemTab` structure example:**

```ts
const itemTab = {
    headerTab: [
        { id: "tab1", title: "Home" },
        { id: "tab2", title: "Profile" },
        { id: "tab3", title: "Settings" }
    ],
    body: [
        { id: "tab1", description: "Welcome to the Home tab!", content: <p>Home content here</p> },
        { id: "tab2", description: "Profile information displayed here." },
        { id: "tab3", description: "Settings options displayed here." }
    ]
};
