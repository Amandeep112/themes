import React from "react";
import { cx as classNames } from "@emotion/css";
import styled from "@emotion/styled";
import { PropTypes } from "../../utils/propType";
import { Flex, FlexPropType } from "../Flex";
import { Theme } from "src/context/ThemeProvider";
import { DataTableContext } from "./dataTableContext";

interface DataTableHeaderPropType extends Omit<FlexPropType, "ref"> {
    /**
     * To provide unique ID
     * @property {string}
     */
    id?: string;
}

/**
 * @function StyledDataTableHeaderProps
 * This function that takes all props ,theme and colorScheme (passed by the emotion itself) as a argument returns object of its types
 */
type StyledDataTableHeaderProps = {
    overrideStyle?: PropTypes["style"];
    theme?: Theme;
    type?: "bordered" | "striped";
    colorScheme?: "primary" | "secondary" | "error" | "accent";
} & Partial<DataTableHeaderPropType>;

/**
 * @function getPropsByVariant - used to pass the color scheme, variant and the emotion theme to the component
 *
 **/
const getPropsByType = ({ type, colorScheme, theme }) => {
    const colorInPalette = theme.palette[colorScheme];

    const types = {
        bordered: colorInPalette && {
            main: {
                border: `1px solid ${colorInPalette.main}`,
                backgroundColor: theme.palette.common.transparent,
                color: theme.palette.paper.text,
            },
        },
        striped: colorInPalette && {
            main: {
                border: `1px solid ${colorInPalette.main}`,
                backgroundColor: colorInPalette.main,
                color: theme.palette.common.white,
            },
        },
    };

    return types[type] || types.bordered;
};

/**
 * @function EmotionDataTableHeader
 * This function is used to wrap the Inner Item for style
 */
export const EmotionDataTableHeader = styled(Flex, {
    shouldForwardProp: (props: string) => {
        return !["colorScheme", "type"].includes(props);
    },
})(
    ({
        overrideStyle,
        theme,
        colorScheme,
        type,
    }: StyledDataTableHeaderProps) => {
        const propsByType = getPropsByType({
            type,
            theme,
            colorScheme,
        });
        return {
            ...(propsByType && propsByType.main),
            ...overrideStyle,
        };
    },
);

export const DataTableHeader = React.forwardRef<
    HTMLDivElement,
    React.PropsWithChildren<DataTableHeaderPropType>
>(({ id, style, children, className, ...props }, ref) => {
    const tableValues = React.useContext(DataTableContext);
    return (
        <EmotionDataTableHeader
            id={id}
            overrideStyle={style}
            ref={ref}
            colorScheme={tableValues.colorScheme}
            type={tableValues.type}
            className={classNames(className)}
            {...props}
        >
            {children}
        </EmotionDataTableHeader>
    );
});

export default DataTableHeader;
