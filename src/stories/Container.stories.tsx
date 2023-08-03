import { Container } from "../components/index";
import { Row } from "../components/index";
import { Card } from "../components/index";
import { Col } from "../components/index";
import { Text } from "../components/index";

export default {
    title: "Container",
    component: Container,
    parameters: {
        docs: {
            description: {
                component:
                    "A component for fixing an element's width to the current breakpoint.",
            },
        },
    },
    // subcomponents: { Card, Text, Row, Col },
};

// const Template = (args) => <Container {...args}>HELLO WORLD!</Container>;

const Template = (args) => (
    <Container {...args}>
        <Row
            backgroundColor="#fff"
            style={{ marginBottom: 20 }}
            className="rowClass"
        >
            <Col
                xs={12}
                md={6}
                sm={6}
                lg={4}
                style={{ margin: "10px 0px" }}
                className="colClass"
            >
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
                        Dummy Text: Components enable the creation of advanced
                        devices and gadgets that enhance our daily lives.
                    </Text>
                </Card>
            </Col>
            <Col
                xs={12}
                md={6}
                sm={6}
                lg={4}
                style={{ margin: "10px 0px" }}
                className="colClass"
            >
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
                        Dummy Text: Components enable the creation of advanced
                        devices and gadgets that enhance our daily lives.
                    </Text>
                </Card>
            </Col>
            <Col
                xs={12}
                md={6}
                sm={6}
                lg={4}
                style={{ margin: "10px 0px" }}
                className="colClass"
            >
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
                        Dummy Text: Components enable the creation of advanced
                        devices and gadgets that enhance our daily lives.
                    </Text>
                </Card>
            </Col>
        </Row>
    </Container>
);
export const DefContainer = Template.bind({});
DefContainer.args = {
    id: "container_component",
    size: "fluid",
};
