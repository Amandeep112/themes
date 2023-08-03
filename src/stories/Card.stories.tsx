import React from "react";
import { Card } from "../components/index";
import { Flex } from "../components/index";
import { Text } from "../components/index";
import { Button } from "../components/index";
import { Divider } from "../components/index";
import type { Meta, StoryObj } from "@storybook/react";
import flower1 from "../../public/flower1.jpg";

const meta: Meta<typeof Card> = {
    title: "Card",
    component: Card,
    parameters: {
        docs: {
            description: {
                component:
                    "Card is a container for text, photos, and actions in the context of a single subject.",
            },
        },
    },
    // subcomponents: { Text, Flex, Button, Divider },
};
export default meta;
type Story = StoryObj<typeof Card>;
export const defCard: Story = {
    render: () => (
        <Card
            // variant="solid"
            justifyContent="space-between"
            style={{
                width: 280,
                minHeight: 425,
                // borderRadius: 5,
                paddingBottom: 10,
                overflow: "hidden",
                marginBottom: 20,
            }}
            className={"headerFooterCard"}
        >
            <div
                className="cardImgWrapper"
                style={{
                    width: "100%",
                    height: "220px",
                    overflow: "hidden",
                }}
            >
                <img
                    src="/flower1.jpg"
                    placeholder="Flower"
                    style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                    }}
                />
            </div>

            <Text as="p" fontSize="15px" style={{ margin: "15px 15px 15px" }}>
                Dahlia is a genus of bushy, tuberous, herbaceous perennial
                plants native to Mexico and Central America. The dahlia was
                declared the national flower of Mexico in 1963.
            </Text>

            <Divider
                variant="solid"
                orientation={"horizontal"}
                style={{
                    borderWidth: 1,
                    borderBottomColor: "#cecece",
                }}
            ></Divider>
            <footer>
                <Flex
                    justifyContent="space-between"
                    style={{
                        marginLeft: 15,
                        marginRight: 15,
                        marginBottom: 5,
                    }}
                >
                    <Button
                        colorScheme="primary"
                        variant="outline"
                        borderRadius={5}
                    >
                        Learn More
                    </Button>
                    <Button
                        variant="outline"
                        colorScheme="error"
                        borderRadius={5}
                    >
                        Close
                    </Button>
                </Flex>
            </footer>
        </Card>
    ),
};
// const Template = (args) => (
//     <Card
//         // variant="solid"
//         justifyContent="space-between"
//         style={{
//             width: 280,
//             minHeight: 425,
//             // borderRadius: 5,
//             paddingBottom: 10,
//             overflow: "hidden",
//             marginBottom: 20,
//         }}
//         className={"headerFooterCard"}
//         {...args}
//     >
//         <div
//             className="cardImgWrapper"
//             style={{
//                 width: "100%",
//                 height: "220px",
//                 overflow: "hidden",
//             }}
//         >
//             <img
//                 src={flower1}
//                 placeholder="Flower"
//                 style={{
//                     height: "100%",
//                     width: "100%",
//                     objectFit: "cover",
//                 }}
//             />
//         </div>

//         <Text as="p" fontSize="15px" style={{ margin: "15px 15px 15px" }}>
//             Dahlia is a genus of bushy, tuberous, herbaceous perennial plants
//             native to Mexico and Central America. The dahlia was declared the
//             national flower of Mexico in 1963.
//         </Text>

//         <Divider
//             variant="solid"
//             orientation={"horizontal"}
//             style={{
//                 borderWidth: 1,
//                 borderBottomColor: "#cecece",
//             }}
//         ></Divider>
//         <footer>
//             <Flex
//                 justifyContent="space-between"
//                 style={{
//                     marginLeft: 15,
//                     marginRight: 15,
//                     marginBottom: 5,
//                 }}
//             >
//                 <Button
//                     colorScheme="primary"
//                     variant="outline"
//                     borderRadius={5}
//                 >
//                     Learn More
//                 </Button>
//                 <Button variant="outline" colorScheme="error" borderRadius={5}>
//                     Close
//                 </Button>
//             </Flex>
//         </footer>
//     </Card>
// );

// export const DefCard = Template.bind({});
// DefCard.args = {
//     elevation: false,
//     vertical: false,
//     disable: false,
//     isHover: false,
//     border: false,
//     borderRadius: 0,
//     header: "",
//     footer: "",
// };
