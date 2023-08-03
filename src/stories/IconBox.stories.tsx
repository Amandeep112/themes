import React from "react";
import { IconBox } from "../components/index";

export default {
    title: "IconBox",
    component: IconBox,
    parameters: {
        docs: {
            description: {
                component: "Icon box renders an icon within in a button.",
            },
        },
    },
};

const Template = (args) => <IconBox {...args} />;

export const DefIconBox = Template.bind({});
DefIconBox.args = {
    id: "iconBox",
    placement: "top",
    borderRadius: 0,
    disable: false,
    colorScheme: "primary",
};

DefIconBox.argTypes = {
    icon: {
        control: {
            type: "",
        },
    },
};
