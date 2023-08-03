import React from "react";

import { Switch } from "../components/index";

export default {
    title: "Switch",
    component: Switch,
    parameters: {
        docs: {
            description: {
                component:
                    "The Switch component is used as an alternative for the Checkbox component. You can switch between enabled or disabled states.",
            },
        },
    },
};

const Template = (args) => <Switch {...args} />;

export const DefSwitch = Template.bind({});
DefSwitch.args = {
    variant: "solid",
    size: "md",
    borderRadius: "20px",
    defaultToggled: false,
    direction: "rtl",
    spaceBetween: "5px",
    colorScheme: "primary",
};
