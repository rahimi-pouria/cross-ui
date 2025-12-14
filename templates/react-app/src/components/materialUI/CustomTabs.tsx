import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { CustomTabsProps } from "@/props/materialUI/customTabs";

const CustomTabs = (props: CustomTabsProps) => {
    const firstId = props.itemTab.headerTab[0]?.id || "";
    const [value, setValue] = React.useState(firstId);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange}>
                        {props.itemTab.headerTab.map(item => (
                            <Tab key={item.id} label={item.title} value={item.id} />
                        ))}
                    </TabList>
                </Box>
                {props.itemTab.body.map(item => (
                    <TabPanel key={item.id} value={item.id}>
                        {item.content ? item.content : item.description}
                    </TabPanel>
                ))}
            </TabContext>
        </Box>
    );
};

export default CustomTabs;
