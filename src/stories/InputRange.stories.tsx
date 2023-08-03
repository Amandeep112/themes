import React from "react";
import { InputRange } from "../components/index";
export default {
    title: "InputRange",
    component: InputRange,
    parameters: {
        docs: {
            description: {
                component:
                    " The Input Range component can be used as an input field to get a number from the user based on your custom selection (ie. from 1 to 100) by using a sliding bar.",
            },
        },
    },
};
const Template = (args) => {
    const [range, setRange] = React.useState("");
    return (
        <InputRange
            value={range}
            onChange={(e) => setRange(e.target.value)}
            {...args}
        />
    );
};
export const DefInputRange = Template.bind({});

DefInputRange.argTypes = {
    icon: {
        control: {
            type: "",
        },
    },
    inputRangeLeftChildren: {
        control: {
            type: "",
        },
    },
    inputRangeRightChildren: {
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
