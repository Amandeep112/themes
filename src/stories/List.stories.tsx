import React from "react";
import { List } from "../components/index";
import { ListItem } from "../components/index";

export default {
    title: "List",
    component: List,
    parameters: {
        docs: {
            description: {
                component: "List is used to display list items.",
            },
        },
    },
    // subcomponents: { ListItem },
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

const res = (args) => {
    return items.map((item) => (
        <List {...args} key={`key${item.id}`}>
            <ListItem id="testing" as="span">
                {item.Testname}
            </ListItem>
        </List>
    ));
};

const Template = (args) => {
    return res(args);
};

export const DefList = Template.bind({});
DefList.args = {
    scrollable: false,
    maxHeight: "400px",
};
