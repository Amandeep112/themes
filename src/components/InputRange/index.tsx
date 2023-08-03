import {
    InputPropType as inputType,
    InputWrapper,
} from "../../components/InputWrapper";
import styled from "@emotion/styled";
import { PropTypes } from "@util/propType";
import { defaultTheme, Theme } from "../../context/ThemeProvider";
import { cx as classNames } from "@emotion/css";
import React from "react";
import { Property } from "@util/types";

interface InputRangePropType
    extends Pick<inputType<"range">, "icon">,
        Pick<PropTypes<HTMLInputElement>, "className" | "style"> {
    /**
     * To provide unique ID
     * @property {string}
     */
    id?: string;

    /**
     * To specify the minimum value
     * @property {number}
     */
    min?: number;
    /**
     * To specify the maximum value
     * @property {number}
     */
    max?: number;
    /**
     * To disable the input range.
     * @property {boolean}
     */
    disable?: boolean;
    /**
     * To specify the value of an input range element
     *  @property {string | number}
     */
    value?: string | number;
    /**
     * To repersent caption of the element
     * @property {string | number}
     **/
    label?: string | number;
    /**
     * Event occurs for change value of an element
     * @property {void}
     *
     **/
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * To display error message
     * @property {string}
     *
     **/
    errorMessage?: string;

    /**
     * To add child element on Left
     * @property {JSX.Element}
     **/
    inputRangeLeftChildren?: JSX.Element;
    /**
     * To add child element on Right
     * @property {JSX.Element}
     **/
    inputRangeRightChildren?: JSX.Element;
    /**
     * Space between icon and Input range
     * @property {void}
     **/
    iconSpacing?: Property.Width;
}

/**
 * @function StyledInputRangeWrapperProps
 * This function that takes all props (passed by the emotion itself) as a argument returns object of its types
 */
type StyledInputRangeWrapperProps = {
    theme?: Theme;
    errorMessage?: string;
    inputRangeLeftChildren?: JSX.Element;
    inputRangeRightChildren?: JSX.Element;
    overrideStyle?: PropTypes["style"];
} & Partial<InputRangePropType>;

/**
 * @function StyledInputRangeLabelProps
 * This function that takes all props (passed by the emotion itself) as a argument returns object of its types
 */
type StyledInputRangeLabelProps = {
    errorMessage?: string;
    overrideStyle?: PropTypes["style"];
} & Partial<InputRangePropType>;

type StyledChildElementProps = {
    iconSpacing?: Property.Width;
} & Partial<InputRangePropType>;

export const EmotionErrorInput = styled.div(() => ({
    color: "red",
    fontSize: "20px",
    marginTop: "10px",
    marginBottom: "10px",
    backgroundColor: "#ff000021",
    padding: " 4px 10px",
    //width: "40%",
}));

/**
 * @function EmotionInputRangeLeftElement
 * This function is used to wrap the left child element of input range
 */
export const EmotionInputRangeLeftElement = styled.div(
    ({ iconSpacing }: StyledChildElementProps) => {
        return {
            position: "absolute" as Property.Position,
            right: 0,
            left: 0,
            top: 0,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            textAlign: "center",
            width: iconSpacing,
        };
    },
);

/**
 * @function EmotionInputRangeRightElement
 * This function is used to wrap the left child element of input range
 */
export const EmotionInputRangeRightElement = styled.div(
    ({ iconSpacing }: StyledChildElementProps) => {
        return {
            position: "absolute" as Property.Position,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: "flex-start",
            justifyContent: "end",
            display: "flex",
            textAlign: "center",
            width: iconSpacing,
        };
    },
);

/**
 * @function EmotionInputRange
 * This function is used to wrap the Inner Item for style
 */
export const EmotionInputRange = styled(InputWrapper)(
    ({ errorMessage, overrideStyle }: StyledInputRangeWrapperProps) => {
        return {
            width: "100%",
            outline: "none",
            ...(errorMessage && {
                border: `1px solid red`,
                color: "red",
            }),
            ...overrideStyle,
        };
    },
);

/**
 * @function EmotionRangeBubble
 * This function is used to wrap the Inner Input Items for style of range bubble
 */
export const EmotionRangeBubble = styled.div(({ value }: { value }) => ({
    background: "#1d78f3",
    color: "white",
    padding: "4px 12px",
    position: "absolute",
    borderRadius: "4px",
    left: `${value}%`,
    transform: `translateX(-${value}%)`,
    //transform: "translateX(-50%)",
}));

export const EmotionInputBubbleWrapper = styled.div(
    ({
        iconSpacing,
        inputRangeLeftChildren,
        inputRangeRightChildren,
    }: {
        iconSpacing;
        inputRangeLeftChildren;
        inputRangeRightChildren;
    }) => ({
        position: "relative",
        width: "100%",
        marginLeft: inputRangeLeftChildren && iconSpacing ? iconSpacing : "",
        marginRight: inputRangeRightChildren && iconSpacing ? iconSpacing : "",
    }),
);
/**
 * @function EmotionInputRangeWrapper
 * This function is used to wrap the Inner Input Items for style
 */
export const EmotionInputRangeWrapper = styled.div(
    ({ overrideStyle }: StyledInputRangeWrapperProps) => ({
        display: "flex",
        position: "relative",
        width: "100%",

        ...overrideStyle,
    }),
);

/**
 * @function EmotionInputRangeLabelProps
 * This function is used to wrap the Label Item for style
 */
export const EmotionInputRangeLabelProps = styled.label(
    ({ overrideStyle }: StyledInputRangeLabelProps) => {
        return {
            position: "relative",
            paddingBottom: "10px",
            fontSize: "20px",
            lineHeight: "22px",
            display: "flex",
            color: "blue",

            ...overrideStyle,
        };
    },
);

export const InputRange = React.forwardRef<
    HTMLInputElement,
    React.PropsWithChildren<InputRangePropType>
>(
    (
        {
            id,
            style,
            min,
            max,
            disable,
            value,
            children,
            label,
            errorMessage,
            className,
            iconSpacing,
            inputRangeLeftChildren,
            inputRangeRightChildren,

            ...props
        },
        ref,
    ) => {
        return (
            <>
                {errorMessage && (
                    <EmotionErrorInput>{errorMessage}</EmotionErrorInput>
                )}
                {label && (
                    <EmotionInputRangeLabelProps>
                        {label}
                    </EmotionInputRangeLabelProps>
                )}

                <EmotionInputRangeWrapper>
                    {inputRangeLeftChildren && (
                        <EmotionInputRangeLeftElement iconSpacing={iconSpacing}>
                            {inputRangeLeftChildren}
                        </EmotionInputRangeLeftElement>
                    )}
                    <EmotionInputBubbleWrapper
                        inputRangeRightChildren={inputRangeRightChildren}
                        inputRangeLeftChildren={inputRangeLeftChildren}
                        iconSpacing={iconSpacing}
                    >
                        <EmotionInputRange
                            type="range"
                            id={id}
                            ref={ref}
                            disable={disable}
                            overrideStyle={style}
                            max={max}
                            min={min}
                            value={value}
                            className={classNames(className)}
                            errorMessage={errorMessage}
                            {...props}
                        >
                            {children}
                        </EmotionInputRange>
                        {value && (
                            <EmotionRangeBubble value={value}>
                                {value}
                            </EmotionRangeBubble>
                        )}
                    </EmotionInputBubbleWrapper>

                    {inputRangeRightChildren && (
                        <EmotionInputRangeRightElement
                            iconSpacing={iconSpacing}
                        >
                            {inputRangeRightChildren}
                        </EmotionInputRangeRightElement>
                    )}
                </EmotionInputRangeWrapper>
            </>
        );
    },
);
