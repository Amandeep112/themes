import React from "react";
import { cx as classNames } from "@emotion/css";
import styled from "@emotion/styled";
import { PropTypes } from "../../utils/propType";
import { FlexItem, FlexItemPropType } from "../FlexItem";

interface DataTableColumnPropType extends Omit<FlexItemPropType, "ref"> {
    /**
     * To provide unique ID
     * @property {string}
     */
    id?: string;
}

/**
 * @function StyledDataTableColumnProps
 * This function that takes all props (passed by the emotion itself) as a argument returns object of its types
 */
type StyledDataTableColumnProps = {
    overrideStyle?: PropTypes["style"];
} & Partial<DataTableColumnPropType>;

/**
 * @function EmotionDataTableColumn
 * This function is used to wrap the Inner Item for style
 */
export const EmotionDataTableColumn = styled(FlexItem)(
    ({ overrideStyle }: StyledDataTableColumnProps) => {
        return {
            padding: 10,
            wordBreak: "break-word",
            ...overrideStyle,
        };
    },
);

export const DataTableColumn = React.forwardRef<
    HTMLDivElement,
    React.PropsWithChildren<DataTableColumnPropType>
>(({ id, style, children, className, ...props }, ref) => {
    return (
        <EmotionDataTableColumn
            id={id}
            ref={ref}
            overrideStyle={style}
            className={classNames(className)}
            {...props}
        >
            {children}
        </EmotionDataTableColumn>
    );
});

export default DataTableColumn;
