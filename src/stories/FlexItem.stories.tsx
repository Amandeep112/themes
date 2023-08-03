import React from "react";

import { FlexItem } from "../components/index";
import { Text } from "../components/index";

export default {
    title: "FlexItem",
    component: FlexItem,
    parameters: {
        docs: {
            description: {
                component:
                    "A flex item describes the properties of the successor elements, moreover, there can be numerous flex items present inside a flex container.",
            },
        },
    },
    // subcomponents: { Text },
};

const Template = (args) => (
    <FlexItem {...args}>
        <Text textAlign="center">item-1</Text>
        <Text textAlign="center">item-2</Text>
        <Text textAlign="center">item-3</Text>
    </FlexItem>
);

export const DefFlexItem = Template.bind({});
DefFlexItem.args = {
    id: "flexitem",
    flexGrow: {
        xs: 1,
        sm: 1,
        md: 1,
        lg: 1,
        xl: 1,
        xxl: 1,
    },
    flexShrink: {
        xs: 0,
        sm: 0,
        md: 0,
        lg: 0,
        xl: 0,
        xxl: 0,
    },
    flexBasis: {
        xs: "auto",
        sm: "auto",
        md: "auto",
        lg: "auto",
        xl: "auto",
        xxl: "auto",
    },
    alignSelf: {
        xs: "flex-start",
        sm: "flex-start",
        md: "flex-start",
        lg: "flex-start",
        xl: "flex-start",
        xxl: "flex-start",
    },
};
