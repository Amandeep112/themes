import * as React from "react";
import { cx as classNames } from "@emotion/css";
import styled from "@emotion/styled";
import { PropTypes } from "../../utils/propType";
import { Property } from "../../utils/types";
import { keyframes } from "@emotion/react";

/**
 * @interface
 */
export interface SkeletonPropType
    extends Pick<PropTypes, "style" | "className" | "id"> {
    /**
     * To add  width of Skeleton
     * @property {Property.Width}
     *
     */
    width?: Property.Width;

    /**
     * To add height to the Skeleton
     * @property {Property.Height}
     *
     */
    height?: Property.Height;

    /**
     * To provide a base color to the Skeleton
     * @property {string}
     *
     */
    baseColor?: string;

    /**
     * To provide a higlight color to the Skeleton animation
     * @property {string}
     *
     */
    highlightColor?: string;

    /**
     * To rounds the corners of outer border of the Skeleton
     * @property {string | number}
     *
     */
    borderRadius?: string | number;

    /**
     * The animation speed in seconds
     * @property  { string}
     *
     */

    speed?: string;

    /**
     * To enable animation for skeleton
     * @property  {boolean}
     *
     */

    enableAnimation?: boolean;

    /**
     * To loop the skeleton
     * @property  {number}
     *
     */
    noOfLines?: number;

    /**
     * To add spacing for the skeleton
     * @property  {number}
     *
     */
    spaceBetween?: number;
}

/**
 * @type StyledSkeletonProps
 */

type StyledSkeletonProps = {
    overrideStyle?: PropTypes["style"];
} & Partial<SkeletonPropType>;

/**
 * @function StyledModal
 * This function that takes all props and theme(passed by the emotion itself) as a argument returns object of its types
 */
const StyledSkeleton = ({
    overrideStyle,
    height,
    width,
    baseColor,
    highlightColor,
    speed,
    borderRadius,
    enableAnimation,
    spaceBetween,
}: StyledSkeletonProps) => {
    const skeletonLoading = keyframes`
        from{
            background-color: ${baseColor};
        }
        to {
            background-color: ${highlightColor};
        }
        `;
    return {
        height,
        width,
        backgroundColor: baseColor,
        borderRadius,
        marginBottom: spaceBetween,
        ...(enableAnimation && {
            animation: `${speed} linear 0s infinite alternate none running ${skeletonLoading} `,
        }),

        ...overrideStyle,
    };
};

/**
 * @function EmotionSkeleton - used to wrap the component for style
 *
 **/
export const EmotionSkeleton = styled("div", {
    shouldForwardProp: (props: string) =>
        ![
            "width",
            "height",
            "speed",
            "spaceBetween",
            "highlightColor",
            "baseColor",
            "borderRadius",
            "enableAnimation",
            "overrideStyle",
        ].includes(props),
})(StyledSkeleton);

/**
 * @function range - used to map the no of line count into array
 *
 **/
function range(count: number) {
    return Array(count)
        .fill(1)
        .map((_, index) => index + 1);
}

export const Skeleton: React.FC<SkeletonPropType> = ({
    id,
    style,
    className,
    noOfLines,
    ...props
}) => {
    const ceilCount = Math.round(noOfLines);
    const countMap = range(ceilCount);

    return (
        <>
            {countMap.map((_idx) => (
                <EmotionSkeleton
                    key={`key_ske_${_idx}_${id}`}
                    id={`id_ske_${_idx}_${id}`}
                    overrideStyle={style}
                    className={classNames(className)}
                    {...props}
                />
            ))}
        </>
    );
};

Skeleton.defaultProps = {
    id: "skeleton",
    speed: "0.8s",
    baseColor: "#eee",
    highlightColor: "#ddd",
    width: "100%",
    height: "10px",
    borderRadius: "3px",
    enableAnimation: true,
    noOfLines: 4.5,
};
