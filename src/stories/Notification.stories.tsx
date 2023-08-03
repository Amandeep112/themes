import { Notification } from "../components/index";
import { Text } from "../components/index";

export default {
    title: "Notification",
    component: Notification,
    parameters: {
        docs: {
            description: {
                component:
                    "Display's a horizontal alert bar to notify the user about any important information.",
            },
        },
    },
    // subcomponents: { Text },
};

const Template = (args) => (
    <Notification {...args}>
        Dummy Text: Components enable the creation of advanced devices and
        gadgets that enhance our daily lives
    </Notification>
);

export const DefNotification = Template.bind({});
DefNotification.args = {
    variant: "contained",
    justifyContent: "flex-start",
    alignItems: "center",
    colorScheme: "primary",
    borderRadius: 5,
    id: "notification_component",
};

DefNotification.argTypes = {
    closeIcon: {
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
};
