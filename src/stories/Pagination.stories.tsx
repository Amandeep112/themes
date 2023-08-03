import React from "react";
import { Pagination } from "../components/index";

export default {
    title: "Pagination",
    component: Pagination,
    parameters: {
        docs: {
            description: {
                component:
                    "The Pagination component allows you to display active page and navigate between multiple pages.",
            },
        },
    },
};

const Template = (args) => <Pagination {...args} />;

export const DefPagination = Template.bind({});
DefPagination.args = {
    colorScheme: "primary",
    variant: "solid",
    size: "small",
    pageSize: 3,
    currentPage: 0,
    totalPages: 20,
};

DefPagination.argTypes = {
    firstIcon: {
        control: {
            type: "",
        },
    },
    lastIcon: {
        control: {
            type: "",
        },
    },
    prevIcon: {
        control: {
            type: "",
        },
    },
    nextIcon: {
        control: {
            type: "",
        },
    },
    as: {
        control: {
            type: "",
        },
    },
};
