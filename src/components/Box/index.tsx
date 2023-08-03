import * as React from "react";
import { cx as classNames } from "@emotion/css";
import styled from "@emotion/styled";
import { PropTypes } from "../../utils/propType";
import { Property } from "../../utils/types";

/**
 * @interface
 */
interface BoxPropType
    extends Omit<PropTypes, "disable" | "as" | "colorScheme"> {
    /**
     * To add additional width of Box
     * @property {Property.Width}
     */
    width?: Property.Width;

    /**
     * To provide height to the Box
     * @property {Property.Height}
     */
    height?: Property.Height;

    /**
     * To create space around Box's content, inside of any defined borders.
     * @property {Property.Padding}
     */
    padding?: Property.Padding;

    /**
     * To provide a background color to the Box
     * @property {string}
     */

    backgroundColor?: string;

    /**
     * To fit the content in the Box by clipping or adding scrollbar
     * @property {Property.OverflowX | Property.OverflowY}
     */
    overflow?: Property.OverflowX | Property.OverflowY;

    /**
     * To rounds the corners of outer border of the Box
     * @property {string | number}
     */
    borderRadius?: string | number;

    /**
     * To set a width of border for the Box
     *@property {string}
     */
    borderWidth?: string;

    /**
     * To style the border(line) of the box
     * @property {string}
     */
    borderStyle?: string;

    /**
     * To provide diffrent colors to border of the box
     *  @property {string}
     */
    borderColor?: string;

    /**
     * To set fontsize of the content inside the Box
     * @property {string}
     */

    fontSize?: string;

    /**
     * To set the distance/height between the lines of text in the Box
     *  @property {string}
     */
    lineHeight?: string;

    /**
     * To specify the horizontal alignment of text in the Box
     * @property {Property.TextAlign}
     */
    textAlign?: Property.TextAlign;

    /**
     * Add custom text transformation properties
     * @property {Property.TextTransform}
     **/
    textTransform?: Property.TextTransform;

    /**
     * For text clipping - When using inside the flex, min-width should be define within the element
     * @property {boolean}
     *
     **/
    isTruncate?: boolean;

    /**
     * To change the display view of element
     * @property {boolean}
     *
     **/
    display?: Property.DisplayInside;

    /**
     * Alignment of items in specific direction(eg. left , right , center)
     * @property {Property.AlignItem}
     *
     **/
    alignItems?: Property.AlignItem;

    /**
     * To distribute extra  space leftover in the cross axis
     * @property {Property.ContentJustification}
     *
     **/
    justifyContent?: Property.ContentJustification;

    /**
     * Types to add direction of the elements
     * @property {Property.FlexDirection}
     *
     **/
    flexDirection?: Property.FlexDirection;
}

/**
 * @type StyledBoxProps
 */

type StyledBoxProps = {
    overrideStyle?: PropTypes["style"];
} & Partial<BoxPropType>;

/**
 * @function EmotionBox - Used to wrap the component for style
 *
 **/
export const EmotionBox = styled("div")(
    ({
        overrideStyle,
        width,
        height,
        padding,
        backgroundColor,
        overflow,
        borderRadius,
        borderStyle,
        borderWidth,
        borderColor,
        textAlign,
        fontSize,
        lineHeight,
        isTruncate,
        textTransform,
        display,
        alignItems,
        justifyContent,
        flexDirection,
    }: StyledBoxProps) => {
        return {
            display,
            alignItems,
            justifyContent,
            flexDirection,
            width,
            height,
            padding,
            backgroundColor,
            borderRadius,
            borderStyle,
            borderWidth,
            borderColor,
            lineHeight,
            fontSize,
            textAlign,
            textTransform,
            whiteSpace: isTruncate
                ? ("nowrap" as Property.whiteSpace)
                : ("normal" as Property.whiteSpace),
            textOverflow: isTruncate && "ellipsis",
            overflow: isTruncate ? "hidden" : overflow,
            ...overrideStyle,
        };
    },
);

export const Box = React.forwardRef<
    HTMLDivElement,
    React.PropsWithChildren<BoxPropType>
>(
    (
        {
            id,
            style,
            children,
            className,

            ...props
        },
        ref,
    ) => {
        return (
            <EmotionBox
                id={id}
                overrideStyle={style}
                ref={ref}
                className={classNames(className)}
                {...props}
            >
                {children}
            </EmotionBox>
        );
    },
);

Box.defaultProps = {
    id: "box",
};
