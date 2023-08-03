import * as React from "react";
import styled from "@emotion/styled";

import loading from "../../images/loader.svg";
import { PropTypes } from "@util/propType";
import { Flex, Image, Text } from "../index";

export interface LoaderPropType extends Omit<PropTypes, "colorScheme"> {
    /**
     * To add the position for loader
     * @property {string}
     **/
    position?: "fixed" | "absolute";

    /**
     * To add the size for loader icon
     * @property {string}
     */
    size?: "xs" | "sm" | "md" | "lg";

    /**
     * Additional background color to loader overlay
     * @property {string}
     **/
    overlayColor?: string;

    /**
     * To provide greater z-stack order of element
     * @property {number}
     **/
    zIndex?: number;
    /**
     * To add icon for the loader
     * @property {string}
     **/
    loaderIcon?: string;

    /**
     * To add text for the loader
     * @property {string}
     **/
    loaderText?: string;
}

/**
 * @function getPropsByVariant
 * This function is used to pass variant to the loader
 */
const getPropsByVariant = ({ position }) => {
    const variant = {
        fixed: {
            position: "fixed",
        },
        absolute: {
            position: "absolute",
        },
    };
    return variant[position] || variant.fixed;
};
/**
 * @function getPropsByVariant
 * This function is used to pass size of loader img to the loader
 */
const getPropsBySize = ({ size }) => {
    const sizes = {
        xs: {
            img: {
                width: "25px",
                height: "25px",
            },
        },
        sm: {
            img: {
                width: "50px",
                height: "50px",
            },
        },
        md: {
            img: {
                width: "80px",
                height: "80px",
            },
        },
        lg: {
            img: {
                width: "100px",
                height: "100px",
            },
        },
    };

    return sizes[size] || sizes.md;
};

/**
 * @function StyledLoaderProps
 * This function  takes all the props and theme(passed by the emotion itself) as a argument returns object of its types
 */

type StyledLoaderProps = {
    zIndex?: number;
    overrideStyle?: PropTypes["style"];
} & Partial<LoaderPropType>;

/**
 * @function StyledLoaderWrapper
 * This function takes all  the props and theme(passed by the emotion itself) as a argument returns object of its types
 */

const StyledLoaderWrapper = ({
    size,
    position,
    overrideStyle,
    overlayColor,
    zIndex,
}: StyledLoaderProps) => {
    const propsByPosition = getPropsByVariant({
        position,
    });

    const propsBySize = getPropsBySize({
        size,
    });
    return {
        backgroundColor: overlayColor,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center",
        zIndex,
        ...propsByPosition,
        ...propsBySize,
        ...overrideStyle,
    };
};

/**
 * @function StyledLoaderIcon
 * This function takes all the props and theme(passed by the emotion itself) as a argument returns object of its types
 */

/**
 * @function EmotionLoaderWrapper
 * This function is used to add style for loader
 */
export const EmotionLoaderWrapper = styled(Flex, {
    shouldForwardProp: (props: string) => {
        return !["overlayColor", "zIndex"].includes(props);
    },
})(StyledLoaderWrapper);

export const Loader = React.forwardRef<
    HTMLDivElement,
    React.PropsWithChildren<LoaderPropType>
>(
    (
        {
            id,
            children,
            className,
            style,
            zIndex,
            loaderIcon,
            loaderText,
            overlayColor,
            position,
            size,
            ...props
        },
        ref,
    ) => {
        return (
            <EmotionLoaderWrapper
                style={{ width: "100%", height: "auto" }}
                id={id}
                className={className}
                size={size}
                overlayColor={overlayColor}
                zIndex={zIndex}
                position={position}
                overrideStyle={style}
                flexDirection="column"
                data-wrapper
                {...props}
                ref={ref}
            >
                {loaderIcon && loaderIcon === "" ? (
                    ""
                ) : (
                    <Image
                        className="loader_image"
                        src={loaderIcon ? loaderIcon : loading}
                        data-load-icon
                        alt="loading..."
                    />
                )}

                {loaderText && (
                    <Text data-load-text fontSize="20px">
                        {loaderText}
                    </Text>
                )}
                {children}
            </EmotionLoaderWrapper>
        );
    },
);

Loader.defaultProps = {
    id: "loader",
    zIndex: 999,
    position: "absolute",
    overlayColor: "rgb(255 255 255 / 40%)",
};
