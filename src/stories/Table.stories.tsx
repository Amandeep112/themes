import React from "react";
import { Table } from "../components/index";
import { TableRow } from "../components/index";
import { TableCell } from "../components/index";
import { Text } from "../components/index";

export default {
    title: "Table",
    component: Table,
    parameters: {
        docs: {
            description: {
                component:
                    "Tables are used to display tabular data using rows and columns. They allow users to quickly scan, sort, compare, and take action on large amounts of data.",
            },
        },
    },
    // subcomponents: { TableRow, TableCell, Text },
};

const Template = (args) => (
    <Table
        {...args}
        style={{ marginBottom: 50 }}
        header={
            <TableRow>
                <TableCell verticalAlign="middle" textAlign="right" as="th">
                    <Text>Desert</Text>
                </TableCell>
                <TableCell verticalAlign="middle" as="th">
                    <Text>Calories</Text>
                </TableCell>
                <TableCell verticalAlign="middle" as="th">
                    <Text>Fat(g)</Text>
                </TableCell>
                <TableCell verticalAlign="middle" as="th">
                    <Text>Protien(g)</Text>
                </TableCell>
            </TableRow>
        }
        body={
            <>
                <TableRow>
                    <TableCell verticalAlign="middle" as="td">
                        <Text> Frozen Yoghurt</Text>
                    </TableCell>
                    <TableCell verticalAlign="middle" as="td">
                        <Text>156</Text>
                    </TableCell>
                    <TableCell verticalAlign="middle" as="td">
                        <Text> 24 </Text>
                    </TableCell>
                    <TableCell verticalAlign="middle" as="td">
                        <Text>4</Text>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell verticalAlign="middle" as="td">
                        <Text>Ice Cream</Text>
                    </TableCell>
                    <TableCell verticalAlign="middle" as="td">
                        <Text> 237 </Text>
                    </TableCell>
                    <TableCell verticalAlign="middle" as="td">
                        <Text> 37 </Text>
                    </TableCell>
                    <TableCell verticalAlign="middle" as="td">
                        <Text> 4.3 </Text>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell verticalAlign="middle" as="td">
                        <Text>Cake</Text>
                    </TableCell>
                    <TableCell verticalAlign="middle" as="td">
                        <Text> 237 </Text>
                    </TableCell>
                    <TableCell verticalAlign="middle" as="td">
                        <Text> 37 </Text>
                    </TableCell>
                    <TableCell verticalAlign="middle" as="td">
                        <Text> 4.3 </Text>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell verticalAlign="middle" as="td">
                        <Text>Juice</Text>
                    </TableCell>
                    <TableCell verticalAlign="middle" as="td">
                        <Text> 120 </Text>
                    </TableCell>
                    <TableCell verticalAlign="middle" as="td">
                        <Text> 37 </Text>
                    </TableCell>
                    <TableCell verticalAlign="middle" as="td">
                        <Text> 4.3 </Text>
                    </TableCell>
                </TableRow>
            </>
        }
    />
);

export const DefTable = Template.bind({});
DefTable.args = {
    id: "Table",
    "aria-label": "mainTable",
    className: "parentTableClass",
    maxHeight: "100px",
    variant: "bordered",
    size: "lg",
};
