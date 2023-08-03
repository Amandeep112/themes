import React from "react";

import { Section } from "../components/index";
import { Text } from "../components/index";

export default {
    title: "Section",
    component: Section,
    parameters: {
        docs: {
            description: {
                component:
                    "The section Component is used to divide up a web page into standalone sections of related content.",
            },
        },
    },
};

const Template = (args) => (
    <Section {...args}>
        <Text as="h2" textAlign="left">
            Hello World!
        </Text>
    </Section>
);

export const DefSection = Template.bind({});
DefSection.args = {
    as: "section",
};
