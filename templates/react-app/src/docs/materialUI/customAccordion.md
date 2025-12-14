# CustomAccordion – Material UI Version

## Description
The **CustomAccordion** component is a fully customizable and controlled accordion built with **React** and **Material UI**.  
It allows external control of the expanded state and supports custom CSS classes for styling each part of the accordion.  
You can pass `children` to render custom content or rely on the `description` prop for default content.

---

## Props

| Prop Name                       | Type                                                                 | Description                                                                                     | Required |
|---------------------------------|----------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|----------|
| `id`                             | `string`                                                              | Unique ID for the AccordionSummary.                                                            | ✅       |
| `title`                          | `string`                                                              | The title displayed in the AccordionSummary.                                                   | ✅       |
| `description`                    | `string`                                                              | Default content shown in AccordionDetails if `children` is not provided.                       | ✅       |
| `expanded`                       | `boolean`                                                             | Controls whether the accordion is expanded (`true`) or collapsed (`false`).                     | ✅       |
| `ariaControls`                   | `string`                                                              | ARIA attribute linking AccordionSummary to AccordionDetails for accessibility.                 | ✅       |
| `namePanel`                      | `string`                                                              | Identifier used for controlling which panel is expanded.                                       | ✅       |
| `customClassAccordionSummary`    | `string`                                                              | Custom CSS class applied to the AccordionSummary.                                              | ❌       |
| `customClassTypography`          | `string`                                                              | Custom CSS class applied to the Typography inside AccordionSummary.                             | ❌       |
| `customClassAccordionDetail`     | `string`                                                              | Custom CSS class applied to AccordionDetails.                                                  | ❌       |
| `children`                       | `React.ReactNode`                                                     | Custom content to render inside AccordionDetails. Overrides `description` if provided.        | ❌       |
| `onChange`                       | `(event: React.SyntheticEvent, isExpanded: boolean) => void`          | Callback function triggered when the accordion is expanded or collapsed.                       | ✅       |

---

## Usage Example

```tsx
import * as React from "react";
import CustomAccordion from "@/components/materialUI/CustomAccordion";

const Example = () => {
    const [expanded, setExpanded] = React.useState(false);

    const accordionData = [
        { id: 1, title: "General settings 1", ariaControls: "panel1bh-content", name: "panel1", content: <p>pouria</p> },
        { id: 2, title: "General settings 2", ariaControls: "panel2bh-content", name: "panel2", content: <p>arvin</p> },
        { id: 3, title: "General settings 3", ariaControls: "panel3bh-content", name: "panel3", content: <p>saman</p> },
        { id: 4, title: "General settings 4", ariaControls: "panel4bh-content", name: "panel4", content: <p>amir</p> }
    ];

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            {accordionData.map((item) => (
                <CustomAccordion title={item.title} key={item.id}  ariaControls={item.ariaControls} description={item.description}
                                 namePanel={item.name} expanded={expanded === item.name} id={''}
                                 onChange={handleChange(item.name)}
                >
                    <div className="d-flex">
                        {item.name === 'panel1' ? <p>pouria</p> : item.name === 'panel2' ? <p>arvin</p> :
                            item.name === 'panel3' ? <p>saman</p>  :  item.name === 'panel4' ? <p>amir</p> : null
                        }

                    </div>
                </CustomAccordion>
                ))}
        </>
    );
};

export default Example;
