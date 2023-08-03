import React from "react";
import { Tag } from "../components/index";
import { ArrowLeft } from "react-feather";

export default {
    title: "Tag",
    component: Tag,
    parameters: {
        docs: {
            description: {
                component:
                    "Tag component is used for items that need to be labeled, categorized, or organized using keywords that describe them.",
            },
        },
    },
};

const Template = (args) => <Tag {...args}>Contained</Tag>;

export const DefTag = Template.bind({});
DefTag.args = {
    variant: "contained",
    colorScheme: "primary",
    borderRadius: "20px",
    size: "md",
    id: "tag_component",
};

DefTag.argTypes = {
    closeIcon: {
        control: {
            type: "",
        },
    },
    endIcon: {
        control: {
            type: "",
        },
    },
    startIcon: {
        control: {
            type: "",
        },
    },
};
