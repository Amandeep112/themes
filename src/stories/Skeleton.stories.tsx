import React from "react";
import { Skeleton } from "../components/index";
export default {
    title: "Skeleton",
    component: Skeleton,
    parameters: {
        docs: {
            description: {
                component:
                    "Skeleton is used to display the loading state of some component.",
            },
        },
    },
};
const template = (args) => <Skeleton {...args} />;
export const DefSkeleton = template.bind({});
DefSkeleton.args = {
    id: "skeleton",
    speed: "0.8s",
    baseColor: "#eee",
    highlightColor: "#ddd",
    width: "100%",
    height: "10px",
    borderRadius: "3px",
    enableAnimation: true,
    noOfLines: 4.5,
    spaceBetween: 5,
};
