import React from "react";

import { Tab } from "../components/index";
import { TabPanel } from "../components/index";
import { TabItem } from "../components/index";
import { TabList } from "../components/index";
import { Text } from "../components/index";

export default {
    title: "Tab",
    component: Tab,
    parameters: {
        docs: {
            description: {
                component:
                    "Tabs make it easy to explore and switch between different views.Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy.",
            },
        },
    },
    // subcomponents: { TabPanel, TabItem, TabList, Text },
};

const Template = (args) => (
    <Tab {...args}>
        <TabList>
            <TabItem index={0}>Perceivable</TabItem>
            <TabItem index={1}>Operable</TabItem>
        </TabList>
        <TabPanel index={0} label={"tab1"}>
            <Text as={"p"} lineHeight="28px" fontSize="18px">
                Making content{" "}
                <strong>
                    <u>perceivable</u>
                </strong>{" "}
                means making the output available to the user's senses, namely
                sight, sound, and touch (in the case of people who use Braille
                output devices). We won't worry about tasting or smelling web
                pages!
            </Text>
        </TabPanel>
        <TabPanel index={1} label={"tab2"}>
            <Text as={"p"} lineHeight="28px" fontSize="18px">
                Making content{" "}
                <strong>
                    <u>operable</u>
                </strong>{" "}
                means making the input mechanisms robust enough to accept a wide
                range of devices and methods, including keyboard, mouse, touch,
                gestures, single-switch devices, and so on.
            </Text>
        </TabPanel>
    </Tab>
);

export const DefTab = Template.bind({});
DefTab.args = {
    id: "tab_component",
    variant: "solid",
    colorScheme: "primary",
    vertical: false,
    isResponsive: false,
    selected: 0,
};
