import React from "react";
import { Loader } from "../components/index";

export default {
    title: "Loader",
    component: Loader,
    parameters: {
        docs: {
            description: {
                component:
                    "Loaders express an unspecified wait time or display the length of a process.",
            },
        },
    },
};

const template = (args) => <Loader loaderIcon="/loader.svg" {...args} />;

export const DefLoader = template.bind({});
DefLoader.args = {
    id: "loader",
    zIndex: 999,
    position: "absolute",
    overlayColor: "rgb(255 255 255 / 40%)",
};

DefLoader.argTypes = {
    as: {
        control: {
            type: "",
        },
    },
};
