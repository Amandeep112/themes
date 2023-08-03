import * as React from "react";
import { cx as classNames } from "@emotion/css";
import { useOnClickOutside } from "../../utils/hooks/useOnOutsideClick";
import { PropTypes } from "../../utils/propType";
import styled from "@emotion/styled";
import { isObjectEmpty } from "../../utils/helpers";
import { defaultTheme, Theme } from "../../context/ThemeProvider";
import { alpha } from "../../utils/Theme/colorManipulator";
import { fontSizes, spacing } from "../../utils/units";
import { useBoolean } from "../../utils/hooks/useBoolean";
import { ChevronDown } from "react-feather";
export interface SelectPropType extends Omit<PropTypes, "onChange"> {
    /**
     * To define placeholder text
     * @property {string}
     *
     **/
    placeholder?: string;

    /**
     * To add Input border radius
     * @property {number} BorderRadius
     *
     **/
    borderRadius?: number;

    /**
     * Trigger an action when click on dropdown
     * @property {void} onChange
     *
     **/
    onChange?: (val: string) => void;

    /**
     * To shown default selected item in the placeholder
     * @property {string} defaultSelected
     *
     **/
    defaultSelected?: string;
    /**
     * To provide id for selected item Selected item
     * @property {string}
     */
    defaultSelectedId?: string;

    /**
     *  Show error message
     * @property {string} ErrorMessage - show error message **/
    errorMessage?: string;

    /**
     * Three types of TextArea variation: 'solid - filled layout',  'outline - bordered layout','ghost - to show transculant style layout'
     * @property {void} Variant
     *
     **/
    variant?: "solid" | "outline" | "ghost";

    /**
     * Add icon at the start of select component
     * @property {JSX.Element} startIcon
     *
     **/
    startIcon?: JSX.Element;

    /**
     * Add icon at the end of select component
     * @property {JSX.Element} endIcon
     *
     **/
    endIcon?: JSX.Element;

    /**
     * Add caption to provide information of field
     * @property {string | JSX.Element} label
     *
     **/
    label?: string | JSX.Element;

    /**
     * Three types of Input sizes: 'sm - small view of Input size' , 'md - medium view of Input size' and 'lg - large view of Input size
     * @property {void} Size
     *
     **/
    size?: "sm" | "md" | "lg";

    /**
     * To indicate if dropdown is open
     *  @property {boolean}
     */
    isOpenDropdown?: boolean;
}

interface selectContextType {
    onOptionSelect: (value: string, name?: string) => void;
    selectedOption: string;
    selectedOptionId: string;
}

const SelectContext = React.createContext<selectContextType | null>(null);
export const useSelectContext = (): selectContextType =>
    React.useContext(SelectContext);

/**
 * @object SelectSizeProps
 * Used to define the sizes of Input
 */

const SelectSizeProps = {
    label: {
        sm: {
            fontSize: fontSizes["sm"],
        },
        md: {
            fontSize: fontSizes["md"],
        },
        lg: {
            fontSize: fontSizes["lg"],
        },
    },
    input: {
        sm: {
            fontSize: fontSizes["xs"],
            padding: `${spacing["xs"]} ${spacing["sm"]}`,
        },
        md: {
            fontSize: fontSizes["sm"],
            padding: `${spacing["sm"]} ${spacing["md"]}`,
        },
        lg: {
            fontSize: fontSizes["md"],
            padding: `${spacing["md"]} ${spacing["lg"]}`,
        },
    },
};
/**
 * @function getPropsByVariant
 * Used to pass the color scheme, variant and the emotion theme to the select component
 */
const getPropsByVariant = ({ variant, colorScheme, theme }) => {
    const colorInPalette = theme.palette[colorScheme];

    const variants = colorInPalette && {
        outline: {
            main: {
                border: `1px solid ${colorInPalette.main}`,
            },

            hover: {
                border: `1px solid ${alpha(colorInPalette.main, 0.8)}`,
            },
            textContrast: {
                color: theme.palette.typography.primary,
            },
            textOpacity: {
                color: `${alpha(theme.palette.typography.primary, 0.7)}`,
            },
            error: {
                border: `1px solid ${theme.palette.error.main}`,
                color: theme.palette.error.main,
                "&::placeholder": {
                    color: theme?.palette?.typography?.primary,
                },
            },
        },
        solid: {
            main: {
                border: `1px solid ${colorInPalette.main}`,
                backgroundColor: colorInPalette.main,
                color: theme.palette.common.white,
            },
            hover: {
                backgroundColor: alpha(colorInPalette.main, 0.8),
            },
            textContrast: {
                color: theme.palette.common.white,
            },
            textOpacity: {
                color: `${alpha(theme.palette.common.white, 0.9)}`,
            },
            error: {
                backgroundColor: theme.palette.error.main,
                color: colorInPalette.contrastText,
                border: "none",
            },
        },
        ghost: {
            main: {
                border: `1px solid ${colorInPalette.main}`,
                backgroundColor: alpha(colorInPalette.main, 0.2),
                color: colorInPalette.main,
            },
            hover: {
                backgroundColor: alpha(colorInPalette.main, 0.4),
                borderColor: `${colorInPalette.main}`,
            },
            textContrast: {
                color: colorInPalette.main,
            },
            textOpacity: {
                color: `${alpha(colorInPalette.main, 0.7)}`,
            },
            error: {
                backgroundColor: alpha(theme.palette.error.main, 0.2),
                border: `1px solid ${theme.palette.error.main}`,
                color: theme.palette.error.main,
            },
        },
    };

    return colorInPalette && variants[variant];
};

/**
 * This component is a root Emotion component for the Select component
 */
const EmotionSelectContainer = styled("div")(
    /**
     * This function that takes all props and theme(passed by the emotion itself) as a argument returns object of its types
     */
    ({ overrideStyle }: { overrideStyle: PropTypes["style"] }) => ({
        width: "100%",
        ...overrideStyle,
    }),
);

/**
 *
 * This component is a wrapper for selection and options
 */
const EmotionSelectContainerWrapper = styled("div")(() => ({
    position: "relative",
}));

/**
 * @function useColorVariant
 *  This function is used to provide, theme, colorscheme, variant
 */
const useColorVariant = (theme, variant, colorScheme) => {
    if (isObjectEmpty(theme)) {
        theme = defaultTheme;
    }
    return getPropsByVariant({
        variant,
        colorScheme,
        theme,
    });
};
/**
 * @type StyledSelectInputProps
 */
type StyledSelectInputProps = {
    theme?: Theme;
} & Partial<SelectPropType>;
/**
 * Selection component
 */
const EmotionSelectInput = styled("div")(
    ({
        theme,
        errorMessage,
        colorScheme,
        variant,
        size,
        ...props
    }: StyledSelectInputProps) => {
        if (isObjectEmpty(theme)) {
            theme = defaultTheme;
        }
        const fontSizeBySize = SelectSizeProps?.input[size]?.fontSize;
        const paddingBySize = SelectSizeProps?.input[size]?.padding;
        return {
            backgroundColor: "transparent",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            padding: SelectSizeProps.input.md.padding,
            fontSize: SelectSizeProps.input.md.fontSize,
            border: theme?.palette?.paper?.border,
            "&::placeholder": {
                color: "#5555",
            },
            color: `${theme?.palette?.paper?.text}`,
            ...(colorScheme &&
                useColorVariant(theme, variant, colorScheme)?.main),

            // "&:focus": {
            //   border: "1px solid #d81313",
            // },
            cursor: "pointer",

            ...(props.disable && {
                opacity: 0.6,
                pointerEvents: "none",
            }),
            ...(errorMessage && {
                border: `1px solid ${theme?.palette?.error?.main}`,
                color: theme?.palette?.typography?.primary,
                ...useColorVariant(theme, variant, colorScheme)?.error,
            }),
            ...(paddingBySize && { padding: paddingBySize }),
            ...(fontSizeBySize && { fontSize: fontSizeBySize }),
        };
    },
);

/**
 * Selection text component
 */
const EmotionSelectText = styled("span")(
    ({
        theme,
        variant,
        colorScheme,
        errorMessage,
        size,
        defaultSelectedId,
    }: {
        errorMessage: string;
        theme?: Theme;
        colorScheme;
        size: SelectPropType["size"];
        variant: SelectPropType["variant"];
        defaultSelectedId: SelectPropType["defaultSelected"];
    }) => {
        if (isObjectEmpty(theme)) {
            theme = defaultTheme;
        }

        return {
            fontSize: SelectSizeProps?.input[size]?.fontSize,
            display: "inline-flex",
            minWidth: 0,
            overflow: "hidden",
            whiteSpace: "nowrap",
            flex: 1,
            color: defaultSelectedId
                ? theme?.palette?.typography?.primary
                : `${alpha(theme?.palette?.paper?.text, 0.7)}`,
            ...(colorScheme &&
                (defaultSelectedId
                    ? useColorVariant(theme, variant, colorScheme)?.textContrast
                    : useColorVariant(theme, variant, colorScheme)
                          ?.textOpacity)),
            ...(errorMessage && {
                color:
                    variant === "solid"
                        ? "#fff"
                        : theme?.palette?.typography?.primary,
                "&::placeholder": {
                    color: theme?.palette?.typography?.primary,
                },
            }),
        };
    },
);

enum MarginDirection {
    left = "Left",
    right = "Right",
}

/**
 * Icon component
 */
const EmotionSelectIcon = styled("div")(
    ({ marginSide }: { marginSide: MarginDirection }) => ({
        margin: 0,
        [`margin${marginSide}`]: 10,
        display: "inline-flex",
        flexShrink: 0,
    }),
);

/**
 * @type StyledSelectLabelProps
 */
type StyledSelectLabelProps = {
    theme?: Theme;
    errorMessage?: string;
} & Partial<SelectPropType>;

/**
 * @function EmotionSelectLabel
 * Used to wrap the Label Item for style
 */
export const EmotionSelectLabel = styled.label(
    ({ theme, errorMessage, size }: StyledSelectLabelProps) => {
        return {
            paddingBottom: "10px",
            fontSize: SelectSizeProps?.label[size]?.fontSize,
            display: "inline-flex",
            color:
                errorMessage && errorMessage !== ""
                    ? theme?.palette?.error?.main
                    : theme?.palette?.typography?.primary,
        };
    },
);

/**
 * Select options component
 */
const EmotionSelectOptions = styled("div", {
    shouldForwardProp: (props: string) => {
        return ![
            "errorMessage",
            "colorScheme",
            "borderRadius",
            "maxheight",
            "scrollable",
            "disable",
            "alignItems",
            "as",
        ].includes(props);
    },
})(({ theme }) => {
    if (isObjectEmpty(theme)) {
        theme = defaultTheme;
    }

    return {
        position: "absolute",
        top: "100%",
        width: "100%",
        padding: 0,
        margin: 0,
        marginTop: 5,
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        zIndex: 1,
        left: 0,
        right: 0,
        borderRadius: "5px",
        background: "#fff",
        li: {
            borderRadius: 0,
        },

        "li:last-child": {
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
        },
        "li:first-of-type": {
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
        },
    };
});

/**
 * @type StyledSelectLabelProps
 */
type StyledSelectErrorProps = {
    theme?: Theme;
    errorMessage?: string;
} & Partial<SelectPropType>;
/**
 * @function EmotionErrorInput
 * This function is used to wrap the Inner Input Field for style
 */
export const EmotionSelecErrorBox = styled.div(
    (props: StyledSelectErrorProps) => ({
        color: props?.theme?.palette.error.main,
        fontSize: SelectSizeProps?.label[props.size]?.fontSize,
        marginTop: "5px",
    }),
);

/**
 * It returns icon as jsx element
 */

const getDropdownIcon = (
    icon: JSX.Element,
    marginSide: MarginDirection,
): JSX.Element => {
    return (
        <EmotionSelectIcon marginSide={marginSide}>{icon}</EmotionSelectIcon>
    );
};

/**
 * Select Component
 */
export const Select = React.forwardRef<
    HTMLDivElement,
    React.PropsWithChildren<SelectPropType>
>(
    (
        {
            placeholder,
            onChange,
            defaultSelected: selected,
            defaultSelectedId: selectId,
            errorMessage,
            className,
            style,
            disable,
            colorScheme,
            variant,
            children,
            startIcon,
            endIcon,
            size,
            as,
            label,
            tabIndex,
            isOpenDropdown,
            onClick,
            ...props
        },
        ref,
    ) => {
        const [isDropdownOpen, { off: closeDropdown, toggle: toggelDropdown }] =
            useBoolean(false);
        const elementRef = React.useRef<HTMLDivElement | null>(null);
        const [selectedOption, setSelectedOption] = React.useState(selected); //initial state  for selected option
        const [selectedOptionId, setSelectedOptionId] =
            React.useState(selectId); //initial state  for selected option

        useOnClickOutside(elementRef, closeDropdown);

        /**
         * @function function to find selected option
         *
         */
        const onOptionSelect = (value: string, name?: string) => {
            if (selectedOptionId !== value) {
                setSelectedOption(name);
                setSelectedOptionId(value);
                onChange(value);
            }
            closeDropdown();
        };
        //Combining our states to pass as value for our provider
        const selectState = {
            onOptionSelect,
            selectedOption,
            selectedOptionId,
        };

        React.useEffect(() => {
            if (isOpenDropdown) {
                closeDropdown();
            }
        }, [isOpenDropdown, closeDropdown]);

        React.useEffect(() => {
            setSelectedOption(selected);
            setSelectedOptionId(selectId);
        }, [selected, selectId]);

        const onToggleOptionClick = (e) => {
            if (isOpenDropdown) {
                onClick(e);
            }
            toggelDropdown();
        };
        const onKeyPressSelect = (e) => {
            if (e.code === "Enter" || e.code === "NumpadEnter") {
                onToggleOptionClick(e);
            }
        };
        return (
            <EmotionSelectContainer
                className={classNames(className)}
                overrideStyle={style}
                ref={elementRef}
                as={as}
            >
                <div
                    data-content={errorMessage ? "data-error" : "data-content"}
                >
                    {label && (
                        <EmotionSelectLabel
                            size={size}
                            errorMessage={errorMessage}
                        >
                            {label}
                        </EmotionSelectLabel>
                    )}
                    <EmotionSelectContainerWrapper
                        ref={ref}
                        data-selected={
                            selectedOption ? "data-selected" : "data-unselected"
                        }
                    >
                        <EmotionSelectInput
                            aria-selected={selectedOption ? true : false}
                            data-select-input="select-input"
                            data-options={isDropdownOpen ? true : false}
                            variant={variant}
                            colorScheme={colorScheme}
                            disable={disable}
                            onClick={onToggleOptionClick}
                            onKeyDown={onKeyPressSelect}
                            errorMessage={errorMessage}
                            size={size}
                            tabIndex={tabIndex}
                            {...props}
                        >
                            {startIcon &&
                                getDropdownIcon(
                                    startIcon,
                                    MarginDirection.right,
                                )}
                            <EmotionSelectText
                                colorScheme={colorScheme}
                                variant={variant}
                                size={size}
                                // defaultSelectedId={}
                                defaultSelectedId={selectedOptionId}
                                // defaultSelected={selectedOption}
                                errorMessage={errorMessage}
                            >
                                {selectedOption ? selectedOption : placeholder}
                            </EmotionSelectText>

                            {endIcon &&
                                getDropdownIcon(endIcon, MarginDirection.left)}
                        </EmotionSelectInput>
                        <SelectContext.Provider value={selectState}>
                            {isDropdownOpen && (
                                <EmotionSelectOptions
                                    data-option-selected={"option"}
                                >
                                    {children}
                                </EmotionSelectOptions>
                            )}
                        </SelectContext.Provider>
                    </EmotionSelectContainerWrapper>
                </div>
                {errorMessage && (
                    <EmotionSelecErrorBox data-invalid={true} size={size}>
                        {errorMessage}
                    </EmotionSelecErrorBox>
                )}
            </EmotionSelectContainer>
        );
    },
);

/**
 * DefaultProps - To define default values for component props
 */
Select.defaultProps = {
    placeholder: "Please Select",
    endIcon: <ChevronDown size={20} />,
    size: "md",
    colorScheme: "primary",
    tabIndex: 0,
    label:"",
};
