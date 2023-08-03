import * as React from "react";
import { cx as classNames } from "@emotion/css";
import { ButtonPropType, Button, EmotionButtonIcon } from "../Button";
import styled from "@emotion/styled";
import { Theme } from "../../context/ThemeProvider";
import { useOnClickOutside } from "../../utils/hooks/useOnOutsideClick";
import { PaperPropType, Paper } from "../Paper";
import { ChevronUp, ChevronDown } from "react-feather";
import { PropTypes } from "../../utils/propType";
interface Position {
    vertical: "bottom" | "top";
    horizontal: "right" | "left";
}
export interface ButtonDropdownPropType
    extends ButtonPropType<React.ElementType> {
    /**
     * Event on Button Toogle
     * @property {void}
     *
     **/
    onButtonToggle?: (on: boolean) => void;

    /**
     * To disable the action and styling of element.
     * @property {boolean}
     *
     **/
    disable?: boolean;

    /**
         * To add styling with custom card class on dropdown element.

     * @property {string}
     *
     **/
    cardClasses?: string;

    /**
     * To reperesent the caption of the element.
     * @property {string}
     *
     **/
    label: string;

    /**
     * To place the dropdown option box with vertical and horizontal position.
     * @property {Position}
     **/
    position?: Position;

    /**
     * To render content include between the opening and closing tags when invoking a component
     * @property {React.ReactNode}
     *
     **/
    children?: React.ReactNode;

    /**
     * To add box shadow effect on element
     * @property {boolean}
     *
     **/
    elevation?: boolean;

    /**
     * Rounds the corners of ButtonDropdown's outer border edge
     * @property {number}
     *
     **/
    borderRadius?: number;

    /**
     * Add icon when dropdown is closed
     * @property {JSX.Element}
     *
     **/
    toggleUp?: JSX.Element;

    /**
     * Add icon when dropdown is opened
     * @property {JSX.Element}
     *
     **/
    toggleDown?: JSX.Element;

    /**
     * If true, show dropdown list on click action.
     * @property {boolean}
     *
     */
    showListOnClick?: boolean;
    /**
     * space for icon
     * @property {string}
     *
     */
    spaceBetween?: string;

    /**
     * To stop event propagation on inside click
     * @property
     */
    onInsideClick?: (e: any) => void;
}

/** ButtonProps for buttondropdown*/

export type ButtonDropDownProps = {
    /** id is used to point & manipulate the element with the specific id */
    id: string;
} & Pick<ButtonDropdownPropType, "disable" | "style">;

/** PaperProps for buttondropdown*/

export type PaperProps = {
    /**
     * To provide theme to the element
     * @property {Theme}
     *
     **/
    theme?: Theme;

    /**
     * To override the default style of element
     * @property {PropTypes["style"]}
     *
     **/
    overrideStyle?: PropTypes["style"];
    children: React.ReactNode;
    elevation?: boolean;
    borderRadius?: number;
} & Partial<PaperPropType>;

export interface DropdownIcon {
    onClose: string;
    onOpen: string;
}

/**
 * @function ButtonDropdownConatiner
 * This function is used to style the container of the component
 */

const ButtonDropdownConatiner = styled("div")(
    ({ overrideStyle }: { overrideStyle?: PropTypes["style"] }) => {
        return {
            position: "relative",
            height: "fit-content",
            ...overrideStyle,
        };
    },
);

/**
 * @function EmotionButtonPaper
 * This function is used style the background of buttonDropdown
 */

const EmotionButtonPaper = styled(Paper, {
    shouldForwardProp: (props) => !["position"].includes(props as string),
})(({ position, elevation, theme }: PaperProps & { position: Position }) => {
    return {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        width: "100%",
        top: position.vertical === "bottom" ? "100%" : 0,
        [position.horizontal]: 0,
        boxShadow: elevation && theme?.shadows[1],
        padding: 0,
        border: 0,
        zIndex: 99,
        margin: 0,
        borderRadius: 0,
    };
});

/**
 * @function EmotionButtonDropdown
 * This function is used to style the button
 */
const EmotionButtonDropdown = styled(
    Button as React.FC<ButtonPropType<React.ElementType>>,
)(({ spaceBetween }: { spaceBetween: string }) => {
    return {
        whiteSpace: "nowrap",
        spaceBetween,
    };
});

enum MarginDirection {
    left = "Left",
    right = "Right",
}

const getButtonIcon = (
    icon: JSX.Element,
    marginSide: MarginDirection,
    spaceBetween: string,
): JSX.Element => (
    <EmotionButtonIcon marginSide={marginSide} spaceBetween={spaceBetween}>
        {icon}
    </EmotionButtonIcon>
);

/**
 * * The Trailing comma in `<T,>` is added due to contraints of the `.tsx` file extention.
 * * You can read about this here
 * * https://wanago.io/2020/02/17/typescript-generics-discussing-naming-conventions/#:~:text=identity(%27Hello%20world!%27)%3B-,Arrow%20functions,-We%20can%20also
 */
const ButtonDropdownComponent = (
    {
        id,
        className,
        disable,
        onButtonToggle,
        children,
        cardClasses,
        label,
        variant,
        onInsideClick,
        position,
        elevation,
        toggleDown,
        showListOnClick,
        toggleUp,
        spaceBetween,
        ...otherProps
    }: ButtonDropdownPropType,
    Btnref: React.ForwardedRef<HTMLDivElement>,
) => {
    /** Created a ref that we add to the element for which we want to detect outside clicks */
    const ref: React.RefObject<HTMLDivElement> = React.useRef();

    /** States for our ButtonDropdown */
    const [isOpen, setToggle] = React.useState(false);

    const toggleMenuOpen = () => {
        onButtonToggle && onButtonToggle(!isOpen);
        setToggle(!isOpen);
    };

    const insdeClick = (e) => {
        if (e.target.id === "Dropdown_button_id") {
            return;
        }
    };

    useOnClickOutside(
        ref,
        () => isOpen && toggleMenuOpen(),
        (e) => insdeClick(e),
    );
    const onkeydown = (e) => {
        if (e.code === "Enter") {
            setToggle(true);
        }
    };

    return (
        <ButtonDropdownConatiner
            id={id}
            className={classNames(className)}
            ref={ref}
            overrideStyle={otherProps.style}
        >
            <div
                onMouseEnter={
                    disable
                        ? undefined
                        : () => !showListOnClick && toggleMenuOpen()
                }
                onMouseLeave={
                    disable
                        ? undefined
                        : () => !showListOnClick && toggleMenuOpen()
                }
                onClick={
                    disable
                        ? undefined
                        : () => showListOnClick && toggleMenuOpen()
                }
                onKeyPress={disable ? undefined : (e) => onkeydown(e)}
            >
                <EmotionButtonDropdown
                    id="Dropdown_button_id"
                    variant={variant}
                    disable={disable}
                    startIcon={otherProps.startIcon}
                    endIcon={otherProps.endIcon}
                    spaceBetween={spaceBetween}
                    data-dropdown-button={
                        isOpen ? "select-dropdown" : "unselected-dropdown"
                    }
                >
                    {label}
                    {isOpen
                        ? getButtonIcon(
                              toggleUp,
                              MarginDirection.left,
                              spaceBetween,
                          )
                        : getButtonIcon(
                              toggleDown,
                              MarginDirection.left,
                              spaceBetween,
                          )}
                </EmotionButtonDropdown>
                {isOpen && (
                    <EmotionButtonPaper
                        data-dropdown-option="data-option"
                        id="Button_dropdown_list_id"
                        key="testid"
                        ref={Btnref}
                        onClick={onInsideClick}
                        className={classNames(cardClasses)}
                        elevation={elevation}
                        position={position}
                    >
                        {children}
                    </EmotionButtonPaper>
                )}
            </div>
        </ButtonDropdownConatiner>
    );
};

/**
 * This helper interface is created to make the Component Generic with Forword Ref support
 */
interface TypesafeForwordRefComponent {
    (
        props: ButtonDropdownPropType & {
            /**
             * Provide a way to access DOM nodes
             * @property {React.ForwardedRef<HTMLDivElement>}
             *
             **/
            ref?: React.ForwardedRef<HTMLDivElement>;
        },
    ): ReturnType<typeof ButtonDropdownComponent>;
    defaultProps?: Partial<ButtonDropdownPropType> | undefined;
}

/**
 * ButtonDropdown Component
 */
export const ButtonDropdown = React.forwardRef(
    ButtonDropdownComponent,
    /**
     * Type assessertion is Required for Generic component
     * For more info visit https://fettblog.eu/typescript-react-generic-forward-refs/
     **/
) as unknown as TypesafeForwordRefComponent;

/**
 * DefaultProps - To define default values for component props
 */
ButtonDropdown.defaultProps = {
    variant: "solid" as const,
    label: "DropdownList",
    position: {
        vertical: "bottom",
        horizontal: "left",
    },
    elevation: true,
    borderRadius: 0,
    toggleUp: <ChevronUp size={16} />,
    toggleDown: <ChevronDown size={16} />,
    showListOnClick: false,
};
