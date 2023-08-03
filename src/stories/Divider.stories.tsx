import React from "react";
import { Divider } from "../components/index";

export default {
    title: "Divider",
    component: Divider,
    parameters: {
        docs: {
            description: {
                component:
                    "Dividers are used to visually separate content in a list or group.",
            },
        },
    },
};

const Template = (args) => <Divider {...args} />;

export const DefDivider = Template.bind({});
DefDivider.args = {
    variant: "solid",
    orientation: "horizontal",
    colorScheme: "primary",
    width: "100%",
    height: "initial",
    id: "divider_component",
    borderWidth: "2px",
    spaceBetween: "5px",
};
