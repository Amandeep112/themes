import { ButtonDropdown } from "../components/index";
import { List } from "../components/index";
import { ListItem } from "../components/index";

import { ChevronUp, ChevronDown } from "react-feather";

export default {
    title: "ButtonDropdown",
    component: ButtonDropdown,
    subcomponents: { List, ListItem },
    parameters: {
        docs: {
            description: {
                component:
                    "Displays a list of actions or options that a user can choose.",
            },
        },
    },
};

const Template = (args) => (
    <ButtonDropdown {...args}>
        <List id="test">
            <ListItem id="testing" as="span">
                {"DropDown Item-1"}
            </ListItem>
            <ListItem id="testing" as="span">
                {"DropDown Item-2"}
            </ListItem>
            <ListItem id="testing" as="span">
                {"DropDown Item-3"}
            </ListItem>
        </List>
    </ButtonDropdown>
);

export const DefButtonDropdown = Template.bind({});
DefButtonDropdown.args = {
    variant: "solid" as const,
    label: "DropdownList",
    position: {
        vertical: "bottom",
        horizontal: "left",
    },
    elevation: true,
    // list: [],
    borderRadius: 0,
    toggleUp: <ChevronUp size={16} />,
    toggleDown: <ChevronDown size={16} />,
    showListOnClick: true,
    size: "sm",
};

DefButtonDropdown.argTypes = {
    startIcon: {
        control: {
            type: "",
        },
    },
    endIcon: {
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
