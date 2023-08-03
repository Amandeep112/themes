import React from "react";
import { Button } from "../components/index";
import { ButtonGroup } from "../components/index";

export default {
    title: "ButtonGroup",
    component: ButtonGroup,
    parameters: {
        docs: {
            description: {
                component:
                    "If you need to make a group of buttons you can use the compound component ButtonGroup and inside the buttons you want to group.",
            },
        },
    },
};

const Template = (args) => (
    <ButtonGroup {...args}>
        <Button colorScheme="primary" onClick={() => alert("Button 1 Clicked")}>
            Button 1
        </Button>
        <Button colorScheme="primary" onClick={() => alert("Button 2 Clicked")}>
            Button 2
        </Button>
        <Button colorScheme="primary" onClick={() => alert("Button 3 Clicked")}>
            Button 3
        </Button>
    </ButtonGroup>
);

export const DefButtonGroup = Template.bind({});
DefButtonGroup.args = {
    id: "buttongroup",
    variant: "solid",
    colorScheme: "primary",
    borderRadius: 4,
    vertical: false,
};
