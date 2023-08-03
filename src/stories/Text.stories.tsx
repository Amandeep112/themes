import { Text } from "../components/index";

export default {
    title: "Text",
    component: Text,
    parameters: {
        docs: {
            description: {
                component:
                    "Text component is the used to render text and paragraphs within an interface using well-defined typographic styles.",
            },
        },
    },
};

const Template = (args) => (
    <Text {...args}>
        Dummy Text: Components enable the creation of advanced devices and
        gadgets that enhance our daily lives
    </Text>
);

export const DefText = Template.bind({});
DefText.args = {
    id: "text",
    textAlign: "left",
    noWrap: false,
    isTruncate: false,
    lineClamp: undefined,
    as: "div",
    lineHeight: "normal",
};
