import { Accordion } from "../components/index";
import { AccordionHeader } from "../components/index";
import { AccordionItem } from "../components/index";
import { AccordionPanel } from "../components/index";
import { Text } from "../components/index";

export default {
    title: "Accordion",
    component: Accordion,
    parameters: {
        docs: {
            description: {
                component:
                    "Accordion display a list of high-level options that can expand/collapse to reveal more information.",
            },
        },
    },
};

const Template = (args) => (
    <Accordion {...args}>
        <AccordionItem>
            <AccordionHeader>
                <Text>Accordion 1</Text>
            </AccordionHeader>

            <AccordionPanel>
                <Text style={{ padding: "10px 20px" }}>
                    Dummy Text: Display text in a collapsed, condensed manner,
                    letting you save space while still presenting an abundance
                    of content.
                </Text>
            </AccordionPanel>
        </AccordionItem>
    </Accordion>
);

export const DefAccordion = Template.bind({});
