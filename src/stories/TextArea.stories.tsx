import React from "react";
import { TextArea } from "../components/index";

export default {
    title: "TextArea",
    component: TextArea,
    parameters: {
        docs: {
            description: {
                component:
                    "Textarea component is a multi-line Input which allows you to write large texts.",
            },
        },
    },
};

const Template = (args) => <TextArea {...args} />;

export const DefTextArea = Template.bind({});
DefTextArea.args = {
    id: "TextAreaComponent",
    ariaDescribedby: "TextArea description",
    borderRadius: 0,
    label: "",
    name: "",
    variant: "solid",
    isReadOnly: false,
    isRequired: false,
    disable: false,
    placeholder: "Description...",
    errorMessage: "",
    resize: "vertical",
    size: "md",
};
