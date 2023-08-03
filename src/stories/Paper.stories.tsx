import React from "react";
import { Paper } from "../components/index";

export default {
    title: "Paper",
    component: Paper,
    parameters: {
        docs: {
            description: {
                component:
                    "Paper component is used to create a flat and opaque layout.",
            },
        },
    },
};

const Template = (args) => (
    <Paper style={{ padding: "10px" }} {...args}>
        {
            "While this link may answer the question, it is better to include the essential parts of the answer here and provide the link for reference. Link-only answers can become invalid if the linked page changes."
        }
    </Paper>
);

export const DefPaper = Template.bind({});
DefPaper.args = {
    variant: "outline",
    colorScheme: "primary",
    elevation: false,
};

DefPaper.argTypes = {
    as: {
        control: {
            type: "",
        },
    },
};
