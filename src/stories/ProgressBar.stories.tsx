import React from "react";
import { ProgressBar } from "../components/index";

export default {
    title: "ProgressBar",
    component: ProgressBar,
    parameters: {
        docs: {
            description: {
                component:
                    "The ProgressBar component allows you to view the progress of any activity.",
            },
        },
    },
};

const template = (args) => (
    <ProgressBar {...args} style={{ padding: "50px 10px" }} />
);
export const DefProressBar = template.bind({});
DefProressBar.args = {
    value: 70,
    showSteps: true,
    segments: [
        [1, "Step-1"],
        [2, "Step-2"],
        [3, "Step-3"],
    ],
    size: "md",
    primaryColor: "#eee",
    secondaryColor: "#1d78f3",
    label: "",
};
