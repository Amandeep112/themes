import { Button } from "../components/index";

export default {
    title: "Button",
    component: Button,
    parameters: {
        docs: {
            description: {
                component:
                    "Buttons allow users to perform actions and choose with a single tap.",
            },
        },
    },
};

const Template = (args) => <Button {...args}>Welcome</Button>;

export const DefButton = Template.bind({});
DefButton.args = {
    colorScheme: "primary",
    variant: "solid",
    borderRadius: 20,
    size: "sm",
    alignItems: "center",
};

DefButton.argTypes = {
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
    endIcon: {
        control: {
            type: "",
        },
    },
    myRef: {
        control: {
            type: "",
        },
    },
};
