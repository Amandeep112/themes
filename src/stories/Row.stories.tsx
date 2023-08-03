import { Row } from "../components/index";
import { Col } from "../components/index";
import { Card } from "../components/index";
import { Text } from "../components/index";

export default {
    title: "Row",
    component: Row,
    parameters: {
        docs: {
            description: {
                component:
                    "Row Component provides a way to represent a row in the grid system. It is used when we want to display data in the form of rows.",
            },
        },
    },
};

const Template = (args) => (
    <Row
        backgroundColor="red"
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
        {/* <Col xs={12} md={6} sm={6} lg={4} style={{ margin: "10px 0px" }}>
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
                    Title3
                </Text>
                <Text
                    as="div"
                    style={{
                        marginLeft: 15,
                        color: "#222",
                    }}
                >
                    One or two sentence description that may go to several
                    lines. One or two sentence description that may go to
                    several lines. Contrary to popular belief, Lorem Ipsum is
                    not simply random text.
                </Text>
            </Card>
        </Col> */}
    </Row>
);

export const DefRow = Template.bind({});
DefRow.args = {
    id: "row_component",
    justifyContent: "flex-start",
    alignItems: "center",
    reverse: false,
    backgroundColor: "unset",
    colorScheme: "primary",
    borderRadius: 0,
};
