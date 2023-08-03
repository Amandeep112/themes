import { ChevronDown } from "react-feather";

import { Select } from "../components/index";
import { SelectOptions } from "../components/index";

const plantType: { id: string; name: string }[] = [
    { id: "1", name: "Evergreen" },
    { id: "2", name: "Fruit" },
    { id: "3", name: "Vines" },
    { id: "4", name: "Tree" },
];

export default {
    title: "Select",
    component: Select,
    parameters: {
        docs: {
            description: {
                component:
                    "Select components are used for collecting user provided information from a list of options.",
            },
        },
    },
};

const Template = (args) => (
    <Select {...args}>
        {plantType.map((item) => (
            <SelectOptions value={item.name} key={`plant_type_${item.id}`}>
                {item.name}
            </SelectOptions>
        ))}
    </Select>
);

export const DefSelect = Template.bind({});
DefSelect.args = {
    placeholder: "Please Select",
    endIcon: <ChevronDown size={20} />,
    size: "md",
    colorScheme: "primary",
    label: "",
    variant: "solid",
};
DefSelect.argTypes = {
    as: {
        control: {
            type: "",
        },
    },
    startIcon: {
        control: {
            type: "",
        },
    },
};
