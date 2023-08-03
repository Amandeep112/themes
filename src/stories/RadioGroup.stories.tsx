import React from "react";
import { RadioGroup } from "../components/index";
import { Radio } from "../components/index";

export default {
    title: "RadioGroup",
    component: RadioGroup,
    // subcomponents: { Radio },
    parameters: {
        docs: {
            description: {
                component:
                    "The Radio Group allows the user to select one option from a set.",
            },
        },
    },
};

const Template = (args) => (
    <RadioGroup {...args}>
        <Radio
            name="test"
            id="1"
            value="Radio1"
            title="Radio"
            style={{ marginRight: 10 }}
        />
        <Radio
            name="test"
            id="2"
            value="Radio2"
            title="Radio"
            style={{ marginRight: 10 }}
        />
        <Radio
            name="test"
            id="3"
            value="Radio3"
            title="Radio"
            style={{ marginRight: 10 }}
        />
        <Radio
            name="test"
            id="4"
            value="Radio4"
            title="Radio"
            style={{ marginRiht: 10 }}
        />
    </RadioGroup>
);

export const DefRadioGroup = Template.bind({});
DefRadioGroup.args = {
    variant: "outline",
    colorScheme: "primary",
    vertical: false,
};
