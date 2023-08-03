import React from "react";
import { Input } from "../components/index";

export default {
    title: "Input",
    component: Input,
    parameters: {
        docs: {
            description: {
                component:
                    "Inputs fields are used to get the user input in a text field.",
            },
        },
    },
};

const Template = (args) => {
    const [inputValue, setInputValue] = React.useState("");

    return (
        <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            {...args}
        />
    );
};

export const DefInput = Template.bind({});
DefInput.args = {
    id: "input",
    variant: "outline",
    borderRadius: 4,
    isReadOnly: false,
    disable: false,
    name: "",
    errorMessage: "",
    size: "md",
    type: "text",
    colorScheme: "primary",
};

DefInput.argTypes = {
    icon: {
        control: {
            type: "",
        },
    },
    inputLeftChildren: {
        control: {
            type: "",
        },
    },
    inputRightChildren: {
        control: {
            type: "",
        },
    },
    label: {
        control: {
            type: "text",
        },
    },
    value: {
        control: {
            type: "text",
        },
    },
};
