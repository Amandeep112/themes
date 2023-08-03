import React from "react";
import { ListItem } from "../components/index";

export default {
    title: "ListItem",
    component: ListItem,
    parameters: {
        docs: {
            description: {
                component:
                    "ListItems are a flexible and powerful component for displaying a series of list. ",
            },
        },
    },
};

const items = [
    { id: "1", Testname: "DropDown Item 1" },
    { id: "2", Testname: "DropDown Item 2" },
    { id: "3", Testname: "DropDown Item 3" },
    { id: "4", Testname: "DropDown Item 4" },
    { id: "5", Testname: "DropDown Item 5" },
    { id: "6", Testname: "DropDown Item 6" },
    { id: "7", Testname: "DropDown Item 7" },
    { id: "8", Testname: "DropDown Item 8" },
];

const data = items.map((item) => (
    <ListItem id="testing" as="span" key={`key${item.id}`}>
        {item.Testname}
    </ListItem>
));

const Template = (args) => {
    return data;
};

export const DefListItem = Template.bind({});
DefListItem.args = {
    justifyContent: "center",
    alignItems: "center",
    isSelected: false,
    tabIndex: 0,
};

DefListItem.argTypes = {
    as: {
        control: {
            type: "",
        },
    },
};
