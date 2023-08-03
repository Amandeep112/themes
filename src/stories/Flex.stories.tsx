import React from "react";
import { Flex } from "../components/index";
import { FlexItem } from "../components/index";
import { Text } from "../components/index";

export default {
    title: "Flex",
    component: Flex,
    parameters: {
        docs: {
            description: {
                component:
                    "Flex is Box with display set to flex and comes with helpful style shorthand. It renders a `div` element.",
            },
        },
    },
    // subcomponents: { FlexItem, Text },
};

const Template = (args) => (
    <Flex {...args}>
        <FlexItem
            flexGrow={{ xs: 1, sm: 1, md: 2, lg: 2 }}
            style={{
                padding: "20px",
                marginRight: "15px",
            }}
        >
            <Text textAlign="center">item-1</Text>
        </FlexItem>
        <FlexItem
            flexGrow={{ xs: 1, sm: 1, md: 2, lg: 2 }}
            style={{
                padding: "20px",
                marginRight: "15px",
            }}
        >
            <Text textAlign="center">item-2</Text>
        </FlexItem>
        <FlexItem
            flexShrink={{ xs: 1, sm: 1, md: 3, lg: 3 }}
            style={{
                padding: "20px",
                marginRight: "15px",
            }}
        >
            <Text textAlign="center">item-3</Text>
        </FlexItem>
        <FlexItem
            flexGrow={{ xs: 1, sm: 1, md: 2, lg: 2 }}
            style={{
                padding: "20px",
            }}
        >
            <Text textAlign="center">item-4</Text>
        </FlexItem>
    </Flex>
);

export const DefFlex = Template.bind({});
DefFlex.args = {
    id: "Flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: {
        xs: "row",
        sm: "row",
        md: "row",
        lg: "row",
        xl: "row",
        xxl: "row",
    },
    flexWrap: `wrap`,
};
