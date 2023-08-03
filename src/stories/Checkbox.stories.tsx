import React from "react";
import { Checkbox } from "../components/index";

// import TickImage from "../../public/tick-checkbox.svg";

const image = {
    src: "/tick-checkbox.svg",
    alt: "Tick",
};

export default {
    title: "Checkbox",
    component: Checkbox,
    parameters: {
        docs: {
            description: {
                component:
                    "Checkboxes allow users to select multiple items from a list of individual items, or to mark one individual item as selected.",
            },
        },
    },
};

const Template = (args) => <Checkbox {...args} />;

export const DefCheckbox = Template.bind({});
DefCheckbox.args = {
    spaceBetween: "5px",
    error: false,
    variant: "outline",
    defaultChecked: false,
    colorScheme: "primary",
    direction: "rtl",
    borderRadius: 3,
    icon: image.src,
    size: "sm",
};
