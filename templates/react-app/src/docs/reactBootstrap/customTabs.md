# CustomTabs – React Bootstrap Version

## Description
The **CustomTabs** component is a flexible and reusable tab system built with **React-Bootstrap**.  
It allows you to provide **custom content for each tab**. If no custom content is provided, the default `description` of the tab will be displayed.

---

## Props

| Prop                  | Type                                   | Description                                                                                 |
|-----------------------|---------------------------------------|---------------------------------------------------------------------------------------------|
| `id`                  | `string`                               | Unique ID for the `Tabs` component                                                         |
| `customClassTabs`      | `string` (optional)                   | Custom CSS class for the tab container                                                     |
| `customClassTabItem`   | `string` (optional)                   | Custom CSS class for each tab                                                              |
| `itemTabs`            | `Array<{id: string, title: string, description: string}>` | List of tabs including `id`, `title`, and default `description`                            |
| `children`            | `{ [key: string]: React.ReactNode }` (optional) | Custom content for each tab, keyed by tab `id`                                             |

---

## Usage Example

```tsx
import CustomTabs from "@/components/reactBootstrap/CustomTabs";

const HelloWorld = () => {
  const tabsList = [
    { id: "home", title: "Home", description: "This section relates to the main page." },
    { id: "profile", title: "Profile", description: "User information is displayed in this section." },
    { id: "contact", title: "Contact", description: "Use this section to contact us." },
  ];

  return (
    <div className="d-flex flex-column w-100">
      <CustomTabs id="example" itemTabs={tabsList} customClassTabs="my-tabs" customClassTabItem="">
        {{
          home: <p>📌 Custom content for the Home tab</p>,
          profile: <p> Custom content for the Profile tab</p>,
          contact: <p> Custom content for the Contact tab</p>,
        }}
      </CustomTabs>
    </div>
  );
};

export default HelloWorld;
