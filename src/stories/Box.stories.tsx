import { Box, Text } from "../components/index";

export default {
    title: "Box",
    component: Box,
    parameters: {
        docs: {
            description: {
                component:
                    "The Box component serves as a wrapper component for most of the CSS utility needs.",
            },
        },
    },
};
const Template = (args) => (
    <Box {...args}>
        Dummy Text: Components enable the creation of advanced devices and
        gadgets that enhance our daily lives
    </Box>
);

export const DefBox = Template.bind({});
DefBox.args = {
    id: "Box",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "row",
};
