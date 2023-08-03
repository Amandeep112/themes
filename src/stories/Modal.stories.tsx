import React from "react";
import { Modal } from "../components/index";

export default {
    title: "Modal",
    component: Modal,
    parameters: {
        docs: {
            description: {
                component:
                    "Displays a dialog with a custom content that requires attention or provides additional information.",
            },
        },
    },
};

const template = (args) => <Modal {...args} />;
export const DefModal = template.bind({});
DefModal.parameters = {
    docs: {
        inlineStories: false,
        iframeHeight: 300,
    },
};

DefModal.args = {
    id: "modal",
    borderRadius: 3,
    elevation: false,
    position: "middle",
    zIndex: 9999,
    overlayColor: "rgba(0, 0, 0, 0.3)",
    hideBackdrop: true,
    backgroundColor: "",
    children: "Modal Component",
    size: "sm",
};
