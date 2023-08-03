import { Col } from "../components/index";
import { Card } from "../components/index";
import { Text } from "../components/index";

export default {
    title: "Col",
    component: Col,
    parameters: {
        docs: {
            description: {
                component:
                    "It provides a way to represent a column in the grid system. It is used when we want to display data in the form of columns.",
            },
        },
    },
    // subcomponents: { Card, Text },
};

const Template = (args) => (
    <Col {...args}>
        <Card
            variant="outline"
            colorScheme="primary"
            justifyContent="space-evenly"
            style={{
                height: 250,
                borderRadius: 5,
                paddingTop: 10,
                paddingBottom: 10,
                overflow: "hidden",
                backgroundColor: "#8bb5ef",
            }}
            border={true}
        >
            <Text as="h1" style={{ marginLeft: 15, color: "#222" }}>
                Component
            </Text>
            <Text as="div" style={{ marginLeft: 15, color: "#222" }}>
                Dummy Text: Components enable the creation of advanced devices
                and gadgets that enhance our daily lives.
            </Text>
        </Card>
    </Col>
);

export const DefCol = Template.bind({});
DefCol.args = {
    id: "col",
    xs: 0,
    sm: 0,
    md: 0,
    lg: 0,
    xsOffset: 0,
    smOffset: 0,
    mdOffset: 0,
    lgOffset: 0,
    textAlign: "center",
};
