import { Badge } from "../components/index";
import { Text } from "../components/index";
import { DefText } from "./Text.stories";

export default {
    title: "Badge",
    component: Badge,
    subcomponents: { Text },
    parameters: {
        docs: {
            description: {
                component:
                    "Badges are used as a small numerical value or status descriptor for UI elements.",
            },
        },
    },
};

const Template = (args) => (
    <Badge {...args}>
        <DefText {...DefText.args}>Solid Badge</DefText>
    </Badge>
);

// const Template = (args) => <Badge {...args}>Solid Badge</Badge>;

export const DefBadge = Template.bind({});
DefBadge.args = {
    show: true,
    borderRadius: 10,
    variant: "solid",
    content: "Tag",
    colorScheme: "primary",
    // children: <DefText {...DefText.args} />,
};
