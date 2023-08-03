import React from "react";
import { Grid } from "../components/index";
import { GridItem } from "../components/index";
import { Text } from "../components/index";

export default {
    title: "Grid",
    component: Grid,
    parameters: {
        docs: {
            description: {
                component: "Grid is a layout for managing grid layouts.",
            },
        },
    },
};

const Template = (args) => (
    <Grid {...args}>
        <GridItem>
            <Text textAlign="center"> item-1 </Text>
        </GridItem>

        <GridItem>
            <Text textAlign="center">item-2</Text>
        </GridItem>

        <GridItem>
            <Text textAlign="center">item-3</Text>
        </GridItem>

        <GridItem>
            <Text textAlign="center">item-4</Text>
        </GridItem>
    </Grid>
);

export const DefGrid = Template.bind({});
DefGrid.args = {
    id: "Grid",
    gap: 5,
};
