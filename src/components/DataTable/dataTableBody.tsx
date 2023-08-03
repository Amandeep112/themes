import React from "react";
import { cx as classNames } from "@emotion/css";
import styled from "@emotion/styled";
import { PropTypes } from "../../utils/propType";
import { Flex, FlexPropType } from "../Flex";

interface DataTableBodyPropType extends Omit<FlexPropType, "ref"> {
    /**
     * To provide unique ID
     * @property {string}
     */
    id?: string;
}

/**
 * @function StyledDataTableBodyProps
 * This function that takes all props (passed by the emotion itself) as a argument returns object of its types
 */
type StyledDataTableBodyProps = {
    overrideStyle?: PropTypes["style"];
} & Partial<DataTableBodyPropType>;

/**
 * @function EmotionDataTableBody
 * This function is used to wrap the Inner Item for style
 */
export const EmotionDataTableBody = styled(Flex)(
    ({ overrideStyle }: StyledDataTableBodyProps) => {
        return {
            ...overrideStyle,
        };
    },
);

export const DataTableBody = React.forwardRef<
    HTMLDivElement,
    React.PropsWithChildren<DataTableBodyPropType>
>(({ id, style, children, className, ...props }, ref) => {
    return (
        <EmotionDataTableBody
            flexDirection={"column"}
            // alignItems={"unset"}
            flexWrap="nowrap"
            id={id}
            ref={ref}
            overrideStyle={style}
            className={classNames(className)}
            {...props}
        >
            {children}
        </EmotionDataTableBody>
    );
});

export default DataTableBody;
