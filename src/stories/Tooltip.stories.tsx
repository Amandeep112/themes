import React from "react";
import { Tooltip } from "../components/index";
import { Button } from "../components/index";

export default {
    title: "Tooltip",
    component: Tooltip,
    subcomponents: { Button },
    parameters: {
        docs: {
            description: {
                component:
                    "Tooltips displays informative text when users hover, focus, or click an element.",
            },
        },
    },
};

const Template = (args) => (
    <Tooltip {...args}>
        <Button
            variant="solid"
            size="lg"
            style={{ borderRadius: 4, display: "inline-flex" }}
        >
            Top End
        </Button>
    </Tooltip>
);

export const DefTooltip = Template.bind({});
DefTooltip.args = {
    colorScheme: "primary",
    size: "md",
    placement: "bottom",
    label: "Welcome",
    show: false,
};
