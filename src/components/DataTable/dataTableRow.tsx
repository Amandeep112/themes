import React from "react";
import { cx as classNames } from "@emotion/css";
import styled from "@emotion/styled";
import { PropTypes } from "../../utils/propType";
import { Flex, FlexPropType } from "../Flex";
import { Theme } from "src/context/ThemeProvider";
import { DataTableContext } from "./dataTableContext";

interface DataTableRowPropType extends Omit<FlexPropType, "ref"> {
    /**
     * To provide unique ID
     * @property {string}
     */
    id?: string;
}

/**
 * @function StyledDataTableRowProps
 * This function that takes all props  and theme(passed by the emotion itself) as a argument returns object of its types
 */
type StyledDataTableRowProps = {
    overrideStyle?: PropTypes["style"];
    theme?: Theme;
    type?: "striped" | "bordered";
} & Partial<DataTableRowPropType>;

/**
 * @function EmotionDataTableRow
 * This function is used to wrap the Inner Item for style
 */
export const EmotionDataTableRow = styled(Flex)(
    ({ overrideStyle, theme, type }: StyledDataTableRowProps) => {
        return {
            flex: 1,
            color: theme.palette.paper.text,
            border: theme.palette.paper.border,
            borderBottom: 0,
            "&:last-of-type": {
                borderBottom: theme.palette.paper.border,
            },
            ...(type === "striped" && {
                "&:nth-child(odd)": {
                    backgroundColor: theme.palette.paper.background,
                },
                "&:nth-child(even)": {
                    backgroundColor: theme.palette.common.transparent,
                },
            }),

            ...overrideStyle,
        };
    },
);

export const DataTableRow = React.forwardRef<
    HTMLDivElement,
    React.PropsWithChildren<DataTableRowPropType>
>(({ id, style, children, className, ...props }, ref) => {
    const tableValues = React.useContext(DataTableContext);
    return (
        <EmotionDataTableRow
            id={id}
            ref={ref}
            flexWrap="nowrap"
            type={tableValues.type}
            justifyContent={"flex-start"}
            overrideStyle={style}
            className={classNames(className)}
            {...props}
        >
            {children}
        </EmotionDataTableRow>
    );
});

export default DataTableRow;
