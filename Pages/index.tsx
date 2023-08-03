import React, { useRef, useState } from "react";
import {
    Flex,
    Button,
    Section,
    Input,
    TextArea,
    FlexItem,
    Text,
    IconBox,
    ButtonGroup,
    Divider,
    Form,
    Switch,
    Badge,
    Tag,
    Radio,
    RadioGroup,
    NavigationSection,
    Table,
    TableCell,
    TableRow,
    Breadcrumb,
    TabPanel,
    Modal,
    Notification,
    Container,
    Col,
    Row,
    Pagination,
    Tab,
    Card,
    Tooltip,
    TabList,
    TabItem,
    Accordion,
    AccordionHeader,
    AccordionItem,
    AccordionPanel,
    Grid,
    GridItem,
    Select,
    SelectOptions,
    Checkbox,
    List,
    ListItem,
    // SearchBar,
    ButtonDropdown,
    BreadcrumbLink,
    InputRange,
    Loader,
} from "@components";
import { useThemeMode } from "src/context/ThemeProvider";
import TickImage from "public/tick-checkbox.svg";
import TickWhite from "public/tick-white.svg";
import flower1 from "public/flower1.jpg";
import truLogo from "../public/truLogo.jpg";
import {
    AlertCircle,
    Camera,
    Check,
    Codesandbox,
    SkipBack,
    SkipForward,
} from "react-feather";
import Image from "next/image";

import {
    Search,
    X,
    MoreVertical,
    ChevronRight,
    ChevronsLeft,
    CheckCircle,
    CheckSquare,
    Heart,
    Share2,
    Info,
    Eye,
    EyeOff,
    MapPin,
    Home,
} from "react-feather";
import useDebounce from "@util/hooks/useDebounce";
import useThrottle from "@util/hooks/useThrottle";
import { BreakPoints } from "@util/units";
const option: { id: string; name: string }[] = [
    { id: "1", name: "Orange" },
    { id: "2", name: "Red" },
    { id: "3", name: "Green" },
    { id: "4", name: "Yellow" },
    { id: "5", name: "Blue" },
];
const categories: { id: string; name: string }[] = [
    { id: "1", name: "Plant" },
    { id: "2", name: "Wood" },
    { id: "3", name: "Grass" },
];
const plantType: { id: string; name: string }[] = [
    { id: "1", name: "Evergreen" },
    { id: "2", name: "Fruit" },
    { id: "3", name: "Vines" },
    { id: "4", name: "Tree" },
];
const Testlist: { id: string; Testname: string }[] = [
    { id: "1", Testname: "DropDown Item 1" },
    { id: "2", Testname: "DropDown Item 2" },
    { id: "3", Testname: "DropDown Item 3" },
    { id: "4", Testname: "DropDown Item 4" },
    { id: "5", Testname: "DropDown Item 5" },
    { id: "6", Testname: "DropDown Item 6" },
    { id: "7", Testname: "DropDown Item 7" },
    { id: "8", Testname: "DropDown Item 8" },
];

const ServicesList: { id: string; Services: string }[] = [
    { id: "1", Services: "User Experience" },
    { id: "2", Services: "Digital Strategy" },
    { id: "3", Services: "Development" },
    { id: "4", Services: "eCommerce" },
];

const Demo = () => {
    const { toggleThemeMode, themeMode } = useThemeMode();
    const [value, setvalue] = React.useState("");
    const onChangeInputHandler = (event) => {
        setvalue(event.target.value);
    };

    const [passValue, setPassValue] = React.useState("");
    const onChangePasswordHandler = (e) => {
        setPassValue(e.target.value);
    };
    const [showPass, setShowPass] = React.useState(false);
    const onShowPassword = () => {
        setShowPass(!showPass);
    };

    const [inputErrorValue, setInputError] = React.useState("");
    const onChangeInputErrorHandler = (e) => {
        setInputError(e.target.value);
    };

    const onInputClear = () => {
        setInputLastname("");
    };

    const [lastnameValue, setInputLastname] = React.useState("");
    const onInputChangeLastname = (e) => {
        setInputLastname(e.target.value);
    };

    const [phoneValue, setPhoneValue] = React.useState<string | number>("");
    const [emailValue, setEmailValue] = React.useState("");
    const [postValue, setPostValue] = React.useState("");
    const [addressValue, setAddressValue] = React.useState("");
    const [countryValue, setCountryValue] = React.useState("");
    const onEmailChangeHandler = (e) => {
        setEmailValue(e.target.value);
    };

    const [selectedOption, setSelectedOption] = React.useState("");
    const [selectedPlantOption, setSelectedPlantOption] = React.useState("");
    const [selectedColorOption, setSelectedColorOption] = React.useState("Red");

    const [valueText, setTextvalue] = React.useState("");
    const onChangeHandler = (event) => {
        setTextvalue(event.target.value);
    };
    const [errorDescriptionValue, setErrorDescriptionValue] =
        React.useState("");
    const [outlineDescriptionValue, setOutlineDescriptionValue] =
        React.useState("");
    const [colorOutlineValue, setColorOutlineValue] = React.useState("");
    const [colorSolidValue, setColorSolidValue] = React.useState("");
    const [colorGhostValue, setColorGhostValue] = React.useState("");
    const [outlineErrorValue, setOutlineErrorValue] = React.useState("");
    const [solidErrorValue, setSolidErrorValue] = React.useState("");
    const [ghostErrorValue, setGhostErrorValue] = React.useState("");
    const [autoResizeValue, setAutoResizeValue] = React.useState("");
    const [noneResizeValue, setNoneResizeValue] = React.useState("");
    const [horiResizeValue, setHoriResizeValue] = React.useState("");
    const [vertResizeValue, setVertResizeValue] = React.useState("");

    const [defaultModal, setDefaultModal] = useState(false);
    const onClickDefaultModal = () => {
        setDefaultModal(!defaultModal);
    };
    const [leftTopModal, setLeftTopModalModal] = useState(false);
    const onClickLeftTopModal = () => {
        setLeftTopModalModal(!leftTopModal);
    };
    const [rightTopModal, setRightTopModal] = useState(false);
    const onClickRightTopModal = () => {
        setRightTopModal(!leftTopModal);
    };
    const [leftBottomModal, setLeftBottomModal] = useState(false);
    const onClickLeftBottomModal = () => {
        setLeftBottomModal(!leftBottomModal);
    };
    const [rightBottomModal, setRightBottomModal] = useState(false);
    const onClickRightBottomModal = () => {
        setRightBottomModal(!leftBottomModal);
    };

    const [isChecked, setIsChecked] = React.useState(false);
    const tableRef = useRef<HTMLTableElement>(null);
    const rowRef = useRef<HTMLTableRowElement>(null);
    const cellRef = useRef<HTMLTableCellElement>(null);

    const [currentPage, setCurrentPage] = React.useState(0);
    const [currentPage1, setCurrentPage1] = React.useState(0);
    const [currentPage2, setCurrentPage2] = React.useState(0);

    const breadCrumbList = [
        { id: "1", to: "test", label: "Label1" },
        { id: "2", to: "test1", label: "Label2" },
        { id: "3", to: "test2", label: "Label3" },
    ];

    {
        /** Debounced Hook function start here **/
    }

    const [debouncedValue, debounceValue, setDebounceValue] =
        useDebounce<string>("", 1000);

    const onChangeDebounceHandler = (event) => {
        setDebounceValue(event.target.value);
    };

    {
        /** Throttle Hook function start here **/
    }

    const [throttleText, setThrottleText] = useState("");

    const throttledValue = useThrottle(throttleText, 3000);

    const onChangeThrottleHandler = (event) => {
        setThrottleText(event.target.value);
    };
    const [rangeValue, setRangeValue] = React.useState(0);
    const handleChange = (e) => {
        setRangeValue(e.target.value);
    };

    return (
        <>
            {/* =========== Sticky Notification Component Start Here =========== */}
            <Section
                className="stickySection"
                style={{
                    position: "fixed",
                    width: "100%",
                    zIndex: "999",
                    padding: "10px 20px",
                    backgroundColor: "#ff6464",
                }}
            >
                <Flex justifyContent="flex-end">
                    {/* <FlexItem> */}
                    <Text
                        as="h6"
                        fontSize="14px"
                        textAlign="center"
                        style={{ marginRight: 20 }}
                    >
                        Change Theme Mode to Dark/Light
                    </Text>
                    <Button
                        variant="solid"
                        onClick={() => toggleThemeMode()}
                        borderRadius={20}
                        size="sm"
                        style={{
                            fontSize: "12px",
                            textTransform: "uppercase",
                        }}
                    >
                        {themeMode}
                    </Button>
                    {/* </FlexItem> */}
                </Flex>
            </Section>
            {/* =========== Sticky Notification Component Start Here =========== */}

            {/* =========== Header Component Start Here =========== */}
            <Section
                style={{
                    marginTop: "50px",
                    position: "relative",
                    display: "inline-flex",
                    width: "100%",
                    padding: "20px 9%",
                    backgroundColor:
                        themeMode === "light" ? "#edf2f6" : "#212121",
                }}
            >
                <Flex
                    justifyContent="space-between"
                    flexDirection="row"
                    style={{ display: "inline-flex" }}
                >
                    <FlexItem
                        flexBasis={{
                            lg: "60%",
                            md: "60%",
                            sm: "60%",
                            xs: "60%",
                        }}
                    >
                        <Flex justifyContent="flex-start">
                            <div
                                className="logoWrapper"
                                style={{ width: 60, height: 60 }}
                            >
                                <img
                                    src={truLogo}
                                    width={"100%"}
                                    height={"100%"}
                                    style={{ borderRadius: "100px" }}
                                />
                            </div>
                            <Text
                                as="h6"
                                fontSize="30px"
                                style={{ marginLeft: 10 }}
                            >
                                Tru{" "}
                            </Text>
                        </Flex>
                    </FlexItem>
                    <FlexItem
                        flexBasis={{
                            lg: "40%",
                            md: "40%",
                            sm: "40%",
                            xs: "40%",
                        }}
                    >
                        <Flex
                            className="menuListItem"
                            justifyContent="space-between"
                            style={{
                                height: 60,
                                "&:hover": {
                                    backgroundColor: "transparent",
                                },
                            }}
                        >
                            <Text as="h6" fontSize="14px">
                                Home
                            </Text>
                            <ButtonDropdown
                                id="profile"
                                key="profile_dropdown"
                                label="Services"
                                variant="link"
                                size="sm"
                                className="profile_button"
                                // showListOnClick
                                position={{
                                    vertical: "bottom",
                                    horizontal: "right",
                                }}
                                style={{
                                    button: {
                                        fontSize: 13,
                                        lineHeight: "16px",
                                        color: "#000",
                                        fontWeight: 600,
                                    },
                                }}
                            >
                                <List id="profile_order_queue">
                                    <ListItem
                                        style={{
                                            padding: "8px 20px",
                                            lineHeight: "14px",
                                            fontSixe: 14,
                                        }}
                                        as="li"
                                    >
                                        List 1
                                    </ListItem>
                                    <ListItem
                                        style={{
                                            padding: "8px 20px",
                                            lineHeight: "14px",
                                            fontSixe: 14,
                                        }}
                                        as="li"
                                    >
                                        List 1
                                    </ListItem>
                                </List>
                            </ButtonDropdown>
                            <Text as="h6" fontSize="14px">
                                Our Products
                            </Text>
                            <Text as="h6" fontSize="14px">
                                About Us
                            </Text>
                            <Text as="h6" fontSize="14px">
                                Contact Us
                            </Text>
                        </Flex>
                    </FlexItem>
                </Flex>
            </Section>
            {/* =========== Header Component Start Here =========== */}

            {/* =========== Breadcrumb Component Start Here =========== */}

            <Section
                style={{
                    padding: "20px 9%",
                }}
            >
                <Text as="h2" textAlign="left">
                    Breadcrumb component with separator
                </Text>
                <Divider
                    orientation="horizontal"
                    variant="solid"
                    style={{ marginBottom: 20 }}
                />
                {breadCrumbList && (
                    <Breadcrumb
                        id="Breadcrumb"
                        separator=">"
                        className="test"
                        style={{ marginRight: "20px" }}
                    >
                        {breadCrumbList.map(({ to, label }) => (
                            <BreadcrumbLink
                                id="breadcrumblink"
                                key={to}
                                to={to}
                            >
                                {label}
                            </BreadcrumbLink>
                        ))}
                    </Breadcrumb>
                )}
            </Section>
            {/* =========== Breadcrumb Component End Here =========== */}

            {/* =========== Button Component Start Here =========== */}
            <Section style={{ padding: "20px 9%" }}>
                <Text as="h2">Button Component</Text>

                <Divider
                    orientation="horizontal"
                    variant="solid"
                    style={{ marginBottom: 20 }}
                />

                <Flex
                    justifyContent="space-evenly"
                    alignItems="center"
                    style={{ marginBottom: 20 }}
                >
                    <FlexItem
                        flexBasis={{
                            lg: "37%",
                            md: "50%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 1 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            Large Button
                        </Text>
                        <Flex
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            style={{ marginBottom: 30 }}
                        >
                            <Button
                                id="button-lg1"
                                colorScheme="primary"
                                variant="solid"
                                size="lg"
                                borderRadius={5}
                                style={{
                                    marginRight: 20,
                                    marginBottom: 15,
                                }}
                                className="buttonCustomeClass"
                                onClick={() => alert("Normal Button Clicked")}
                            >
                                Normal
                            </Button>
                            <Button
                                id="button-lg2"
                                colorScheme="primary"
                                variant="solid"
                                size="lg"
                                borderRadius={5}
                                style={{ marginRight: 20, marginBottom: 15 }}
                                elevation={true}
                                onClick={() => alert("Elevated Button Clicked")}
                            >
                                Elevated
                            </Button>
                            <Button
                                id="button-lg3"
                                variant="solid"
                                borderRadius={5}
                                as="a"
                                disable
                                size="lg"
                                style={{ marginBottom: 15 }}
                            >
                                Disable
                            </Button>
                        </Flex>
                        <Flex
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Button
                                id="button-lg4"
                                colorScheme="primary"
                                variant="outline"
                                size="lg"
                                borderRadius={5}
                                style={{ marginRight: 20, marginBottom: 15 }}
                                onClick={() => alert("Normal Button Clicked")}
                            >
                                Normal
                            </Button>
                            <Button
                                id="button-lg5"
                                colorScheme="primary"
                                variant="outline"
                                size="lg"
                                borderRadius={5}
                                elevation={true}
                                style={{ marginRight: 20, marginBottom: 15 }}
                                onClick={() => alert("Elevated Button Clicked")}
                            >
                                Elevated
                            </Button>
                            <Button
                                id="button-lg6"
                                variant="outline"
                                borderRadius={5}
                                as="a"
                                disable
                                size="lg"
                                style={{ marginBottom: 15 }}
                            >
                                Disable
                            </Button>
                        </Flex>
                    </FlexItem>
                    <FlexItem
                        flexBasis={{
                            lg: "33%",
                            md: "50%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 2 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            Medium Button
                        </Text>
                        <Flex
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            style={{ marginBottom: 30 }}
                        >
                            <Button
                                id="button-md1"
                                colorScheme="primary"
                                variant="solid"
                                size="md"
                                borderRadius={5}
                                style={{ marginRight: 20, marginBottom: 15 }}
                                onClick={() => alert("Normal Button Clicked")}
                            >
                                Normal
                            </Button>
                            <Button
                                id="button-md2"
                                colorScheme="primary"
                                variant="solid"
                                size="md"
                                borderRadius={5}
                                elevation
                                style={{ marginRight: 20, marginBottom: 15 }}
                                onClick={() => alert("Elevated Button Clicked")}
                            >
                                Elevated
                            </Button>
                            <Button
                                id="button-md3"
                                variant="solid"
                                borderRadius={5}
                                as="a"
                                disable
                                size="md"
                                style={{ marginBottom: 15 }}
                            >
                                Disable
                            </Button>
                        </Flex>
                        <Flex
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Button
                                id="button-md4"
                                colorScheme="primary"
                                variant="outline"
                                size="md"
                                borderRadius={5}
                                style={{ marginRight: 20, marginBottom: 15 }}
                                onClick={() => alert("Nomal Button Clicked")}
                            >
                                Normal
                            </Button>
                            <Button
                                id="button-md5"
                                colorScheme="primary"
                                variant="outline"
                                size="md"
                                borderRadius={5}
                                elevation
                                style={{ marginRight: 20, marginBottom: 15 }}
                                onClick={() => alert("Elevated Button Clicked")}
                            >
                                Elevated
                            </Button>
                            <Button
                                id="button-md6"
                                variant="outline"
                                borderRadius={5}
                                as="a"
                                disable
                                size="md"
                                style={{ marginBottom: 15 }}
                            >
                                Disable
                            </Button>
                        </Flex>
                    </FlexItem>
                    <FlexItem
                        flexBasis={{
                            lg: "30%",
                            md: "100%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 3 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            Small Button
                        </Text>
                        <Flex
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            style={{ marginRight: 20, marginBottom: 30 }}
                        >
                            <Button
                                id="button-sm1"
                                colorScheme="primary"
                                variant="solid"
                                size="sm"
                                borderRadius={5}
                                style={{ marginRight: 20, marginBottom: 15 }}
                                onClick={() => alert("Nomal Button Clicked")}
                            >
                                Normal
                            </Button>
                            <Button
                                id="button-sm2"
                                colorScheme="primary"
                                variant="solid"
                                size="sm"
                                borderRadius={5}
                                elevation
                                style={{ marginRight: 20, marginBottom: 15 }}
                                onClick={() => alert("Elevated Button Clicked")}
                            >
                                Elevated
                            </Button>
                            <Button
                                id="button-sm3"
                                variant="solid"
                                borderRadius={5}
                                as="a"
                                disable
                                size="sm"
                                style={{ marginBottom: 15 }}
                            >
                                Disable
                            </Button>
                        </Flex>
                        <Flex
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            style={{ marginRight: 20 }}
                        >
                            <Button
                                id="button-sm4"
                                colorScheme="primary"
                                variant="outline"
                                size="sm"
                                borderRadius={5}
                                style={{ marginRight: 20, marginBottom: 15 }}
                                onClick={() => alert("Nomal Button Clicked")}
                            >
                                Normal
                            </Button>
                            <Button
                                id="button-sm5"
                                colorScheme="primary"
                                variant="outline"
                                size="sm"
                                borderRadius={5}
                                elevation
                                style={{ marginRight: 20, marginBottom: 15 }}
                                onClick={() => alert("Elevated Button Clicked")}
                            >
                                Elevated
                            </Button>
                            <Button
                                id="button-sm6"
                                variant="outline"
                                borderRadius={5}
                                as="a"
                                disable
                                size="sm"
                                style={{ marginBottom: 15 }}
                            >
                                Disable
                            </Button>
                        </Flex>
                    </FlexItem>
                </Flex>
            </Section>
            {/* =========== Button Component End Here =========== */}

            {/* =========== Switch Component Start Here =========== */}
            <Section style={{ padding: "20px 9%" }}>
                <Text as="h2">Switch Components</Text>

                <Divider
                    orientation="horizontal"
                    variant="solid"
                    style={{ marginBottom: 20 }}
                />

                <Flex justifyContent="space-between" alignItems="center">
                    <FlexItem
                        flexBasis="100%"
                        style={{ flexGrow: 1, order: 1, marginBottom: 20 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            Switch with Size
                        </Text>
                        <Flex
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Switch
                                id="switch-lg1"
                                size="lg"
                                variant="solid"
                                colorScheme="primary"
                                rightLabel="Large Switch"
                                defaultToggled={true}
                                style={{
                                    marginRight: 50,
                                    marginBottom: 20,
                                    transition: ".6s ease-in-out",
                                    alignItems: "center",
                                }}
                                className="switchCustomeClass"
                            />
                            <Switch
                                id="switch-lg2"
                                size="md"
                                variant="solid"
                                rightLabel="Medium Switch"
                                colorScheme="primary"
                                defaultToggled
                                style={{
                                    marginRight: 50,
                                    marginBottom: 20,
                                    transition: ".6s ease-in-out",
                                    alignItems: "center",
                                }}
                            />
                            <Switch
                                id="switch-lg3"
                                size="sm"
                                variant="solid"
                                rightLabel="Small Switch"
                                colorScheme="primary"
                                defaultToggled
                                style={{
                                    marginRight: 50,
                                    marginBottom: 20,
                                    transition: ".6s ease-in-out",
                                    alignItems: "center",
                                }}
                            />
                        </Flex>
                    </FlexItem>
                    <FlexItem
                        id="flexitem"
                        flexBasis="100%"
                        style={{ flexGrow: 1, order: 2, marginBottom: 20 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            Switch with State
                        </Text>
                        <Flex
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Switch
                                id="switch-sm1"
                                size="md"
                                variant="solid"
                                colorScheme="primary"
                                defaultToggled={true}
                                rightLabel="Active State"
                                style={{
                                    marginRight: 50,
                                    marginBottom: 20,
                                    transition: ".6s ease-in-out",
                                    alignItems: "center",
                                }}
                            />
                            <Switch
                                id="switch-sm2"
                                size="md"
                                variant="solid"
                                colorScheme="primary"
                                disable
                                rightLabel="Disable State"
                                style={{
                                    marginRight: 50,
                                    marginBottom: 20,
                                    transition: ".6s ease-in-out",
                                    alignItems: "center",
                                }}
                            />
                            <Switch
                                id="switch-sm3"
                                size="md"
                                variant="solid"
                                colorScheme="primary"
                                rightLabel="Default State"
                                style={{
                                    marginRight: 50,
                                    marginBottom: 20,
                                    transition: ".6s ease-in-out",
                                    alignItems: "center",
                                }}
                            />
                        </Flex>
                    </FlexItem>
                    <FlexItem
                        id="flexitem"
                        flexBasis="100%"
                        style={{ flexGrow: 1, order: 3 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            Switch with Variants
                        </Text>
                        <Flex
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Switch
                                id="switch-md1"
                                size="md"
                                variant="solid"
                                colorScheme="primary"
                                rightLabel="Solid Switch"
                                style={{
                                    marginRight: 50,
                                    marginBottom: 20,
                                    transition: ".6s ease-in-out",
                                    alignItems: "center",
                                }}
                            />
                            <Switch
                                id="switch-md2"
                                size="md"
                                variant="outline"
                                colorScheme="primary"
                                rightLabel="Outline Switch"
                                style={{
                                    marginRight: 50,
                                    marginBottom: 20,
                                    transition: ".6s ease-in-out",
                                    alignItems: "center",
                                }}
                            />
                            <Switch
                                id="switch-md3"
                                size="md"
                                variant="outline"
                                colorScheme="primary"
                                rightLabel="Right Label"
                                leftLabel="Left Label"
                                style={{
                                    marginRight: 50,
                                    marginBottom: 20,
                                    transition: ".6s ease-in-out",
                                    alignItems: "center",
                                }}
                            />
                        </Flex>
                    </FlexItem>
                </Flex>
            </Section>
            {/* =========== Switch Component End Here =========== */}

            {/* =========== Badge Component Start Here =========== */}
            <Section style={{ padding: "20px 9%" }}>
                <Text as="h2">Badge Components</Text>

                <Divider
                    orientation="horizontal"
                    variant="solid"
                    style={{ marginBottom: 20 }}
                />

                <Flex justifyContent="space-between" alignItems="center">
                    <FlexItem
                        id="flexitem"
                        flexBasis={{
                            lg: "50%",
                            md: "50%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 1 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            Badges With Variants
                        </Text>
                        <Flex
                            justifyContent="space-between"
                            flexDirection={{ xs: "column" }}
                            alignItems="flex-start"
                            style={{ fontSize: 16 }}
                        >
                            <Badge
                                id="badge-s"
                                content="4"
                                variant="solid"
                                colorScheme="primary"
                                style={{
                                    fontSize: 12,
                                }}
                                className="badgeCustomClass"
                            >
                                <Text style={{ marginBottom: 20 }}>
                                    Solid Badge
                                </Text>
                            </Badge>
                            <Badge
                                id="badge-g"
                                content="4"
                                variant="ghost"
                                colorScheme="primary"
                                style={{
                                    fontSize: 12,
                                }}
                                className="badgeCustomClass"
                            >
                                <Text style={{ marginBottom: 20 }}>
                                    Ghost Badge
                                </Text>
                            </Badge>
                            <Badge
                                id="badge-o"
                                content="10"
                                variant="outline"
                                max={4}
                                colorScheme="primary"
                                style={{
                                    fontSize: 12,
                                }}
                                className="badgeCustomClass"
                            >
                                <Text style={{ marginBottom: 20 }}>
                                    Outline Badge
                                </Text>
                            </Badge>
                            <Badge
                                id="badge-count"
                                content="99+"
                                variant="solid"
                                colorScheme="primary"
                                style={{
                                    fontSize: 12,
                                }}
                                className="badgeCustomClass"
                            >
                                <Text style={{ marginBottom: 20 }}>
                                    Counter Badge
                                </Text>
                            </Badge>
                        </Flex>
                    </FlexItem>
                    <FlexItem
                        id="flexitem"
                        flexBasis={{
                            lg: "40%",
                            md: "40%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 1, marginTop: 40 }}
                    >
                        <Flex
                            justifyContent="space-between"
                            flexDirection={{ xs: "column" }}
                            alignItems="flex-start"
                            style={{ fontSize: 16 }}
                        >
                            <Badge
                                id="badge-text"
                                content="Text"
                                variant="solid"
                                colorScheme="primary"
                            >
                                <Text style={{ marginBottom: 20 }}>
                                    Text Badge
                                </Text>
                            </Badge>
                            <Badge
                                id="badge-h"
                                content="Tag"
                                variant="outline"
                                colorScheme="primary"
                                show={false}
                            >
                                <Text style={{ marginBottom: 20 }}>
                                    Hidden Badge
                                </Text>
                            </Badge>
                            <Badge
                                id="badge-dot"
                                borderRadius={5}
                                content=""
                                variant="dot"
                                colorScheme="primary"
                            >
                                <Text style={{ marginBottom: 20 }}>
                                    Dot Badge
                                </Text>
                            </Badge>
                        </Flex>
                    </FlexItem>
                </Flex>
            </Section>
            {/* =========== Badge Component End Here =========== */}

            {/* =========== Tag Component Start Here =========== */}
            <Section style={{ padding: "20px 9%" }}>
                <Text as="h2">Tag Components</Text>

                <Divider
                    orientation="horizontal"
                    variant="solid"
                    style={{ marginBottom: 20 }}
                />

                <Flex justifyContent="space-evenly" alignItems="center">
                    <FlexItem
                        flexBasis={{
                            lg: "40%",
                            md: "50%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 1 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            Large Tag
                        </Text>
                        <Flex
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Tag
                                id="tsg-lg1"
                                variant="contained"
                                colorScheme="primary"
                                size="lg"
                                style={{
                                    marginRight: 20,
                                    marginBottom: 15,
                                }}
                                className="tagCustomClass"
                            >
                                Contained
                            </Tag>

                            <Tag
                                id="tsg-lg2"
                                variant="outline"
                                colorScheme="primary"
                                size="lg"
                                style={{
                                    marginRight: 20,
                                    marginBottom: 15,
                                }}
                            >
                                Outline
                            </Tag>

                            <Tag
                                id="tsg-lg3"
                                variant="contained"
                                colorScheme="primary"
                                size="lg"
                                borderRadius={5}
                                style={{ marginBottom: 15 }}
                                startIcon={<Camera size="20px" />}
                            >
                                Icon Tag
                            </Tag>
                        </Flex>
                    </FlexItem>
                    <FlexItem
                        flexBasis={{
                            lg: "30%",
                            md: "50%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 2 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            Medium Tag
                        </Text>
                        <Flex
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Tag
                                id="tsg-md1"
                                variant="contained"
                                colorScheme="primary"
                                size="md"
                                style={{
                                    marginRight: 30,
                                    marginBottom: 15,
                                }}
                            >
                                Contained
                            </Tag>

                            <Tag
                                id="tsg-md2"
                                variant="outline"
                                colorScheme="primary"
                                size="md"
                                style={{ marginBottom: 15 }}
                            >
                                Outline
                            </Tag>
                        </Flex>
                    </FlexItem>
                    <FlexItem
                        flexBasis={{
                            lg: "30%",
                            md: "100%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 3 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            Small Tag
                        </Text>
                        <Flex
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Tag
                                id="tsg-sm1"
                                variant="contained"
                                colorScheme="primary"
                                size="sm"
                                style={{
                                    marginRight: 30,
                                    marginBottom: 15,
                                }}
                            >
                                Contained
                            </Tag>

                            <Tag
                                id="tsg-sm2"
                                variant="outline"
                                colorScheme="primary"
                                size="sm"
                                style={{ marginBottom: 15 }}
                            >
                                Outline
                            </Tag>
                        </Flex>
                    </FlexItem>
                </Flex>
            </Section>
            {/* =========== Tag Component End Here =========== */}

            {/* =========== Radio Component Start Here =========== */}
            <Section style={{ padding: "20px 9%" }}>
                <Text as="h2">Radio Components</Text>

                <Divider
                    orientation="horizontal"
                    variant="solid"
                    style={{ marginBottom: 20 }}
                />

                <Flex justifyContent="space-evenly" alignItems="center">
                    <FlexItem
                        flexBasis={{
                            lg: "40%",
                            md: "50%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 1, marginBottom: 20 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            Radio
                        </Text>
                        <Flex
                            justifyContent="space-between"
                            alignItems="flex-start"
                            style={{ marginRight: 40 }}
                        >
                            <Radio
                                id="radio2"
                                variant="solid"
                                colorScheme="primary"
                                checked={true}
                                title="Solid Radio"
                                className="radioCustomClass"
                                style={{ marginBottom: 10 }}
                            />
                            <Radio
                                id="radio1"
                                variant="outline"
                                checked={true}
                                colorScheme="primary"
                                title="Outline Radio"
                                style={{ marginBottom: 10 }}
                            />

                            <Radio
                                id="radio3"
                                variant="solid"
                                disable={true}
                                title="Disabled Radio"
                                style={{ marginBottom: 10 }}
                            />
                        </Flex>
                    </FlexItem>
                    <FlexItem
                        flexBasis={{
                            lg: "30%",
                            md: "50%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 2, marginBottom: 20 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            Horizontal RadioGroup
                        </Text>
                        <Flex justifyContent="flex-start">
                            <RadioGroup
                                variant="solid"
                                colorScheme="primary"
                                value="Radio1"
                                className="radioGroupClass"
                            >
                                <Radio
                                    name="test"
                                    id="1"
                                    value="Radio1"
                                    title="Radio"
                                />
                                <Radio
                                    name="test"
                                    id="2"
                                    value="Radio2"
                                    title="Radio"
                                    style={{ marginLeft: 10 }}
                                />
                                <Radio
                                    name="test"
                                    id="3"
                                    value="Radio3"
                                    title="Radio"
                                    style={{ marginLeft: 10 }}
                                />
                                <Radio
                                    name="test"
                                    id="4"
                                    value="Radio4"
                                    title="Radio"
                                    style={{ marginLeft: 10 }}
                                />
                            </RadioGroup>
                        </Flex>
                    </FlexItem>
                    <FlexItem
                        flexBasis={{ lg: "30%", md: "100%", sm: "100%" }}
                        style={{ flexGrow: 1, order: 3 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            Vertical Radio Group
                        </Text>
                        <Flex
                            justifyContent="space-between"
                            alignItems="flex-start"
                            style={{ marginRight: 20 }}
                        >
                            <RadioGroup
                                variant="outline"
                                colorScheme="primary"
                                value="RadioVer1"
                                vertical
                            >
                                <Radio
                                    name="test"
                                    id="11"
                                    value="RadioVer1"
                                    title="Radio"
                                    style={{ marginBottom: 10 }}
                                />
                                <Radio
                                    name="test"
                                    id="12"
                                    value="RadioVer2"
                                    title="Radio"
                                    style={{ marginBottom: 10 }}
                                />
                                <Radio
                                    name="test"
                                    id="13"
                                    value="RadioVer3"
                                    title="Radio"
                                    style={{ marginBottom: 10 }}
                                />
                            </RadioGroup>
                        </Flex>
                    </FlexItem>
                </Flex>
            </Section>
            {/* =========== Radio Component End Here =========== */}

            {/* =========== CheckBox Component Start Here =========== */}
            <Section style={{ padding: "20px 9%" }}>
                <Text as="h2">CheckBox Components</Text>

                <Divider
                    orientation="horizontal"
                    variant="solid"
                    style={{ marginBottom: 20 }}
                />

                <Flex justifyContent="space-evenly" alignItems="center">
                    <FlexItem
                        flexBasis={{
                            lg: "40%",
                            md: "50%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 1, marginBottom: 20 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            Large CheckBox
                        </Text>
                        <Flex
                            justifyContent="space-between"
                            alignItems="flex-start"
                            style={{ marginRight: 120 }}
                        >
                            <Checkbox
                                id="checkbox1"
                                variant="outline"
                                icon={TickImage}
                                label="Uncontrolled Solid Variant Checkbox"
                                direction="rtl"
                                size="lg"
                                className="checkboxClass"
                                style={{
                                    marginRight: 10,
                                    marginBottom: 20,
                                }}
                            />
                            <Checkbox
                                id="checkbox2"
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                                icon={TickWhite}
                                variant="solid"
                                label="Solid Variant Checkbox"
                                size="lg"
                                className={"checkbox_solid"}
                                style={{
                                    "&.checkbox_solid": {
                                        marginBottom: 20,
                                    },
                                }}
                            />
                            <Checkbox
                                id="checkbox3"
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                                icon={TickImage}
                                variant="outline"
                                label="Outline Variant Checkbox"
                                size="lg"
                                style={{ marginBottom: 20 }}
                            />
                        </Flex>
                    </FlexItem>
                    <FlexItem
                        flexBasis={{
                            lg: "30%",
                            md: "50%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 2, marginBottom: 20 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            Medium Checkbox
                        </Text>
                        <Flex
                            justifyContent="space-between"
                            alignItems="flex-start"
                            style={{ marginRight: 80 }}
                        >
                            <Checkbox
                                id="checkbox4"
                                variant="outline"
                                icon={TickImage}
                                label="Uncontrolled Solid Variant Checkbox"
                                direction="rtl"
                                defaultChecked={true}
                                size="md"
                                style={{ marginBottom: 20 }}
                            />
                            <Checkbox
                                id="checkbox5"
                                icon={TickImage}
                                onChange={(e) => setIsChecked(e.target.checked)}
                                variant="outline"
                                disable
                                label="disabled Checkbox"
                                size="md"
                                style={{ marginBottom: 20 }}
                            />
                            <Checkbox
                                id="checkbox6"
                                checked={isChecked}
                                icon={TickImage}
                                variant="outline"
                                label="error Checkbox"
                                error
                                errorMessage="testing error message"
                                size="md"
                                style={{
                                    marginBottom: 20,
                                }}
                            />
                        </Flex>
                    </FlexItem>
                    <FlexItem
                        flexBasis={{
                            lg: "30%",
                            md: "100%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 3 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            Small Checkbox
                        </Text>
                        <Flex
                            justifyContent="space-between"
                            alignItems="flex-start"
                            style={{ marginRight: 80 }}
                        >
                            <Checkbox
                                id="checkbox7"
                                variant="outline"
                                icon={TickImage}
                                label="Uncontrolled Solid Variant Checkbox"
                                direction="rtl"
                                size="sm"
                                style={{ marginBottom: 20 }}
                            />
                            <Checkbox
                                id="checkbox8"
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                                icon={TickWhite}
                                variant="solid"
                                label="Solid Variant Checkbox"
                                size="sm"
                                style={{ marginBottom: 20 }}
                            />
                            <Checkbox
                                id="checkbox9"
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                                icon={TickImage}
                                variant="outline"
                                label="Outline Variant Checkbox"
                                size="sm"
                                style={{ marginBottom: 20 }}
                            />
                        </Flex>
                    </FlexItem>
                </Flex>
            </Section>
            {/* =========== CheckBox Component End Here =========== */}

            {/* =========== IconBox Component Start Here =========== */}
            <Section style={{ padding: "20px 9%" }}>
                <Text as="h2">IconBox Components</Text>

                <Divider
                    orientation="horizontal"
                    variant="solid"
                    style={{ marginBottom: 20 }}
                />

                <Flex justifyContent="space-evenly" alignItems="center">
                    <FlexItem
                        flexBasis={{
                            lg: "50%",
                            md: "100%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 1 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 30 }}
                        >
                            IconBox with Variants
                        </Text>
                        <Flex
                            justifyContent="space-between"
                            alignItems="flex-start"
                            style={{ marginRight: 20 }}
                        >
                            <div style={{ textAlign: "center" }}>
                                <IconBox
                                    aria-label=""
                                    id="icon1"
                                    icon={
                                        <img
                                            src={flower1}
                                            alt="test"
                                            height="10px"
                                            width="10px"
                                            style={{ height: 10, width: 10 }}
                                        />
                                    }
                                    variant="outline"
                                    disable
                                />
                                <Text style={{ marginBottom: 15 }}>
                                    Disable IconBox
                                </Text>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <IconBox
                                    aria-label=""
                                    id="icon2"
                                    icon={
                                        <Image
                                            src={flower1}
                                            alt="test"
                                            height={10}
                                            width={10}
                                            layout="fixed"
                                        />
                                    }
                                    variant="outline"
                                    className="iconCustomClass"
                                    onClick={() => alert("Icon Box is Clicked")}
                                />
                                <Text style={{ marginBottom: 15 }}>
                                    Clickable IconBox
                                </Text>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <IconBox
                                    aria-label="Icon box label"
                                    id="icon3"
                                    icon={<Codesandbox size="20px" />}
                                    variant="outline"
                                    style={{ border: 0 }}
                                />
                                <Text style={{ marginBottom: 15 }}>
                                    IconBox
                                </Text>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <Tooltip
                                    label="IconBox with Tooltip"
                                    placement="top"
                                    size="sm"
                                    arrow
                                    style={{
                                        backgroundColor: "#f1f1f1",
                                        color: "grey",
                                        border: "1px solid grey",
                                    }}
                                >
                                    <IconBox
                                        aria-label="icon to click"
                                        id="icon4"
                                        icon={<Info size="16px" color="#fff" />}
                                        variant="solid"
                                        borderRadius={6}
                                    />
                                </Tooltip>

                                <Text style={{ marginBottom: 15 }}>
                                    IconBox with Tooltip
                                </Text>
                            </div>
                        </Flex>
                    </FlexItem>
                    <FlexItem
                        flexBasis={{
                            lg: "50%",
                            md: "100%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 2 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 30 }}
                        >
                            IconBox with colorScheme
                        </Text>
                        <Flex
                            justifyContent="space-between"
                            alignItems="flex-start"
                        >
                            <div style={{ textAlign: "center" }}>
                                <IconBox
                                    aria-label="icon to click"
                                    id="icon5"
                                    colorScheme="primary"
                                    variant="solid"
                                    borderRadius={6}
                                />
                                <Text style={{ marginBottom: 15 }}>
                                    Primary IconBox
                                </Text>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <IconBox
                                    aria-label="icon to click"
                                    id="icon6"
                                    colorScheme="secondary"
                                    variant="solid"
                                    borderRadius={6}
                                />
                                <Text style={{ marginBottom: 15 }}>
                                    Secondary IconBox
                                </Text>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <IconBox
                                    aria-label="icon to click"
                                    id="icon7"
                                    colorScheme="accent"
                                    variant="solid"
                                    borderRadius={6}
                                />
                                <Text style={{ marginBottom: 15 }}>
                                    Accent IconBox
                                </Text>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <IconBox
                                    aria-label="icon to click"
                                    id="icon8"
                                    colorScheme="error"
                                    variant="solid"
                                    borderRadius={6}
                                />
                                <Text style={{ marginBottom: 15 }}>
                                    Error IconBox
                                </Text>
                            </div>
                        </Flex>
                    </FlexItem>
                </Flex>
            </Section>
            {/* =========== IconBox Component End Here =========== */}

            {/* =========== Tooltip Component Start Here =========== */}
            <Section style={{ padding: "20px 9%" }}>
                <Text as="h2">Tooltip Components</Text>

                <Divider
                    orientation="horizontal"
                    variant="solid"
                    style={{ marginBottom: 20 }}
                />

                <Flex
                    flexDirection={{ xs: "row" }}
                    justifyContent="space-around"
                    style={{
                        [`@media ${BreakPoints.tabletS}`]: {
                            justifyContent: "space-between",
                        },
                    }}
                >
                    <FlexItem
                        flexBasis={{
                            lg: "46%",
                            md: "100%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 1 }}
                    >
                        <Flex
                            justifyContent="space-between"
                            style={{ marginBottom: 20 }}
                        >
                            <Tooltip
                                label="Add"
                                placement="top"
                                className="tooltipClass"
                                colorScheme="primary"
                                borderColor="#212121"
                                size="sm"
                                arrow
                                style={{
                                    backgroundColor: "#f1f1f1",
                                    color: "grey",
                                    borderColor: "#212121",
                                }}
                            >
                                <Button
                                    variant="outline"
                                    size="lg"
                                    style={{
                                        borderRadius: 4,
                                    }}
                                >
                                    Top
                                </Button>
                            </Tooltip>
                            <Tooltip
                                label="Add"
                                placement="top-start"
                                size="sm"
                                style={{
                                    backgroundColor: "#f1f1f1",
                                    color: "grey",
                                }}
                            >
                                <Button
                                    variant="solid"
                                    size="lg"
                                    style={{ borderRadius: 4 }}
                                >
                                    Top Start
                                </Button>
                            </Tooltip>
                            <Tooltip
                                label="Add"
                                placement="top-end"
                                size="sm"
                                style={{
                                    backgroundColor: "#f1f1f1",
                                    color: "grey",
                                }}
                            >
                                <Button
                                    variant="solid"
                                    size="lg"
                                    style={{ borderRadius: 4 }}
                                >
                                    Top End
                                </Button>
                            </Tooltip>
                        </Flex>
                    </FlexItem>
                    <FlexItem
                        flexBasis={{
                            lg: "46%",
                            md: "100%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 2 }}
                    >
                        <Flex
                            justifyContent="space-between"
                            style={{ marginBottom: 20 }}
                        >
                            <Tooltip
                                label="Add"
                                placement="left"
                                arrow
                                size="sm"
                                style={{
                                    backgroundColor: "#f1f1f1",
                                    color: "grey",
                                }}
                            >
                                <Button
                                    variant="outline"
                                    size="lg"
                                    style={{ borderRadius: 4 }}
                                >
                                    Left
                                </Button>
                            </Tooltip>
                            <Tooltip
                                label="Add"
                                placement="left-start"
                                size="sm"
                                style={{
                                    backgroundColor: "#f1f1f1",
                                    color: "grey",
                                }}
                            >
                                <Button
                                    variant="solid"
                                    size="lg"
                                    style={{ borderRadius: 4 }}
                                >
                                    Left Start
                                </Button>
                            </Tooltip>
                            <Tooltip
                                label="Add"
                                placement="left-end"
                                size="sm"
                                style={{
                                    backgroundColor: "#f1f1f1",
                                    color: "grey",
                                }}
                            >
                                <Button
                                    variant="solid"
                                    size="lg"
                                    style={{ borderRadius: 4 }}
                                >
                                    Left End
                                </Button>
                            </Tooltip>
                        </Flex>
                    </FlexItem>
                </Flex>

                <Divider
                    orientation="horizontal"
                    variant="dotted"
                    style={{ marginBottom: 20 }}
                />

                <Flex
                    justifyContent="space-around"
                    flexDirection={{ xs: "row" }}
                    style={{
                        [`@media ${BreakPoints.tabletS}`]: {
                            justifyContent: "space-between",
                        },
                    }}
                >
                    <FlexItem
                        flexBasis={{
                            lg: "46%",
                            md: "100%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 1 }}
                    >
                        <Flex
                            justifyContent="space-between"
                            style={{ marginBottom: 20 }}
                        >
                            <Tooltip
                                label="Add"
                                placement="bottom"
                                arrow
                                size="sm"
                                style={{
                                    backgroundColor: "#f1f1f1",
                                    color: "grey",
                                }}
                            >
                                <Button
                                    variant="outline"
                                    size="lg"
                                    style={{ borderRadius: 4 }}
                                >
                                    Bottom
                                </Button>
                            </Tooltip>
                            <Tooltip
                                label="Add"
                                placement="bottom-start"
                                size="sm"
                                style={{
                                    backgroundColor: "#f1f1f1",
                                    color: "grey",
                                }}
                            >
                                <Button
                                    variant="solid"
                                    size="lg"
                                    style={{ borderRadius: 4 }}
                                >
                                    Bottom Start
                                </Button>
                            </Tooltip>
                            <Tooltip
                                label="Add"
                                placement="bottom-end"
                                size="sm"
                                style={{
                                    backgroundColor: "#f1f1f1",
                                    color: "grey",
                                }}
                            >
                                <Button
                                    variant="solid"
                                    size="lg"
                                    style={{ borderRadius: 4 }}
                                >
                                    Bottom End
                                </Button>
                            </Tooltip>
                        </Flex>
                    </FlexItem>
                    <FlexItem
                        flexBasis={{
                            lg: "46%",
                            md: "100%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 2 }}
                    >
                        <Flex
                            justifyContent="space-between"
                            style={{ marginBottom: 20 }}
                        >
                            <Tooltip
                                label="Add"
                                placement="right"
                                arrow
                                size="sm"
                                style={{
                                    backgroundColor: "#f1f1f1",
                                    color: "grey",
                                }}
                            >
                                <Button
                                    variant="outline"
                                    size="lg"
                                    style={{ borderRadius: 4 }}
                                >
                                    Right
                                </Button>
                            </Tooltip>

                            <Tooltip
                                label="Add"
                                placement="right-start"
                                size="sm"
                                style={{
                                    backgroundColor: "#f1f1f1",
                                    color: "grey",
                                }}
                            >
                                <Button
                                    variant="solid"
                                    size="lg"
                                    style={{ borderRadius: 4 }}
                                >
                                    Right Start
                                </Button>
                            </Tooltip>
                            <Tooltip
                                label="Add"
                                placement="right-end"
                                size="sm"
                                style={{
                                    backgroundColor: "#f1f1f1",
                                    color: "grey",
                                }}
                            >
                                <Button
                                    variant="solid"
                                    size="lg"
                                    style={{ borderRadius: 4 }}
                                >
                                    Right End
                                </Button>
                            </Tooltip>
                        </Flex>
                    </FlexItem>
                </Flex>
            </Section>
            {/* =========== Tooltip Component End Here =========== */}

            {/* =========== Card Component Start Here =========== */}

            <Section style={{ padding: "20px 9%" }}>
                <Text as="h2">Card Components</Text>

                <Divider
                    orientation="horizontal"
                    variant="solid"
                    style={{ marginBottom: 20 }}
                />

                <Flex justifyContent="space-evenly" alignItems="center">
                    <FlexItem
                        id="flexitem"
                        flexBasis="100%"
                        style={{ flexGrow: 1, order: 1 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            Card with Variants
                        </Text>
                        <Flex justifyContent="space-evenly" alignItems="center">
                            <FlexItem
                                id="flexitem"
                                flexBasis="100%"
                                style={{ flexGrow: 1, order: 1 }}
                            >
                                <Flex
                                    justifyContent="space-evenly"
                                    alignItems="flex-start"
                                    style={{
                                        marginBottom: 30,
                                        [`@media ${BreakPoints.tabletS}`]: {
                                            justifyContent: "space-between",
                                        },
                                    }}
                                >
                                    <Card
                                        variant="solid"
                                        justifyContent="space-between"
                                        isHover
                                        style={{
                                            width: 280,
                                            minHeight: 425,
                                            borderRadius: 5,
                                            paddingBottom: 10,
                                            overflow: "hidden",
                                            marginBottom: 20,
                                        }}
                                        border={true}
                                        className={"headerFooterCard"}
                                    >
                                        <header
                                            style={{
                                                padding: 15,
                                            }}
                                        >
                                            <Flex
                                                justifyContent="space-between"
                                                flexDirection={{ sm: "row" }}
                                            >
                                                <FlexItem>
                                                    <Tag
                                                        variant="contained"
                                                        colorScheme="error"
                                                        size="md"
                                                        borderRadius="50px"
                                                        style={{
                                                            width: 30,
                                                            height: 30,
                                                            alignItems:
                                                                "center",
                                                            justifyContent:
                                                                "center",
                                                            padding: 0,
                                                        }}
                                                    >
                                                        D
                                                    </Tag>
                                                </FlexItem>
                                                <FlexItem>
                                                    <Text
                                                        as="strong"
                                                        fontSize="14px"
                                                        lineClamp={"1"}
                                                    >
                                                        New Flower Species:
                                                        Dalhia
                                                    </Text>
                                                    <Text
                                                        as="p"
                                                        fontSize="12px"
                                                    >
                                                        : also called Asteraceae
                                                    </Text>
                                                </FlexItem>
                                                <FlexItem>
                                                    <div
                                                        style={{
                                                            width: 20,
                                                            height: 20,
                                                        }}
                                                    >
                                                        <MoreVertical
                                                            size="20px"
                                                            color="#8f8f8f"
                                                            style={{
                                                                marginLeft: 10,
                                                            }}
                                                        />
                                                    </div>
                                                </FlexItem>
                                            </Flex>
                                        </header>
                                        <div
                                            className="cardImgWrapper"
                                            style={{
                                                width: "100%",
                                                height: "220px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <img
                                                src={flower1}
                                                placeholder="Flower"
                                                style={{
                                                    height: "100%",
                                                    width: "100%",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </div>

                                        <Text
                                            as="p"
                                            fontSize="15px"
                                            style={{ margin: "15px 15px 15px" }}
                                        >
                                            Dahlia is a genus of bushy,
                                            tuberous, herbaceous perennial
                                            plants native to Mexico and Central
                                            America.
                                        </Text>
                                        <Flex
                                            justifyContent="space-between"
                                            style={{
                                                marginLeft: 15,
                                                marginRight: 15,
                                                marginBottom: 5,
                                            }}
                                        >
                                            <Button
                                                colorScheme="primary"
                                                variant="solid"
                                                borderRadius={5}
                                            >
                                                Learn More
                                            </Button>
                                            <Button
                                                variant="solid"
                                                colorScheme="error"
                                                borderRadius={5}
                                            >
                                                Close
                                            </Button>
                                        </Flex>
                                    </Card>

                                    <Card
                                        variant="solid"
                                        justifyContent="space-between"
                                        isHover
                                        style={{
                                            width: 280,
                                            minHeight: 425,
                                            borderRadius: 5,
                                            paddingBottom: 10,
                                            overflow: "hidden",
                                            marginBottom: 20,
                                        }}
                                        border={true}
                                        className={"headerFooterCard"}
                                    >
                                        <div
                                            className="cardImgWrapper"
                                            style={{
                                                width: "100%",
                                                height: "220px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <img
                                                src={flower1}
                                                placeholder="Flower"
                                                style={{
                                                    height: "100%",
                                                    width: "100%",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </div>

                                        <Text
                                            as="p"
                                            fontSize="15px"
                                            style={{ margin: "15px 15px 15px" }}
                                        >
                                            Dahlia is a genus of bushy,
                                            tuberous, herbaceous perennial
                                            plants native to Mexico and Central
                                            America. The dahlia was declared the
                                            national flower of Mexico in 1963.
                                        </Text>

                                        <Divider
                                            variant="solid"
                                            orientation={"horizontal"}
                                            style={{
                                                borderWidth: 1,
                                                borderBottomColor: "#cecece",
                                            }}
                                        ></Divider>
                                        <footer>
                                            <Flex
                                                justifyContent="space-between"
                                                style={{
                                                    marginLeft: 15,
                                                    marginRight: 15,
                                                    marginBottom: 5,
                                                }}
                                            >
                                                <Button
                                                    colorScheme="primary"
                                                    variant="outline"
                                                    borderRadius={5}
                                                >
                                                    Learn More
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    colorScheme="error"
                                                    borderRadius={5}
                                                >
                                                    Close
                                                </Button>
                                            </Flex>
                                        </footer>
                                    </Card>

                                    <Card
                                        variant="outline"
                                        justifyContent="space-between"
                                        isHover
                                        style={{
                                            width: 280,
                                            minHeight: 425,
                                            borderRadius: 5,
                                            paddingBottom: 10,
                                            overflow: "hidden",
                                            marginBottom: 20,
                                        }}
                                        border={true}
                                    >
                                        <div
                                            className="cardImgWrapper"
                                            style={{
                                                width: "100%",
                                                height: "220px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <img
                                                src={flower1}
                                                placeholder="Flower"
                                                style={{
                                                    height: "100%",
                                                    width: "100%",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </div>
                                        <Text
                                            as="p"
                                            fontSize="15px"
                                            style={{ margin: "15px 15px 15px" }}
                                        >
                                            Dahlia is a genus of bushy,
                                            tuberous, herbaceous perennial
                                            plants native to Mexico and Central
                                            America. The dahlia was declared the
                                            national flower of Mexico in 1963.
                                        </Text>
                                        <Flex
                                            justifyContent="flex-start"
                                            style={{
                                                margin: "10px 15px 10px",
                                            }}
                                        >
                                            <Heart
                                                color="#8f8f8f"
                                                style={{ marginRight: 20 }}
                                                size="20px"
                                                fill="#8f8f8f"
                                            />
                                            <Share2
                                                color="#8f8f8f"
                                                size="20px"
                                                fill="#8f8f8f"
                                            />
                                        </Flex>
                                    </Card>
                                </Flex>
                            </FlexItem>
                            <FlexItem
                                id="flexitem"
                                flexBasis="100%"
                                style={{ flexGrow: 1, order: 2 }}
                            >
                                <Flex
                                    justifyContent="space-evenly"
                                    alignItems="flex-start"
                                    style={{
                                        marginBottom: 30,
                                        [`@media ${BreakPoints.tabletS}`]: {
                                            justifyContent: "space-between",
                                        },
                                    }}
                                >
                                    <Card
                                        justifyContent="space-between"
                                        isHover={true}
                                        style={{
                                            width: 280,
                                            minHeight: 425,
                                            borderRadius: 5,
                                            paddingBottom: 10,
                                            overflow: "hidden",
                                            marginBottom: 20,
                                        }}
                                        border={true}
                                    >
                                        <div
                                            className="cardImgWrapper"
                                            style={{
                                                width: "100%",
                                                height: "220px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <img
                                                src={flower1}
                                                placeholder="Flower"
                                                style={{
                                                    height: "100%",
                                                    width: "100%",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </div>
                                        <Text
                                            as="h1"
                                            style={{
                                                marginLeft: 15,
                                                marginTop: 10,
                                            }}
                                        >
                                            Dahlia
                                        </Text>
                                        <Text
                                            as="p"
                                            fontSize="15px"
                                            style={{ margin: "15px 15px 15px" }}
                                        >
                                            Dahlia is a genus of bushy,
                                            tuberous, herbaceous perennial
                                            plants native to Mexico and Central
                                            America.
                                        </Text>
                                        <footer style={{ padding: "0 15px" }}>
                                            <Button
                                                variant="outline"
                                                borderRadius={5}
                                                style={{ width: "100%" }}
                                            >
                                                Share
                                            </Button>
                                        </footer>
                                    </Card>

                                    <Card
                                        justifyContent="space-between"
                                        isHover
                                        style={{
                                            width: 280,
                                            minHeight: 425,
                                            borderRadius: 5,
                                            paddingBottom: 10,
                                            overflow: "hidden",
                                            marginBottom: 20,
                                        }}
                                        border={true}
                                        className="onlyBodyCard"
                                    >
                                        <Text
                                            as="h1"
                                            style={{
                                                marginLeft: 15,
                                                marginTop: 10,
                                            }}
                                        >
                                            Dahlia
                                        </Text>
                                        <Text
                                            as="div"
                                            style={{
                                                padding: "10px 15px",
                                                width: "100%",
                                            }}
                                        >
                                            The dahlia was declared the national
                                            flower of Mexico in 1963. The tubers
                                            were grown as a food crop by the
                                            Aztecs, but this use largely died
                                            out after the Spanish Conquest.
                                            Attempts to introduce the tubers as
                                            a food crop in Europe were
                                            unsuccessful. The dahlia was
                                            declared the national flower of
                                            Mexico in 1963. The tubers were
                                            grown as a food crop by the Aztecs,
                                            but this use largely died out after
                                            the Spanish Conquest.
                                        </Text>

                                        <footer style={{ padding: "0 15px" }}>
                                            <Button
                                                variant="text"
                                                borderRadius={5}
                                                style={{ width: "100%" }}
                                            >
                                                Learn More
                                            </Button>
                                        </footer>
                                    </Card>

                                    <Card
                                        variant="solid"
                                        justifyContent="space-between"
                                        isHover
                                        style={{
                                            width: 280,
                                            minHeight: 425,
                                            borderRadius: 5,
                                            paddingBottom: 10,
                                            overflow: "hidden",
                                            marginBottom: 20,
                                        }}
                                        border={true}
                                        className={"headerFooterCard"}
                                    >
                                        <div
                                            className="cardImgWrapper"
                                            style={{
                                                width: "100%",
                                                height: "220px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <img
                                                src={flower1}
                                                placeholder="Flower"
                                                style={{
                                                    height: "100%",
                                                    width: "100%",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </div>

                                        <Text
                                            as="p"
                                            fontSize="15px"
                                            style={{ margin: "15px 15px 15px" }}
                                        >
                                            Dahlia is a genus of bushy,
                                            tuberous, herbaceous perennial
                                            plants native to Mexico and Central
                                            America. Dahlia is a genus of bushy,
                                            tuberous, herbaceous perennial
                                            plants native to Mexico and Central
                                            America.
                                        </Text>
                                    </Card>
                                </Flex>
                            </FlexItem>
                        </Flex>
                    </FlexItem>
                </Flex>
            </Section>

            {/* =========== Card Component End Here =========== */}

            {/* =========== Searchbar Component Start Here =========== */}

            {/* <Section style={{ padding: "20px 9%" }}>
                <Text as="h2">SearchBar Components</Text>

                <Divider
                    orientation="horizontal"
                    variant="solid"
                    style={{ marginBottom: 20 }}
                />

                <Flex justifyContent="flex-start" alignItems="center">
                    <FlexItem
                        flexBasis={{
                            lg: "60%",
                            md: "60%",
                            sm: "80%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 1 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            SearchBar with Variants
                        </Text>
                        <Flex
                            justifyContent="space-between"
                            alignItems="flex-start"
                        >
                            <SearchBar
                                style={{
                                    marginBottom: 20,
                                }}
                                variant="outline"
                                id="search-o"
                            />
                            <SearchBar
                                icon={<Search color="#1d78f3" size="16px" />}
                                style={{ marginBottom: 20 }}
                                variant="ghost"
                                id="search-g"
                                className="searchClass"
                            />
                            <SearchBar
                                variant="solid"
                                id="search-s"
                                icon={<Search color="#fff" size="16px" />}
                            />
                        </Flex>
                    </FlexItem>
                </Flex>
            </Section> */}

            {/* =========== Searchbar Component End Here =========== */}

            {/* =========== Notification Component Start Here =========== */}

            <Section style={{ padding: "20px 9%" }}>
                <Text as="h2">Notification Components</Text>

                <Divider
                    orientation="horizontal"
                    variant="solid"
                    style={{ marginBottom: 20 }}
                />

                <Flex justifyContent="flex-start" alignItems="center">
                    <FlexItem
                        flexBasis={{
                            lg: "50%",
                            md: "70%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 1 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 0 }}
                        >
                            Notification with Variants
                        </Text>
                        <Flex
                            justifyContent="space-between"
                            alignItems="flex-start"
                            flexDirection={{ xs: "column" }}
                        >
                            <Notification
                                colorScheme="primary"
                                id="Notification1"
                                justifyContent="center"
                                alignItems="center"
                                variant="contained"
                                closeIcon={<X size="16px" color="#fff" />}
                                borderRadius="5px"
                                style={{
                                    padding: 15,
                                    marginTop: 20,
                                    marginBottom: 20,
                                    minWidth: "441px",
                                }}
                                className="notificationClass"
                            >
                                <Text
                                    style={{ color: "#fff", marginRight: 10 }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </Text>
                            </Notification>
                            <Notification
                                colorScheme="primary"
                                id="Notification1"
                                justifyContent="center"
                                alignItems="center"
                                variant="ghost"
                                borderRadius="5px"
                                style={{
                                    padding: 15,
                                    marginTop: 20,
                                    marginBottom: 20,
                                    minWidth: "441px",
                                }}
                            >
                                <Text
                                    style={{
                                        color: "#1d78f3",
                                        marginRight: 10,
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </Text>
                            </Notification>
                            <Notification
                                colorScheme="primary"
                                id="Notification1"
                                justifyContent="center"
                                alignItems="center"
                                variant="outline"
                                closeIcon={
                                    <X
                                        size="16px"
                                        color={
                                            themeMode === "light"
                                                ? "#000000"
                                                : "#fff"
                                        }
                                    />
                                }
                                borderRadius="5px"
                                style={{
                                    padding: 15,
                                    marginTop: 20,
                                    marginBottom: 20,
                                    minWidth: "441px",
                                }}
                            >
                                <Text style={{ marginRight: 10 }}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </Text>
                            </Notification>
                        </Flex>
                    </FlexItem>
                    <FlexItem
                        flexBasis={{
                            lg: "50%",
                            md: "70%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 2 }}
                    >
                        <Flex
                            style={{ marginTop: 20 }}
                            justifyContent="space-between"
                            flexDirection={{ xs: "column" }}
                            alignItems="flex-start"
                        >
                            <Notification
                                colorScheme="error"
                                id="Notification2"
                                justifyContent="center"
                                alignItems="center"
                                variant="outline"
                                startIcon={
                                    <AlertCircle size="20px" color="red" />
                                }
                                borderRadius="5px"
                                style={{
                                    padding: 15,
                                    marginTop: 20,
                                    marginBottom: 20,
                                    minWidth: "448px",
                                }}
                            >
                                <Text style={{ marginRight: 10 }}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </Text>
                            </Notification>
                            <Notification
                                colorScheme="secondary"
                                id="Notification3"
                                justifyContent="center"
                                alignItems="center"
                                variant="outline"
                                startIcon={<Check color="green" size="20px" />}
                                borderRadius="5px"
                                style={{
                                    padding: 15,
                                    marginTop: 20,
                                    marginBottom: 20,
                                    minWidth: "448px",
                                }}
                            >
                                <Text style={{ marginRight: 10 }}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </Text>
                            </Notification>
                            <Notification
                                colorScheme="accent"
                                id="Notification4"
                                justifyContent="center"
                                alignItems="center"
                                variant="outline"
                                borderRadius="5px"
                                style={{
                                    padding: 15,
                                    marginTop: 20,
                                    marginBottom: 20,
                                    minWidth: "448px",
                                }}
                            >
                                <Text style={{ marginRight: 10 }}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </Text>
                            </Notification>
                        </Flex>
                    </FlexItem>
                </Flex>
            </Section>

            {/* =========== Notification Component End Here =========== */}

            {/* =========== Tab Component Start Here =========== */}

            <Section style={{ padding: "20px 9%" }}>
                <Text as="h2">Tab Components</Text>

                <Divider
                    orientation="horizontal"
                    variant="solid"
                    style={{ marginBottom: 20 }}
                />

                <Flex justifyContent="flex-start" alignItems="center">
                    <FlexItem
                        id="flexitem"
                        flexBasis="100%"
                        style={{ flexGrow: 1, order: 1 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 50 }}
                        >
                            Vertical Tab
                        </Text>
                        <Flex
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Tab
                                vertical
                                isResponsive
                                className="tabCustomClass"
                                selected={0}
                                variant="bordered"
                                style={{
                                    width: "100%",
                                    padding: 0,
                                    borderWidth: "1px",
                                    borderStyle: "solid",
                                    borderColor:
                                        themeMode === "light"
                                            ? "#d0d0d0"
                                            : "#1d78f3",
                                    borderRadius: 5,
                                }}
                            >
                                <TabList
                                    style={{
                                        backgroundColor:
                                            themeMode === "light"
                                                ? ""
                                                : "#121212",
                                        color:
                                            themeMode === "light"
                                                ? "#000"
                                                : "#fff",
                                    }}
                                >
                                    <TabItem index={0}>Perceivable</TabItem>
                                    <TabItem index={1}>Operable</TabItem>
                                    <TabItem index={2}>Understandable</TabItem>
                                    <TabItem index={3}>Robust</TabItem>
                                </TabList>
                                <TabPanel
                                    index={0}
                                    label={"tab1"}
                                    style={{
                                        color:
                                            themeMode === "dark" ? "#fff" : "",
                                        backgroundColor:
                                            themeMode === "light"
                                                ? "#ececec"
                                                : "#212121",
                                        borderTopRightRadius: 5,
                                        borderBottomRightRadius: 5,
                                    }}
                                    className="tabPanel"
                                >
                                    <Text
                                        as={"p"}
                                        lineHeight="28px"
                                        fontSize="18px"
                                    >
                                        Making content{" "}
                                        <strong>
                                            <u>perceivable</u>
                                        </strong>{" "}
                                        means making the output available to the
                                        user's senses, namely sight, sound, and
                                        touch (in the case of people who use
                                        Braille output devices). We won't worry
                                        about tasting or smelling web pages!
                                    </Text>
                                </TabPanel>
                                <TabPanel
                                    index={1}
                                    label={"tab2"}
                                    style={{
                                        color:
                                            themeMode === "dark" ? "#fff" : "",
                                        backgroundColor:
                                            themeMode === "light"
                                                ? "#ececec"
                                                : "#212121",
                                        borderTopRightRadius: 5,
                                        borderBottomRightRadius: 5,
                                    }}
                                >
                                    <Text
                                        as={"p"}
                                        lineHeight="28px"
                                        fontSize="18px"
                                    >
                                        Making content{" "}
                                        <strong>
                                            <u>operable</u>
                                        </strong>{" "}
                                        means making the input mechanisms robust
                                        enough to accept a wide range of devices
                                        and methods, including keyboard, mouse,
                                        touch, gestures, single-switch devices,
                                        and so on.
                                    </Text>
                                </TabPanel>
                                <TabPanel
                                    index={2}
                                    label={"tab3"}
                                    style={{
                                        color:
                                            themeMode === "dark" ? "#fff" : "",
                                        backgroundColor:
                                            themeMode === "light"
                                                ? "#ececec"
                                                : "#212121",
                                        borderTopRightRadius: 5,
                                        borderBottomRightRadius: 5,
                                    }}
                                >
                                    <Text
                                        as={"p"}
                                        lineHeight="28px"
                                        fontSize="18px"
                                    >
                                        Making content{" "}
                                        <strong>
                                            <u>understandable</u>
                                        </strong>{" "}
                                        means making the message and the
                                        interface easy to use and comprehend.
                                    </Text>
                                </TabPanel>
                                <TabPanel
                                    index={3}
                                    label={"tab4"}
                                    style={{
                                        color:
                                            themeMode === "dark" ? "#fff" : "",
                                        backgroundColor:
                                            themeMode === "light"
                                                ? "#ececec"
                                                : "#212121",
                                        borderTopRightRadius: 5,
                                        borderBottomRightRadius: 5,
                                    }}
                                >
                                    <Text
                                        as={"p"}
                                        lineHeight="28px"
                                        fontSize="18px"
                                    >
                                        Making content{" "}
                                        <strong>
                                            <u>robust</u>
                                        </strong>{" "}
                                        means ensuring it works across a wide
                                        range of devices, with both forward and
                                        backward compatibility.
                                    </Text>
                                </TabPanel>
                            </Tab>
                        </Flex>
                    </FlexItem>
                </Flex>

                <Flex justifyContent="flex-start" alignItems="center">
                    <FlexItem
                        id="flexitem"
                        flexBasis="100%"
                        style={{ flexGrow: 1, order: 1 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 30, marginTop: 30 }}
                        >
                            Horizontal Tab
                        </Text>
                        <Flex
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Tab
                                isResponsive
                                className="test"
                                selected={4}
                                variant="bordered"
                                style={{
                                    width: "100%",
                                    padding: 0,
                                    borderWidth: "1px",
                                    borderStyle: "solid",
                                    borderColor:
                                        themeMode === "light"
                                            ? "#d0d0d0"
                                            : "#1d78f3",
                                    borderRadius: 5,
                                }}
                            >
                                <TabList
                                    style={{
                                        backgroundColor:
                                            themeMode === "light"
                                                ? ""
                                                : "#121212",
                                        color:
                                            themeMode === "light"
                                                ? "#000"
                                                : "#fff",
                                    }}
                                >
                                    <TabItem index={4}>Perceivable</TabItem>
                                    <TabItem index={5}>Operable</TabItem>
                                    <TabItem index={6}>Understandable</TabItem>
                                    <TabItem index={7}>Robust</TabItem>
                                </TabList>
                                <TabPanel
                                    index={4}
                                    label={"tab1"}
                                    style={{
                                        color:
                                            themeMode === "dark" ? "#fff" : "",
                                        backgroundColor:
                                            themeMode === "light"
                                                ? "#ececec"
                                                : "#212121",
                                        borderTopRightRadius: 5,
                                        borderBottomRightRadius: 5,
                                    }}
                                >
                                    <Text
                                        as={"p"}
                                        lineHeight="28px"
                                        fontSize="18px"
                                    >
                                        Making content{" "}
                                        <strong>
                                            <u>perceivable</u>
                                        </strong>{" "}
                                        means making the output available to the
                                        user's senses, namely sight, sound, and
                                        touch (in the case of people who use
                                        Braille output devices). We won't worry
                                        about tasting or smelling web pages!
                                    </Text>
                                </TabPanel>
                                <TabPanel
                                    index={5}
                                    label={"tab2"}
                                    style={{
                                        color:
                                            themeMode === "dark" ? "#fff" : "",
                                        backgroundColor:
                                            themeMode === "light"
                                                ? "#ececec"
                                                : "#212121",
                                        borderTopRightRadius: 5,
                                        borderBottomRightRadius: 5,
                                    }}
                                >
                                    <Text
                                        as={"p"}
                                        lineHeight="28px"
                                        fontSize="18px"
                                    >
                                        Making content{" "}
                                        <strong>
                                            <u>operable</u>
                                        </strong>{" "}
                                        means making the input mechanisms robust
                                        enough to accept a wide range of devices
                                        and methods, including keyboard, mouse,
                                        touch, gestures, single-switch devices,
                                        and so on.
                                    </Text>
                                </TabPanel>
                                <TabPanel
                                    index={6}
                                    label={"tab3"}
                                    style={{
                                        color:
                                            themeMode === "dark" ? "#fff" : "",
                                        backgroundColor:
                                            themeMode === "light"
                                                ? "#ececec"
                                                : "#212121",
                                        borderTopRightRadius: 5,
                                        borderBottomRightRadius: 5,
                                    }}
                                >
                                    <Text
                                        as={"p"}
                                        lineHeight="28px"
                                        fontSize="18px"
                                    >
                                        Making content{" "}
                                        <strong>
                                            <u>understandable</u>
                                        </strong>{" "}
                                        means making the message and the
                                        interface easy to use and comprehend.
                                    </Text>
                                </TabPanel>
                                <TabPanel
                                    index={7}
                                    label={"tab4"}
                                    style={{
                                        color:
                                            themeMode === "dark" ? "#fff" : "",
                                        backgroundColor:
                                            themeMode === "light"
                                                ? "#ececec"
                                                : "#212121",
                                        borderTopRightRadius: 5,
                                        borderBottomRightRadius: 5,
                                    }}
                                >
                                    <Text
                                        as={"p"}
                                        lineHeight="28px"
                                        fontSize="18px"
                                    >
                                        Making content{" "}
                                        <strong>
                                            <u>robust</u>
                                        </strong>{" "}
                                        means ensuring it works across a wide
                                        range of devices, with both forward and
                                        backward compatibility.
                                    </Text>
                                </TabPanel>
                            </Tab>
                        </Flex>
                    </FlexItem>
                </Flex>
            </Section>

            {/* =========== Tab Component End Here =========== */}

            {/* =========== Modal Component Start Here =========== */}

            <Section style={{ padding: "20px 9%" }}>
                <Text as="h2">Modal Components</Text>

                <Divider
                    orientation="horizontal"
                    variant="solid"
                    style={{ marginBottom: 20 }}
                />

                <Flex justifyContent="space-evenly" alignItems="center">
                    <FlexItem
                        flexBasis="100%"
                        style={{ flexGrow: 1, order: 1 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            Modal with Positions
                        </Text>
                        <Flex
                            justifyContent="space-between"
                            alignItems="flex-start"
                        >
                            <Button
                                onClick={onClickDefaultModal}
                                style={{ marginBottom: 20, borderRadius: 5 }}
                            >
                                Default Modal
                            </Button>
                            <Button
                                onClick={onClickLeftBottomModal}
                                style={{ marginBottom: 20, borderRadius: 5 }}
                            >
                                Left Bottom Modal
                            </Button>
                            <Button
                                onClick={onClickRightBottomModal}
                                style={{ marginBottom: 20, borderRadius: 5 }}
                            >
                                Right Bottom Modal
                            </Button>
                            <Button
                                onClick={onClickRightTopModal}
                                style={{ marginBottom: 20, borderRadius: 5 }}
                            >
                                Top Right Modal
                            </Button>
                            <Button
                                onClick={onClickLeftTopModal}
                                style={{ marginBottom: 20, borderRadius: 5 }}
                            >
                                Top Left Modal
                            </Button>
                        </Flex>
                    </FlexItem>
                </Flex>
            </Section>

            {/* =========== Modal Component End Here =========== */}

            {/* =========== ButtonDropdown Component Start Here =========== */}

            <Section
                style={{
                    padding: "20px 9%",
                }}
            >
                <Text as="h2" textAlign="left">
                    ButtonDropdown Component
                </Text>
                <Divider
                    orientation="horizontal"
                    variant="solid"
                    style={{ marginBottom: 20 }}
                />
                <Flex
                    justifyContent="space-evenly"
                    flexDirection={{ xs: "column" }}
                >
                    <ButtonDropdown
                        id="test1"
                        key="testinghifhi"
                        label="Dropdown List"
                        variant="solid"
                        className="buttonDropdown"
                        showListOnClick
                        style={{ marginTop: 20, borderRadius: 5 }}
                    >
                        {(item) => (
                            <List id="test" key={item.id}>
                                <ListItem id="testing" as="span">
                                    {item.Testname}
                                </ListItem>
                            </List>
                        )}
                    </ButtonDropdown>
                    <ButtonDropdown
                        id="nwxtbutton"
                        label="Dropdown List"
                        variant="outline"
                        style={{ marginTop: 20, borderRadius: 5 }}
                    >
                        {(item) => (
                            <List id="test" key={item.id}>
                                <ListItem id="testing">
                                    {item.Testname}
                                </ListItem>
                            </List>
                        )}
                    </ButtonDropdown>
                </Flex>
            </Section>

            {/* =========== ButtonDropdown Component End Here =========== */}

            {/* =========== Text Component Start Here =========== */}

            <Section style={{ padding: "20px 9%" }}>
                <Text textAlign="left" as="h2" fontSize="20px">
                    Text Components
                </Text>
                <Divider
                    orientation="horizontal"
                    variant="solid"
                    style={{ marginBottom: 20 }}
                />
                <Flex justifyContent="flex-start" alignItems="center">
                    <FlexItem
                        flexBasis={{
                            lg: "50%",
                            md: "50%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 1 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            Text with Types
                        </Text>
                        <Flex>
                            <Text
                                style={{ marginBottom: "20px", width: "100%" }}
                                as="h1"
                                id="txt1"
                                fontSize="40px"
                                className="textClass"
                            >
                                H1 - Example H1 Heading Text
                            </Text>
                            <Text
                                style={{ marginBottom: "20px", width: "100%" }}
                                as="h2"
                                id="txt2"
                                fontSize="34px"
                            >
                                H2 - Example H2 Heading Text
                            </Text>
                            <Text
                                style={{ marginBottom: "20px", width: "100%" }}
                                as="h3"
                                id="txt3"
                                fontSize="28px"
                            >
                                H3- Example H3 Heading Text
                            </Text>
                            <Text
                                style={{ marginBottom: "20px", width: "100%" }}
                                as="h4"
                                id="txt4"
                                fontSize="26px"
                            >
                                H4- Example H4 Heading Text
                            </Text>
                            <Text
                                style={{ marginBottom: "20px", width: "100%" }}
                                as="h5"
                                id="txt5"
                                fontSize="24px"
                            >
                                H5- Example H5 Heading Text
                            </Text>
                            <Text
                                style={{ marginBottom: "20px", width: "100%" }}
                                as="h6"
                                id="txt6"
                                fontSize="22px"
                            >
                                H6- Example H6 Heading Text
                            </Text>
                            <Text
                                style={{ marginBottom: "20px", width: "100%" }}
                                as="div"
                                id="txt-p"
                            >
                                P - Example Paragraph Text
                            </Text>
                            <Text
                                style={{ marginBottom: "20px", width: "100%" }}
                                as="span"
                                id="txt-s"
                            >
                                Span - Example Cutomized Text
                            </Text>
                            <Text
                                style={{ marginBottom: "20px", width: "100%" }}
                                as="strong"
                                id="txt-b"
                            >
                                Strong - Example Bold Text
                            </Text>
                            <Text
                                style={{ marginBottom: "20px", width: "100%" }}
                                as="i"
                                id="txt-i"
                            >
                                i - Example Itallic Text
                            </Text>
                        </Flex>
                    </FlexItem>
                    <FlexItem
                        flexBasis={{
                            lg: "50%",
                            md: "50%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 1 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            Text with ColorScheme
                        </Text>
                        <Flex>
                            <Text
                                style={{ marginBottom: "20px", width: "100%" }}
                                as="div"
                                colorScheme="primary"
                                id="txt-pri"
                            >
                                <strong>Primary Scheme</strong> - Text Written
                                in Primary Scheme
                            </Text>
                            <Text
                                style={{ marginBottom: "20px", width: "100%" }}
                                as="div"
                                id="txt-sec"
                                colorScheme="secondary"
                            >
                                <strong>Secondary Scheme</strong> - Text Written
                                in Secondary Scheme
                            </Text>
                            <Text
                                style={{ marginBottom: "20px", width: "100%" }}
                                as="div"
                                id="txt-e"
                                colorScheme="error"
                            >
                                <strong>Error Scheme</strong> - Text Written in
                                Error Scheme
                            </Text>
                            <Text
                                style={{ marginBottom: "20px", width: "100%" }}
                                as="div"
                                id="txt-a"
                                colorScheme="accent"
                            >
                                <strong>Accent Scheme</strong> - Text Written in
                                Accent Scheme
                            </Text>
                        </Flex>
                    </FlexItem>
                </Flex>
            </Section>

            {/* =========== Text Component End Here =========== */}

            {/* =========== Divider Component Start Here ============ */}
            <Section style={{ padding: "20px 9%" }}>
                <Text as="h2" fontSize="20px">
                    Divider Components
                </Text>
                <Divider
                    orientation="horizontal"
                    variant="solid"
                    style={{ marginBottom: 20 }}
                />
                <Flex justifyContent="flex-start">
                    <FlexItem
                        flexBasis={{
                            lg: "70%",
                            md: "70%",
                            sm: "80%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 1 }}
                    >
                        <Text as="h2" style={{ marginBottom: 30 }}>
                            Horizontal Divider
                        </Text>
                        <Flex
                            justifyContent="space-between"
                            alignItems="flex-start"
                            style={{ marginRight: 50 }}
                        >
                            <Text as="div" fontSize="18px" textAlign="left">
                                Solid Divider
                            </Text>
                            <Divider
                                variant="solid"
                                id="divider-s"
                                orientation={"horizontal"}
                                style={{
                                    borderWidth: 2,
                                    marginBottom: 20,
                                }}
                                className="horizontalDivider"
                            ></Divider>

                            <Text
                                as="div"
                                fontSize="18px"
                                colorScheme="primary"
                            >
                                <Text> Dashed Divider</Text>
                            </Text>
                            <Divider
                                variant="dashed"
                                id="divider-d"
                                orientation={"horizontal"}
                                style={{ marginBottom: 20 }}
                            ></Divider>

                            <Text
                                as="div"
                                fontSize="18px"
                                colorScheme="primary"
                            >
                                <Text> Dotted Divider</Text>
                            </Text>
                            <Divider
                                variant="dotted"
                                id="divider-dot"
                                orientation={"horizontal"}
                                borderWidth="5px"
                                style={{ marginBottom: 20 }}
                            ></Divider>
                            <Text as="div" fontSize="18px" textAlign="left">
                                Divider With Text
                            </Text>
                            <Divider
                                variant="solid"
                                id="divider-s"
                                orientation={"horizontal"}
                                borderWidth="5px"
                                content='"Divider With Text In-Between"'
                            ></Divider>
                        </Flex>
                    </FlexItem>
                    <FlexItem
                        flexBasis={{
                            lg: "30%",
                            md: "50%",
                            sm: "60%",
                            xs: "80%",
                        }}
                        style={{ flexGrow: 1, order: 2 }}
                    >
                        <Text
                            as="h2"
                            style={{
                                marginBottom: 30,
                            }}
                        >
                            Vertical Divider
                        </Text>
                        <Flex
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Divider
                                variant="solid"
                                id="divider-vs"
                                orientation={"vertical"}
                                borderWidth="3px"
                                style={{
                                    height: 200,
                                    marginBottom: 20,
                                    marginRight: 50,
                                }}
                            ></Divider>

                            <Divider
                                variant="dashed"
                                id="divider-vd"
                                orientation={"vertical"}
                                borderWidth="3px"
                                style={{
                                    height: 200,
                                    marginBottom: 20,
                                    marginRight: 50,
                                }}
                            ></Divider>

                            <Divider
                                variant="dotted"
                                id="divider-vdot"
                                orientation={"vertical"}
                                borderWidth="5px"
                                style={{
                                    height: 200,
                                    marginBottom: 20,
                                    marginRight: 50,
                                }}
                            ></Divider>
                        </Flex>
                    </FlexItem>
                    <FlexItem style={{ flexGrow: 1, order: 2 }}>
                        <Text
                            as="h2"
                            style={{
                                marginBottom: 30,
                            }}
                        >
                            Divider with content between
                        </Text>
                        <Flex
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Divider
                                variant="solid"
                                id="divider-s"
                                orientation="horizontal"
                                borderWidth="5px"
                                content="Divider With Text In-Between"
                            />
                            <Text as="div" fontSize="18px" textAlign="left">
                                Divider With content
                            </Text>
                        </Flex>
                    </FlexItem>
                </Flex>
            </Section>
            {/* =========== Divider Component End Here =========== */}

            {/* =========== Accordion Component Start Here =========== */}
            <Section style={{ padding: "20px 9%" }}>
                <Text as="h2" textAlign="left">
                    Accordion Component
                </Text>
                <Divider
                    orientation="horizontal"
                    variant="solid"
                    style={{ marginBottom: 20 }}
                />
                <Flex alignItems="baseline">
                    <FlexItem
                        id="flexitem"
                        flexBasis={{
                            lg: "50%",
                            md: "100%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 1, marginBottom: 20 }}
                    >
                        <Flex
                            style={{ marginRight: 20 }}
                            alignItems="baseline"
                            flexDirection={{ xs: "column" }}
                        >
                            <Accordion>
                                <AccordionItem
                                    id="testid"
                                    className="accordionItem"
                                >
                                    <AccordionHeader className="Accordion-header">
                                        <Text>Accordion 1</Text>
                                    </AccordionHeader>

                                    <AccordionPanel>
                                        <Text style={{ margin: 10 }}>
                                            Content Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Expedita atque in perspiciatis rerum
                                            quos quod quam ipsum vel. Porro, quo
                                            inventore doloremque sequi deleniti
                                            itaque natus corporis harum ullam.
                                            Aspernatur?
                                        </Text>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem id="testjvjvid">
                                    <AccordionHeader>
                                        <Text>Accordion 2</Text>
                                    </AccordionHeader>

                                    <AccordionPanel>
                                        <Text style={{ margin: 10 }}>
                                            Content Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Expedita atque in perspiciatis rerum
                                            quos quod quam ipsum vel. Porro, quo
                                            inventore doloremque sequi deleniti
                                            itaque natus corporis harum ullam.
                                            Aspernatur?
                                        </Text>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem id="testuggid">
                                    <AccordionHeader disable>
                                        <Text>Disable Accordion</Text>
                                    </AccordionHeader>

                                    <AccordionPanel>
                                        <Text style={{ margin: 10 }}>
                                            Content Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Expedita atque in perspiciatis rerum
                                            quos quod quam ipsum vel. Porro, quo
                                            inventore doloremque sequi deleniti
                                            itaque natus corporis harum ullam.
                                            Aspernatur?
                                        </Text>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Flex>
                    </FlexItem>
                    <FlexItem
                        id="flexitem"
                        flexBasis={{
                            lg: "50%",
                            md: "100%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 1, marginBottom: 20 }}
                    >
                        <Flex
                            style={{ marginRight: 20 }}
                            alignItems="baseline"
                            flexDirection={{ xs: "column" }}
                        >
                            <Accordion
                                icon={{
                                    collapsedIconDetails: (
                                        <ChevronRight
                                            size="20px"
                                            color={
                                                themeMode === "light"
                                                    ? "#555"
                                                    : "#fff"
                                            }
                                        />
                                    ),
                                    expandedIconDetails: (
                                        <ChevronsLeft
                                            size="20px"
                                            color={
                                                themeMode === "light"
                                                    ? "#555"
                                                    : "#fff"
                                            }
                                        />
                                    ),
                                }}
                            >
                                <AccordionItem id="testid1">
                                    <AccordionHeader>
                                        <Text>Accordion 1</Text>
                                    </AccordionHeader>

                                    <AccordionPanel>
                                        <Text style={{ margin: 10 }}>
                                            Content Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Expedita atque in perspiciatis rerum
                                            quos quod quam ipsum vel. Porro, quo
                                            inventore doloremque sequi deleniti
                                            itaque natus corporis harum ullam.
                                            Aspernatur?
                                        </Text>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem id="testjvjvidebhb">
                                    <AccordionHeader>
                                        <Text>Accordion 2</Text>
                                    </AccordionHeader>

                                    <AccordionPanel>
                                        <Text style={{ margin: 10 }}>
                                            Content Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Expedita atque in perspiciatis rerum
                                            quos quod quam ipsum vel. Porro, quo
                                            inventore doloremque sequi deleniti
                                            itaque natus corporis harum ullam.
                                            Aspernatur?
                                        </Text>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem id="testuggidgf">
                                    <AccordionHeader>
                                        <Text>Accordion 3</Text>
                                    </AccordionHeader>

                                    <AccordionPanel>
                                        <Text style={{ margin: 10 }}>
                                            Content Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Expedita atque in perspiciatis rerum
                                            quos quod quam ipsum vel. Porro, quo
                                            inventore doloremque sequi deleniti
                                            itaque natus corporis harum ullam.
                                            Aspernatur?
                                        </Text>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Flex>
                    </FlexItem>
                    <FlexItem
                        id="flexitem"
                        flexBasis={{
                            lg: "50%",
                            md: "100%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 1 }}
                    >
                        <Flex
                            style={{ marginRight: 20 }}
                            alignItems="baseline"
                            flexDirection={{ xs: "column" }}
                        >
                            <Accordion
                                icon={{
                                    collapsedIconDetails: (
                                        <ChevronRight
                                            size="20px"
                                            color={
                                                themeMode === "light"
                                                    ? "#555"
                                                    : "#fff"
                                            }
                                        />
                                    ),
                                    expandedIconDetails: (
                                        <ChevronsLeft
                                            size="20px"
                                            color={
                                                themeMode === "light"
                                                    ? "#555"
                                                    : "#fff"
                                            }
                                        />
                                    ),
                                }}
                            >
                                <AccordionItem
                                    id="testid2"
                                    expandIcon={
                                        <CheckCircle
                                            size="20px"
                                            color={
                                                themeMode === "light"
                                                    ? "#555"
                                                    : "#fff"
                                            }
                                        />
                                    }
                                    collapseIcon={
                                        <CheckSquare
                                            size="20px"
                                            color={
                                                themeMode === "light"
                                                    ? "#555"
                                                    : "#fff"
                                            }
                                        />
                                    }
                                >
                                    <AccordionHeader>
                                        <Text>Accordion 1</Text>
                                    </AccordionHeader>

                                    <AccordionPanel>
                                        <Text style={{ margin: 10 }}>
                                            Content Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Expedita atque in perspiciatis rerum
                                            quos quod quam ipsum vel. Porro, quo
                                            inventore doloremque sequi deleniti
                                            itaque natus corporis harum ullam.
                                            Aspernatur?
                                        </Text>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem id="testjvjvidf">
                                    <AccordionHeader>
                                        <Text>Accordion 2</Text>
                                    </AccordionHeader>

                                    <AccordionPanel>
                                        <Text style={{ margin: 10 }}>
                                            Content Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Expedita atque in perspiciatis rerum
                                            quos quod quam ipsum vel. Porro, quo
                                            inventore doloremque sequi deleniti
                                            itaque natus corporis harum ullam.
                                            Aspernatur?
                                        </Text>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem id="testuggidfg">
                                    <AccordionHeader>
                                        <Text>Accordion 3</Text>
                                    </AccordionHeader>

                                    <AccordionPanel>
                                        <Text style={{ margin: 10 }}>
                                            Content Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Expedita atque in perspiciatis rerum
                                            quos quod quam ipsum vel. Porro, quo
                                            inventore doloremque sequi deleniti
                                            itaque natus corporis harum ullam.
                                            Aspernatur?
                                        </Text>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Flex>
                    </FlexItem>
                </Flex>
            </Section>

            {/* ============ Accordian Component End Here ============ */}

            {/* ============ Table Component Start Here ============ */}

            <Section style={{ padding: "20px 9%" }}>
                <Text as="h2" textAlign="left">
                    Table Components
                </Text>
                <Divider
                    orientation="horizontal"
                    variant="solid"
                    style={{ marginBottom: 30 }}
                />
                <Flex>
                    <FlexItem
                        flexBasis="100%"
                        style={{ flexGrow: 1, order: 1 }}
                    >
                        <Text as="h2" style={{ marginBottom: 20 }}>
                            Bordered Table
                        </Text>

                        <Table
                            variant="bordered"
                            size="sm"
                            ref={tableRef}
                            className="test"
                            style={{ marginBottom: 50 }}
                            header={
                                <TableRow>
                                    <TableCell
                                        verticalAlign="middle"
                                        textAlign="right"
                                        as="th"
                                        ref={cellRef}
                                    >
                                        <Text>Desert</Text>
                                    </TableCell>
                                    <TableCell
                                        verticalAlign="middle"
                                        as="th"
                                        ref={cellRef}
                                    >
                                        <Text>Calories</Text>
                                    </TableCell>
                                    <TableCell
                                        verticalAlign="middle"
                                        as="th"
                                        ref={cellRef}
                                    >
                                        <Text>Fat(g)</Text>
                                    </TableCell>
                                    <TableCell
                                        verticalAlign="middle"
                                        as="th"
                                        ref={cellRef}
                                    >
                                        <Text>Protien(g)</Text>
                                    </TableCell>
                                </TableRow>
                            }
                            body={
                                <>
                                    <TableRow ref={rowRef}>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text> Frozen Yoghurt</Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>156</Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text> 24 </Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>4</Text>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow ref={rowRef}>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>Ice Cream</Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text> 237 </Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text> 37 </Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text> 4.3 </Text>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow ref={rowRef}>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>Cup Cake</Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>305</Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>67</Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>4.3</Text>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow ref={rowRef}>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text> Gingerbread</Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>356</Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text> 49 </Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>3.9</Text>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow ref={rowRef}>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>Eclairs</Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>263</Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>24</Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>6</Text>
                                        </TableCell>
                                    </TableRow>
                                </>
                            }
                        />
                    </FlexItem>
                    <FlexItem
                        flexBasis="100%"
                        style={{ flexGrow: 1, order: 2 }}
                    >
                        <Text as="h2" style={{ marginBottom: 20 }}>
                            Striped Table
                        </Text>

                        <Table
                            variant="striped"
                            size="sm"
                            ref={tableRef}
                            className="test"
                            header={
                                <TableRow>
                                    <TableCell
                                        verticalAlign="middle"
                                        as="th"
                                        ref={cellRef}
                                    >
                                        <Text>Desert</Text>
                                    </TableCell>
                                    <TableCell
                                        verticalAlign="middle"
                                        as="th"
                                        ref={cellRef}
                                    >
                                        <Text>Calories</Text>
                                    </TableCell>
                                    <TableCell
                                        verticalAlign="middle"
                                        as="th"
                                        ref={cellRef}
                                    >
                                        <Text>Fat(g)</Text>
                                    </TableCell>
                                    <TableCell
                                        verticalAlign="middle"
                                        as="th"
                                        ref={cellRef}
                                    >
                                        <Text>Protien(g)</Text>
                                    </TableCell>
                                </TableRow>
                            }
                            body={
                                <>
                                    <TableRow ref={rowRef}>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>Frozen Yoghurt</Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>159</Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>24</Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>4</Text>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow ref={rowRef}>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>Ice Cream</Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>237</Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>37</Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>4.3</Text>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow ref={rowRef}>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>Eclairs</Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>263</Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>24</Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>6</Text>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow ref={rowRef}>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>Cup Cake</Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>305</Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>67</Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>4.3</Text>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow ref={rowRef}>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>Gingerbread</Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>356</Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>49</Text>
                                        </TableCell>
                                        <TableCell
                                            verticalAlign="middle"
                                            as="td"
                                            ref={cellRef}
                                        >
                                            <Text>3.9</Text>
                                        </TableCell>
                                    </TableRow>
                                </>
                            }
                        />
                    </FlexItem>
                </Flex>
            </Section>

            {/* ============ Table Component End Here ============ */}

            {/* =========== ButtonGroup Component Start Here =========== */}
            <Section style={{ padding: "20px 9%" }}>
                <Text as="h2">ButtonGroup Component</Text>
                <Divider
                    orientation="horizontal"
                    variant="solid"
                    style={{ marginBottom: 20 }}
                />

                <Flex justifyContent="flex-start" alignItems="center">
                    <FlexItem
                        flexBasis={{ lg: "50%", md: "50%", sm: "100%" }}
                        style={{ flexGrow: 1, order: 1 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            Solid ButtonGroup
                        </Text>

                        <ButtonGroup
                            variant="solid"
                            style={{
                                marginBottom: 20,
                                marginRight: 20,
                            }}
                            borderColor="#30669c"
                            className="buttonGroup"
                        >
                            <Button
                                colorScheme="primary"
                                onClick={() => alert("Button 1 Clicked")}
                            >
                                Button 1
                            </Button>
                            <Button
                                colorScheme="primary"
                                onClick={() => alert("Button 2 Clicked")}
                            >
                                Button 2
                            </Button>
                            <Button
                                colorScheme="primary"
                                onClick={() => alert("Button 3 Clicked")}
                            >
                                Button 3
                            </Button>
                        </ButtonGroup>
                    </FlexItem>
                    <FlexItem
                        flexBasis={{ lg: "50%", md: "50%", sm: "100%" }}
                        style={{ flexGrow: 1, order: 1 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            Outline ButtonGroup
                        </Text>
                        <ButtonGroup
                            variant="outline"
                            style={{ marginBottom: 20 }}
                        >
                            <Button
                                colorScheme="primary"
                                onClick={() => alert("Button 1 Clicked")}
                            >
                                Button 1
                            </Button>
                            <Button
                                colorScheme="primary"
                                onClick={() => alert("Button 2 Clicked")}
                            >
                                Button 2
                            </Button>
                            <Button
                                colorScheme="primary"
                                onClick={() => alert("Button 3 Clicked")}
                            >
                                Button 3
                            </Button>
                        </ButtonGroup>
                    </FlexItem>
                    <FlexItem
                        flexBasis={{ lg: "50%", md: "50%", sm: "100%" }}
                        style={{ flexGrow: 1, order: 1 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            Horizontal ButtonGroup
                        </Text>
                        <ButtonGroup
                            variant="outline"
                            style={{ marginBottom: 20 }}
                        >
                            <Button
                                colorScheme="primary"
                                onClick={() => alert("Button 1 Clicked")}
                            >
                                Button 1
                            </Button>
                            <Button
                                colorScheme="primary"
                                onClick={() => alert("Button 2 Clicked")}
                            >
                                Button 2
                            </Button>
                            <Button
                                colorScheme="primary"
                                onClick={() => alert("Button 3 Clicked")}
                            >
                                Button 3
                            </Button>
                        </ButtonGroup>
                    </FlexItem>
                    <FlexItem
                        flexBasis={{ lg: "50%", md: "50%", sm: "100%" }}
                        style={{ flexGrow: 1, order: 1 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            Vertical ButtonGroup
                        </Text>
                        <ButtonGroup
                            variant="solid"
                            vertical
                            style={{ marginBottom: 20 }}
                            borderColor="#30669c"
                        >
                            <Button colorScheme="primary">
                                Vertical ButtonGroup 1
                            </Button>
                            <Button colorScheme="primary">
                                Vertical ButtonGroup 2
                            </Button>
                            <Button colorScheme="primary">
                                Vertical ButtonGroup 3
                            </Button>
                        </ButtonGroup>
                    </FlexItem>
                </Flex>
            </Section>
            {/* =========== Button Component End Here =========== */}
            {/* =========== Input Component Start Here =========== */}
            <Section style={{ padding: "20px 9%" }}>
                <Text as="h2">Input Form Component</Text>
                <Divider
                    orientation="horizontal"
                    variant="solid"
                    style={{ marginBottom: 20 }}
                />
                <Flex
                    justifyContent="space-between"
                    alignItems="baseline"
                    style={{ marginBottom: 40 }}
                >
                    <FlexItem
                        flexBasis={{
                            lg: "30%",
                            md: "45%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 1 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            Default Input
                        </Text>
                        <Flex
                            justifyContent="flex-start"
                            style={{ marginBottom: 30 }}
                        >
                            <Form>
                                <Text
                                    fontSize="16px"
                                    fontWeight={500}
                                    style={{
                                        color:
                                            themeMode === "light"
                                                ? "#555"
                                                : "#f4f4f4",
                                        marginBottom: 15,
                                    }}
                                >
                                    1.Default Input
                                </Text>
                                <Input
                                    id="sfjowj"
                                    placeholder="Please enter username"
                                    value={value}
                                    label="Username"
                                    isRequired
                                    onChange={onChangeInputHandler}
                                    style={{ marginBottom: 20 }}
                                    className="inputClass"
                                />
                                <Text
                                    fontSize="16px"
                                    fontWeight={500}
                                    style={{
                                        color:
                                            themeMode === "light"
                                                ? "#555"
                                                : "#f4f4f4",
                                        marginBottom: 15,
                                    }}
                                >
                                    2.Password Input
                                </Text>
                                <Input
                                    id="jfwj"
                                    value={passValue}
                                    label="Password"
                                    type={showPass ? "text" : "password"}
                                    onChange={onChangePasswordHandler}
                                    placeholder="Please enter password"
                                    inputRightChildren={
                                        <IconBox
                                            style={{ backgroundColor: "none" }}
                                            aria-label="Show and hide password"
                                            onClick={() => onShowPassword()}
                                            icon={
                                                showPass ? (
                                                    themeMode === "light" ? (
                                                        <Eye
                                                            height={18}
                                                            width={18}
                                                            color="#000"
                                                        />
                                                    ) : (
                                                        <Eye
                                                            height={18}
                                                            width={18}
                                                            color="#fff"
                                                        />
                                                    )
                                                ) : themeMode === "light" ? (
                                                    <EyeOff
                                                        height={18}
                                                        width={18}
                                                        color="#000"
                                                    />
                                                ) : (
                                                    <EyeOff
                                                        height={18}
                                                        width={18}
                                                        color="#fff"
                                                    />
                                                )
                                            }
                                        />
                                    }
                                    iconSpacing={"40px"}
                                    style={{ marginBottom: 20 }}
                                />
                                <Text
                                    fontSize="16px"
                                    fontWeight={500}
                                    style={{
                                        color:
                                            themeMode === "light"
                                                ? "#555"
                                                : "#f4f4f4",
                                        marginBottom: 15,
                                    }}
                                >
                                    3.Disabled Input
                                </Text>
                                <Input
                                    id="ifeiw"
                                    value="St de lorem"
                                    isReadOnly
                                    disable
                                    style={{ marginBottom: 20 }}
                                />
                                <Text
                                    fontSize="16px"
                                    fontWeight={500}
                                    style={{
                                        color:
                                            themeMode === "light"
                                                ? "#555"
                                                : "#f4f4f4",
                                        marginBottom: 15,
                                    }}
                                >
                                    4.ReadOnly Input
                                </Text>
                                <Input
                                    id="ifeiwII"
                                    value="Lorem Ipsum"
                                    isReadOnly
                                    style={{ marginBottom: 20 }}
                                />
                                <Text
                                    fontSize="16px"
                                    fontWeight={500}
                                    style={{
                                        color:
                                            themeMode === "light"
                                                ? "#555"
                                                : "#f4f4f4",
                                        marginBottom: 15,
                                    }}
                                >
                                    5.Validate Input
                                </Text>
                                <Input
                                    id="fkejfo"
                                    value={inputErrorValue}
                                    label="Firstname"
                                    errorMessage={
                                        inputErrorValue === ""
                                            ? "Please enter firstname"
                                            : ""
                                    }
                                    onChange={onChangeInputErrorHandler}
                                    style={{ marginBottom: 20 }}
                                />
                            </Form>
                        </Flex>
                    </FlexItem>
                    <FlexItem
                        flexBasis={{
                            lg: "30%",
                            md: "45%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 1 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            Input Variants with colorScheme
                        </Text>
                        <Flex
                            justifyContent="flex-start"
                            style={{ marginBottom: 30 }}
                        >
                            <Form id="fhgiuigliah">
                                <Text
                                    fontSize="16px"
                                    fontWeight={500}
                                    style={{
                                        color:
                                            themeMode === "light"
                                                ? "#555"
                                                : "#f4f4f4",
                                        marginBottom: 15,
                                    }}
                                >
                                    1.Clear Text Input
                                </Text>
                                <Input
                                    id="Inpufhihfiwlfdwofjowfjowjohfhihwfi"
                                    placeholder="Please enter lastname"
                                    variant="solid"
                                    value={lastnameValue}
                                    colorScheme="primary"
                                    onChange={onInputChangeLastname}
                                    style={{ marginBottom: 20 }}
                                    errorMessage={
                                        lastnameValue.length > 5
                                            ? "Please enter 5 characters"
                                            : ""
                                    }
                                    inputRightChildren={
                                        lastnameValue !== "" && (
                                            <IconBox
                                                style={{
                                                    backgroundColor: "none",
                                                }}
                                                aria-label="Show and hide password"
                                                onClick={onInputClear}
                                                icon={
                                                    <X
                                                        height={18}
                                                        width={18}
                                                        color="#fff"
                                                    />
                                                }
                                            />
                                        )
                                    }
                                    iconSpacing={"30px"}
                                />
                                <Text
                                    fontSize="16px"
                                    fontWeight={500}
                                    style={{
                                        color:
                                            themeMode === "light"
                                                ? "#555"
                                                : "#f4f4f4",
                                        marginBottom: 15,
                                    }}
                                >
                                    2.Validate Phone Input
                                </Text>
                                <Input
                                    id="Inpufhihfihfhihwfifkjwjfjj"
                                    value={phoneValue}
                                    type="tel"
                                    placeholder="Please enter phone number"
                                    variant="outline"
                                    onChange={(e) =>
                                        setPhoneValue(e.target.value)
                                    }
                                    colorScheme="primary"
                                    errorMessage={
                                        isNaN(phoneValue as number)
                                            ? "Please enter digits"
                                            : ""
                                    }
                                    style={{ marginBottom: 20 }}
                                />
                                <Text
                                    fontSize="16px"
                                    fontWeight={500}
                                    style={{
                                        color:
                                            themeMode === "light"
                                                ? "#555"
                                                : "#f4f4f4",
                                        marginBottom: 15,
                                    }}
                                >
                                    3.Validate Email Input
                                </Text>
                                <Input
                                    id="Inpufhihfihfhihwfifkfn"
                                    variant="ghost"
                                    placeholder="Please enter email"
                                    colorScheme="primary"
                                    value={emailValue}
                                    errorMessage={
                                        emailValue &&
                                        /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g.test(
                                            emailValue,
                                        ) === false
                                            ? "Please enter valid email"
                                            : ""
                                    }
                                    onChange={onEmailChangeHandler}
                                    style={{ marginBottom: 20 }}
                                />

                                <Text
                                    as="h4"
                                    textAlign="left"
                                    fontSize="16px"
                                    style={{ marginBottom: 20 }}
                                >
                                    Error Input with colorScheme
                                </Text>
                                <Text
                                    fontSize="16px"
                                    fontWeight={500}
                                    style={{
                                        color:
                                            themeMode === "light"
                                                ? "#555"
                                                : "#f4f4f4",
                                        marginBottom: 15,
                                    }}
                                >
                                    1.Solid Input Error
                                </Text>
                                <Input
                                    id="Inpufhihfihfhihwfi"
                                    label="Postal Code"
                                    value={postValue}
                                    variant="solid"
                                    colorScheme={
                                        postValue === "" ? "error" : "primary"
                                    }
                                    errorMessage={
                                        postValue === ""
                                            ? "Please enter postal code"
                                            : ""
                                    }
                                    onChange={(e) =>
                                        setPostValue(e.target.value)
                                    }
                                    inputLeftChildren={
                                        <MapPin
                                            width={15}
                                            height={15}
                                            color="#fff"
                                        />
                                    }
                                    iconSpacing={"40px"}
                                    style={{ marginBottom: 20 }}
                                />
                                <Text
                                    fontSize="16px"
                                    fontWeight={500}
                                    style={{
                                        color:
                                            themeMode === "light"
                                                ? "#555"
                                                : "#f4f4f4",
                                        marginBottom: 15,
                                    }}
                                >
                                    2.Outline Input Error
                                </Text>
                                <Input
                                    id="Input2giuwFIfoi"
                                    value={addressValue}
                                    variant="outline"
                                    colorScheme={
                                        addressValue === ""
                                            ? "error"
                                            : "primary"
                                    }
                                    errorMessage={
                                        addressValue === ""
                                            ? "Please enter address"
                                            : ""
                                    }
                                    label="Address"
                                    onChange={(e) =>
                                        setAddressValue(e.target.value)
                                    }
                                    inputLeftChildren={
                                        themeMode === "light" ? (
                                            <Home
                                                width={15}
                                                height={15}
                                                color="#000"
                                            />
                                        ) : (
                                            <Home
                                                width={15}
                                                height={15}
                                                color="#fff"
                                            />
                                        )
                                    }
                                    iconSpacing={"40px"}
                                    style={{ marginBottom: 20 }}
                                />
                                <Text
                                    fontSize="16px"
                                    fontWeight={500}
                                    style={{
                                        color:
                                            themeMode === "light"
                                                ? "#555"
                                                : "#f4f4f4",
                                        marginBottom: 15,
                                    }}
                                >
                                    3.Ghost Input Error
                                </Text>
                                <Input
                                    id="Inputfhialgisli2"
                                    variant="ghost"
                                    value={countryValue}
                                    colorScheme={
                                        countryValue === ""
                                            ? "error"
                                            : "primary"
                                    }
                                    errorMessage={
                                        countryValue === ""
                                            ? "Please enter country name"
                                            : ""
                                    }
                                    label="Country"
                                    onChange={(e) =>
                                        setCountryValue(e.target.value)
                                    }
                                    placeholder=""
                                    style={{ marginBottom: 20 }}
                                />
                            </Form>
                        </Flex>
                    </FlexItem>
                    <FlexItem
                        flexBasis={{
                            lg: "30%",
                            md: "45%",
                            sm: "100%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 2 }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            Select Input
                        </Text>
                        <Flex
                            justifyContent="flex-start"
                            flexDirection="column"
                            alignItems="flex-start"
                            style={{ marginBottom: 30 }}
                        >
                            <Text
                                fontSize="16px"
                                fontWeight={500}
                                style={{
                                    color:
                                        themeMode === "light"
                                            ? "#555"
                                            : "#f4f4f4",
                                    marginBottom: 15,
                                }}
                            >
                                1.Default Select
                            </Text>
                            <Select
                                id="select1"
                                defaultSelected={selectedOption}
                                onChange={setSelectedOption}
                                label="Flag"
                                placeholder="Select Flag "
                                className="selectClass"
                                style={{
                                    "&.selectClass": {
                                        marginBottom: 20,
                                        // '[data-selected = "data-selected"]': {
                                        //     backgroundColor: "red",
                                        //     '[aria-selected = "true"]': {
                                        //         backgroundColor: "green",
                                        //     },
                                        // },
                                    },
                                }}
                            >
                                {option.map((item) => (
                                    <SelectOptions
                                        value={item.name}
                                        key={`flag_key_type${item.id}`}
                                    >
                                        {item.name}
                                    </SelectOptions>
                                ))}
                            </Select>
                            <Text
                                fontSize="16px"
                                fontWeight={500}
                                style={{
                                    color:
                                        themeMode === "light"
                                            ? "#555"
                                            : "#f4f4f4",
                                    marginBottom: 15,
                                }}
                            >
                                2.Disabled Select
                            </Text>
                            <Select
                                id="select5"
                                style={{ marginBottom: 20 }}
                                placeholder="Select Country "
                                disable
                                defaultSelected={selectedOption}
                                onChange={setSelectedOption}
                            />
                            <Text
                                as="h4"
                                textAlign="left"
                                fontSize="16px"
                                style={{ marginBottom: 20 }}
                            >
                                Select Input with error
                            </Text>
                            <Select
                                id="select4"
                                label="Color"
                                placeholder="Select Color"
                                errorMessage={
                                    selectedColorOption === "Red"
                                        ? "Color is not available"
                                        : ""
                                }
                                defaultSelected={selectedColorOption}
                                onChange={setSelectedColorOption}
                                style={{ marginBottom: 20 }}
                            >
                                {option.map((item) => (
                                    <SelectOptions
                                        value={item.name}
                                        key={item.id}
                                    >
                                        {item.name}
                                    </SelectOptions>
                                ))}
                            </Select>
                            <Text
                                as="h4"
                                textAlign="left"
                                fontSize="16px"
                                style={{ marginBottom: 20 }}
                            >
                                Select Input with color scheme
                            </Text>
                            <Select
                                id="select2"
                                placeholder="Select Category "
                                colorScheme="primary"
                                variant="solid"
                                defaultSelected={selectedOption}
                                onChange={setSelectedOption}
                                style={{ marginBottom: 20 }}
                            >
                                {categories.map((item) => (
                                    <SelectOptions
                                        value={item.name}
                                        key={`category_key_type_${item.id}`}
                                    >
                                        {item.name}
                                    </SelectOptions>
                                ))}
                            </Select>
                            <Select
                                id="select2"
                                placeholder="Select Category "
                                colorScheme="primary"
                                variant="ghost"
                                defaultSelected={selectedOption}
                                onChange={setSelectedOption}
                                style={{ marginBottom: 20 }}
                            >
                                {categories.map((item) => (
                                    <SelectOptions
                                        value={item.name}
                                        key={`category_key_type${item.id}`}
                                    >
                                        {item.name}
                                    </SelectOptions>
                                ))}
                            </Select>
                            <Select
                                id="select3"
                                placeholder="Select Plant Type "
                                colorScheme="primary"
                                variant="outline"
                                defaultSelected={selectedPlantOption}
                                onChange={setSelectedPlantOption}
                                style={{ marginBottom: 20 }}
                            >
                                {plantType.map((item) => (
                                    <SelectOptions
                                        value={item.name}
                                        key={`plant_type_${item.id}`}
                                    >
                                        {item.name}
                                    </SelectOptions>
                                ))}
                            </Select>
                        </Flex>
                    </FlexItem>
                </Flex>
            </Section>
            {/* =========== Input Component End Here =========== */}
            {/* =========== TextArea Component Start Here =========== */}
            <Section style={{ padding: "20px 9%" }}>
                <Text as="h2">TextArea Components</Text>
                <Divider
                    orientation="horizontal"
                    variant="solid"
                    style={{ marginBottom: 20 }}
                />
                <Flex
                    justifyContent="space-between"
                    alignItems="baseline"
                    style={{ marginBottom: 40 }}
                >
                    <FlexItem
                        flexBasis={{
                            lg: "30%",
                            md: "45%",
                            sm: "80%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 1, overflow: "hidden" }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            Default TextArea
                        </Text>
                        <Flex
                            justifyContent="space-between"
                            alignItems="flex-start"
                            style={{ marginBottom: 30 }}
                        >
                            <Text
                                fontWeight={500}
                                fontSize="16px"
                                style={{
                                    color:
                                        themeMode === "light"
                                            ? "#555"
                                            : "#f4f4f4",
                                    marginBottom: 15,
                                }}
                            >
                                1.MaxLength Textarea
                            </Text>
                            <TextArea
                                minRows={3}
                                id="textarea1"
                                value={valueText}
                                placeholder="Add description here"
                                name="textarea"
                                maxLength={20}
                                isRequired
                                label="Description"
                                onChange={onChangeHandler}
                                style={{ marginBottom: 20 }}
                                className="textareaClass"
                            />
                            <Text
                                fontSize="16px"
                                fontWeight={500}
                                style={{
                                    color:
                                        themeMode === "light"
                                            ? "#555"
                                            : "#f4f4f4",
                                    marginBottom: 15,
                                }}
                            >
                                2.Default Outline Textarea
                            </Text>
                            <TextArea
                                minRows={3}
                                id="textare6"
                                value={outlineDescriptionValue}
                                placeholder="Add description here"
                                name="textarea"
                                onChange={(e) =>
                                    setOutlineDescriptionValue(e.target.value)
                                }
                                variant="outline"
                                resize="none"
                                style={{ marginBottom: 20 }}
                            />
                            <Text
                                fontSize="16px"
                                fontWeight={500}
                                style={{
                                    color:
                                        themeMode === "light"
                                            ? "#555"
                                            : "#f4f4f4",
                                    marginBottom: 15,
                                }}
                            >
                                3.ReadOnly Textarea
                            </Text>
                            <TextArea
                                minRows={3}
                                id="textarea2"
                                value="Lorem ipsum de st...."
                                placeholder="Add description here"
                                name="textarea"
                                isReadOnly
                                resize="none"
                                style={{ marginBottom: 20 }}
                            />
                            <Text
                                fontSize="16px"
                                fontWeight={500}
                                style={{
                                    color:
                                        themeMode === "light"
                                            ? "#555"
                                            : "#f4f4f4",
                                    marginBottom: 15,
                                }}
                            >
                                4.Disabled Textarea
                            </Text>
                            <TextArea
                                minRows={3}
                                id="textarea3"
                                label="Description"
                                value="Lorem ipsum sit de "
                                placeholder="Add description here"
                                name="textarea"
                                disable
                                isReadOnly
                                resize="none"
                                style={{ marginBottom: 20 }}
                            />
                            <Text
                                fontSize="16px"
                                fontWeight={500}
                                style={{
                                    color:
                                        themeMode === "light"
                                            ? "#555"
                                            : "#f4f4f4",
                                    marginBottom: 15,
                                }}
                            >
                                5.Validate Textarea
                            </Text>
                            <TextArea
                                minRows={5}
                                id="textarea5"
                                resize="none"
                                value={errorDescriptionValue}
                                label="Description"
                                errorMessage={
                                    errorDescriptionValue === ""
                                        ? "Please add description"
                                        : ""
                                }
                                name="textarea"
                                onChange={(e) =>
                                    setErrorDescriptionValue(e.target.value)
                                }
                                style={{ marginBottom: 20 }}
                            />
                        </Flex>
                    </FlexItem>
                    <FlexItem
                        flexBasis={{
                            lg: "30%",
                            md: "45%",
                            sm: "80%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 1, overflow: "hidden" }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            TextArea With ColorScheme
                        </Text>
                        <Flex
                            justifyContent="space-between"
                            alignItems="flex-start"
                            style={{ marginBottom: 30 }}
                        >
                            <Text
                                fontSize="16px"
                                fontWeight={500}
                                style={{
                                    color:
                                        themeMode === "light"
                                            ? "#555"
                                            : "#f4f4f4",
                                    marginBottom: 15,
                                }}
                            >
                                1.Outlined Textarea
                            </Text>
                            <TextArea
                                minRows={3}
                                id="textarea-o"
                                value={colorOutlineValue}
                                placeholder="Add description here"
                                onChange={(e) =>
                                    setColorOutlineValue(e.target.value)
                                }
                                name="textarea"
                                maxLength={20}
                                colorScheme="primary"
                                isRequired
                                variant="outline"
                                resize="none"
                                style={{ marginBottom: 20 }}
                            />
                            <Text
                                fontSize="16px"
                                fontWeight={500}
                                style={{
                                    color:
                                        themeMode === "light"
                                            ? "#555"
                                            : "#f4f4f4",
                                    marginBottom: 15,
                                }}
                            >
                                2.Solid Textarea
                            </Text>
                            <TextArea
                                minRows={3}
                                id="textarea-s"
                                value={colorSolidValue}
                                placeholder="Add description here"
                                name="textarea"
                                maxLength={20}
                                variant="solid"
                                colorScheme="primary"
                                resize="none"
                                onChange={(e) =>
                                    setColorSolidValue(e.target.value)
                                }
                                style={{ marginBottom: 20 }}
                            />
                            <Text
                                fontSize="16px"
                                fontWeight={500}
                                style={{
                                    color:
                                        themeMode === "light"
                                            ? "#555"
                                            : "#f4f4f4",
                                    marginBottom: 15,
                                }}
                            >
                                3.Ghost Textarea
                            </Text>
                            <TextArea
                                minRows={3}
                                id="textarea-g"
                                value={colorGhostValue}
                                placeholder="Add description here"
                                name="textarea"
                                colorScheme="primary"
                                maxLength={20}
                                variant="ghost"
                                resize="none"
                                onChange={(e) =>
                                    setColorGhostValue(e.target.value)
                                }
                                style={{ marginBottom: 20 }}
                            />
                            <Text
                                as="h4"
                                textAlign="left"
                                fontSize="16px"
                                style={{ marginBottom: 20 }}
                            >
                                TextArea with Color Scheme Errors
                            </Text>
                            <TextArea
                                minRows={3}
                                id="textarea7"
                                value={outlineErrorValue}
                                placeholder="Add description here"
                                name="textarea"
                                variant="outline"
                                resize="none"
                                errorMessage={
                                    outlineErrorValue === ""
                                        ? "Please add description"
                                        : ""
                                }
                                colorScheme="primary"
                                onChange={(e) =>
                                    setOutlineErrorValue(e.target.value)
                                }
                                style={{ marginBottom: 20 }}
                            />
                            <TextArea
                                minRows={3}
                                id="textarea8"
                                value={solidErrorValue}
                                placeholder="Add description here"
                                name="textarea"
                                variant="solid"
                                colorScheme="primary"
                                resize="none"
                                errorMessage={
                                    solidErrorValue === ""
                                        ? "Please add description"
                                        : ""
                                }
                                onChange={(e) =>
                                    setSolidErrorValue(e.target.value)
                                }
                                style={{ marginBottom: 20 }}
                            />
                            <TextArea
                                minRows={3}
                                id="textarea9"
                                value={ghostErrorValue}
                                placeholder="Add description here"
                                name="textarea"
                                colorScheme="primary"
                                variant="ghost"
                                resize="none"
                                errorMessage={
                                    ghostErrorValue === ""
                                        ? "Please add description"
                                        : ""
                                }
                                onChange={(e) =>
                                    setGhostErrorValue(e.target.value)
                                }
                                style={{ marginBottom: 20 }}
                            />
                        </Flex>
                    </FlexItem>
                    <FlexItem
                        flexBasis={{
                            lg: "30%",
                            md: "45%",
                            sm: "80%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 1, overflow: "hidden" }}
                    >
                        <Text
                            as="h4"
                            textAlign="left"
                            fontSize="16px"
                            style={{ marginBottom: 20 }}
                        >
                            TextArea With Resize
                        </Text>
                        <Flex
                            justifyContent="space-between"
                            alignItems="flex-start"
                            style={{ marginBottom: 30 }}
                        >
                            <Text
                                fontSize="16px"
                                fontWeight={500}
                                style={{
                                    color:
                                        themeMode === "light"
                                            ? "#555"
                                            : "#f4f4f4",
                                    marginBottom: 15,
                                }}
                            >
                                1.Auto Resize Textarea
                            </Text>
                            <TextArea
                                minRows={3}
                                id="textarea-auto"
                                resize="auto"
                                label={
                                    <>
                                        {"Add Description"}
                                        <Text as="i">
                                            (Auto Resize Textarea)
                                        </Text>
                                    </>
                                }
                                value={autoResizeValue}
                                placeholder="Add description here"
                                name="textarea"
                                onChange={(e) =>
                                    setAutoResizeValue(e.target.value)
                                }
                                style={{ marginBottom: 20 }}
                            />
                            <Text
                                fontSize="16px"
                                fontWeight={500}
                                style={{
                                    color:
                                        themeMode === "light"
                                            ? "#555"
                                            : "#f4f4f4",
                                    marginBottom: 15,
                                }}
                            >
                                2.No Resize Textarea
                            </Text>

                            <TextArea
                                minRows={3}
                                id="textarea-none"
                                value={noneResizeValue}
                                placeholder="Add description here"
                                name="textarea"
                                resize="none"
                                onChange={(e) =>
                                    setNoneResizeValue(e.target.value)
                                }
                                style={{ marginBottom: 20 }}
                            />
                            <Text
                                fontSize="16px"
                                fontWeight={500}
                                style={{
                                    color:
                                        themeMode === "light"
                                            ? "#555"
                                            : "#f4f4f4",
                                    marginBottom: 15,
                                }}
                            >
                                3.Horizontal Resize Textarea
                            </Text>
                            <TextArea
                                minRows={3}
                                id="textarea-h"
                                value={horiResizeValue}
                                placeholder="Add description here"
                                name="textarea"
                                resize="horizontal"
                                onChange={(e) =>
                                    setHoriResizeValue(e.target.value)
                                }
                                style={{ marginBottom: 20 }}
                            />
                            <Text
                                fontSize="16px"
                                fontWeight={500}
                                style={{
                                    color:
                                        themeMode === "light"
                                            ? "#555"
                                            : "#f4f4f4",
                                    marginBottom: 15,
                                }}
                            >
                                4.Vertical Resize Textarea
                            </Text>
                            <TextArea
                                minRows={3}
                                id="testarea-v"
                                value={vertResizeValue}
                                placeholder="Add description here"
                                name="textarea"
                                resize="vertical"
                                onChange={(e) =>
                                    setVertResizeValue(e.target.value)
                                }
                                style={{ marginBottom: 20 }}
                            />
                        </Flex>
                    </FlexItem>
                </Flex>
            </Section>
            {/* =========== TextArea Component End Here =========== */}

            {/* =========== Container, Col, Row Component Start Here =========== */}
            <Section style={{ padding: "20px 9%" }}>
                <Text as="h2">Container, Row, Column</Text>
                <Divider
                    orientation="horizontal"
                    variant="solid"
                    style={{ marginBottom: 20 }}
                />
                <Container
                    style={{ backgroundColor: "#1d78f3", padding: 30 }}
                    className="containerClass"
                >
                    <Row
                        backgroundColor="#fff"
                        style={{ marginBottom: 20 }}
                        className="rowClass"
                    >
                        <Col
                            xs={12}
                            md={6}
                            sm={6}
                            lg={4}
                            style={{ margin: "10px 0px" }}
                            className="colClass"
                        >
                            <Card
                                variant="outline"
                                colorScheme="primary"
                                justifyContent="space-evenly"
                                style={{
                                    height: 250,
                                    borderRadius: 5,
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    overflow: "hidden",
                                    backgroundColor: "#8bb5ef",
                                }}
                                border={true}
                            >
                                <Text
                                    as="h1"
                                    style={{ marginLeft: 15, color: "#222" }}
                                >
                                    Title
                                </Text>
                                <Text
                                    as="div"
                                    style={{ marginLeft: 15, color: "#222" }}
                                >
                                    One or two sentence description that may go
                                    to several lines. One or two sentence
                                    description that may go to several lines.
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text.
                                </Text>
                            </Card>
                        </Col>
                        <Col
                            xs={12}
                            md={6}
                            sm={6}
                            lg={4}
                            style={{ margin: "10px 0px" }}
                        >
                            <Card
                                variant="outline"
                                colorScheme="primary"
                                justifyContent="space-evenly"
                                style={{
                                    height: 250,
                                    borderRadius: 5,
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    overflow: "hidden",
                                    backgroundColor: "#8bb5ef",
                                }}
                                border={true}
                            >
                                <Text
                                    as="h1"
                                    style={{ marginLeft: 15, color: "#222" }}
                                >
                                    Title
                                </Text>
                                <Text
                                    as="div"
                                    style={{ marginLeft: 15, color: "#222" }}
                                >
                                    One or two sentence description that may go
                                    to several lines. One or two sentence
                                    description that may go to several lines.
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text.
                                </Text>
                            </Card>
                        </Col>
                        <Col
                            xs={12}
                            md={6}
                            sm={6}
                            lg={4}
                            style={{ margin: "10px 0px" }}
                        >
                            <Card
                                variant="outline"
                                colorScheme="primary"
                                justifyContent="space-evenly"
                                style={{
                                    height: 250,
                                    borderRadius: 5,
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    overflow: "hidden",
                                    backgroundColor: "#8bb5ef",
                                }}
                                border={true}
                            >
                                <Text
                                    as="h1"
                                    style={{ marginLeft: 15, color: "#222" }}
                                >
                                    Title
                                </Text>
                                <Text
                                    as="div"
                                    style={{
                                        marginLeft: 15,
                                        color: "#222",
                                    }}
                                >
                                    One or two sentence description that may go
                                    to several lines. One or two sentence
                                    description that may go to several lines.
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text.
                                </Text>
                            </Card>
                        </Col>
                    </Row>
                    <Row backgroundColor="#fff">
                        <Col
                            xs={12}
                            md={6}
                            sm={6}
                            lg={4}
                            style={{ margin: "10px 0px" }}
                        >
                            <Card
                                variant="outline"
                                colorScheme="primary"
                                justifyContent="space-evenly"
                                style={{
                                    height: 250,
                                    borderRadius: 5,
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    overflow: "hidden",
                                    backgroundColor: "#8bb5ef",
                                }}
                                border={true}
                            >
                                <Text
                                    as="h1"
                                    style={{ marginLeft: 15, color: "#222" }}
                                >
                                    Title
                                </Text>
                                <Text
                                    as="div"
                                    style={{ marginLeft: 15, color: "#222" }}
                                >
                                    One or two sentence description that may go
                                    to several lines. One or two sentence
                                    description that may go to several lines.
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text.
                                </Text>
                            </Card>
                        </Col>
                        <Col
                            xs={12}
                            md={6}
                            sm={6}
                            lg={4}
                            style={{ margin: "10px 0px" }}
                        >
                            <Card
                                variant="outline"
                                colorScheme="primary"
                                justifyContent="space-evenly"
                                style={{
                                    height: 250,
                                    borderRadius: 5,
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    overflow: "hidden",
                                    backgroundColor: "#8bb5ef",
                                }}
                                border={true}
                            >
                                <Text
                                    as="h1"
                                    style={{ marginLeft: 15, color: "#222" }}
                                >
                                    Title
                                </Text>
                                <Text
                                    as="div"
                                    style={{ marginLeft: 15, color: "#222" }}
                                >
                                    One or two sentence description that may go
                                    to several lines. One or two sentence
                                    description that may go to several lines.
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text.
                                </Text>
                            </Card>
                        </Col>
                        <Col
                            xs={12}
                            md={6}
                            sm={6}
                            lg={4}
                            style={{ margin: "10px 0px" }}
                        >
                            <Card
                                variant="outline"
                                colorScheme="primary"
                                justifyContent="space-evenly"
                                style={{
                                    height: 250,
                                    borderRadius: 5,
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    overflow: "hidden",
                                    backgroundColor: "#8bb5ef",
                                }}
                                border={true}
                            >
                                <Text
                                    as="h1"
                                    style={{ marginLeft: 15, color: "#222" }}
                                >
                                    Title
                                </Text>
                                <Text
                                    as="div"
                                    style={{
                                        marginLeft: 15,
                                        color: "#222",
                                    }}
                                >
                                    One or two sentence description that may go
                                    to several lines. One or two sentence
                                    description that may go to several lines.
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text.
                                </Text>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Section>

            {/* =========== Container, Col, Row Component End Here =========== */}

            {/* =========== Pagination Section Start Here ========= */}

            <Section style={{ padding: "20px 9%" }}>
                <Text as="h2">Pagination Components</Text>
                <Divider
                    orientation="horizontal"
                    variant="solid"
                    style={{ marginBottom: 20 }}
                />
                <Flex flexDirection="column">
                    <Text as="h4" textAlign="left" fontSize="16px">
                        Pagination With Variants
                    </Text>
                    <Pagination
                        variant="ghost"
                        totalPages={10}
                        currentPage={currentPage}
                        goToNextPage={() => setCurrentPage(currentPage + 1)}
                        goToPreviousPage={() => setCurrentPage(currentPage - 1)}
                        changePage={setCurrentPage}
                        size="small"
                        pageSize={5}
                        className="ghostPagination"
                        style={{
                            flexDirection: "column",
                            [`@media ${BreakPoints.mobileL}`]: {
                                flexDirection: "row",
                            },
                        }}
                    />
                    <Pagination
                        variant="outline"
                        totalPages={10}
                        currentPage={currentPage1}
                        goToNextPage={() => setCurrentPage1(currentPage1 + 1)}
                        goToPreviousPage={() =>
                            setCurrentPage1(currentPage1 - 1)
                        }
                        changePage={setCurrentPage1}
                        size="small"
                        pageSize={5}
                        style={{
                            flexDirection: "column",
                            [`@media ${BreakPoints.mobileL}`]: {
                                flexDirection: "row",
                            },
                        }}
                    />
                    <Pagination
                        variant="solid"
                        totalPages={10}
                        currentPage={currentPage2}
                        goToNextPage={() => setCurrentPage2(currentPage2 + 1)}
                        goToPreviousPage={() =>
                            setCurrentPage2(currentPage2 - 1)
                        }
                        changePage={setCurrentPage2}
                        size="small"
                        pageSize={5}
                        style={{
                            marginBottom: 20,
                            flexDirection: "column",
                            [`@media ${BreakPoints.mobileL}`]: {
                                flexDirection: "row",
                            },
                        }}
                    />
                </Flex>
            </Section>
            {/* =========== Pagination Section Start Here ========= */}

            {/* =========== Flex Component Start Here =========== */}

            <Section style={{ padding: "20px 9%" }}>
                <Text as="h2" textAlign="left">
                    Flex Component
                </Text>
                <Divider
                    orientation="horizontal"
                    variant="solid"
                    style={{ marginBottom: 20 }}
                />
                <Text
                    as="h4"
                    textAlign="left"
                    fontSize="16px"
                    style={{ marginBottom: "10px" }}
                >
                    Flex-Basis
                </Text>

                <Flex
                    justifyContent="space-between"
                    flexDirection={{ lg: "row" }}
                    alignItems="center"
                    flexWrap={{
                        xs: "wrap",
                        sm: "wrap",
                        md: "wrap",
                    }}
                    style={{
                        [`@media ${BreakPoints.tabletS}`]: {
                            marginRight: "15px",
                        },
                    }}
                >
                    <FlexItem
                        flexBasis={{
                            lg: "20%",
                            md: "20%",
                            sm: "50%",
                            xs: "100%",
                        }}
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#ebebeb" : "#212121",
                            padding: "20px",
                        }}
                    >
                        <Text textAlign="center">item-1</Text>
                    </FlexItem>
                    <FlexItem
                        flexBasis={{
                            lg: "20%",
                            md: "20%",
                            sm: "50%",
                            xs: "100%",
                        }}
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#96a5b3" : "#212121",
                            padding: "20px",
                        }}
                    >
                        <Text textAlign="center">item-2</Text>
                    </FlexItem>
                    <FlexItem
                        flexBasis={{
                            lg: "20%",
                            md: "20%",
                            sm: "50%",
                            xs: "100%",
                        }}
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#ebebeb" : "#212121",
                            padding: "20px",
                        }}
                    >
                        <Text textAlign="center">item-3</Text>
                    </FlexItem>
                    <FlexItem
                        flexBasis={{
                            lg: "20%",
                            md: "20%",
                            sm: "50%",
                            xs: "100%",
                        }}
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#96a5b3" : "#212121",
                            padding: "20px",
                        }}
                    >
                        <Text textAlign="center">item-4</Text>
                    </FlexItem>
                </Flex>
            </Section>

            {/* =========FLEX GROW========= */}
            <Section style={{ padding: "20px 9%" }}>
                <Text
                    as="h4"
                    textAlign="left"
                    fontSize="16px"
                    style={{ marginBottom: "10px" }}
                >
                    Flex-Grow
                </Text>
                <Flex
                    justifyContent="space-between"
                    flexWrap={{
                        lg: "wrap",
                        md: "wrap",
                        sm: "wrap",
                        xs: "wrap",
                    }}
                    style={{
                        [`@media ${BreakPoints.tabletS}`]: {
                            marginRight: "15px",
                        },
                    }}
                >
                    <FlexItem
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#96a5b3" : "#212121",
                            padding: "20px",
                            marginRight: "15px",
                        }}
                    >
                        <Text textAlign="center">item-1</Text>
                    </FlexItem>
                    <FlexItem
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#ebebeb" : "#212121",
                            padding: "20px",
                            marginRight: "15px",
                        }}
                    >
                        <Text textAlign="center">item-2</Text>
                    </FlexItem>
                    <FlexItem
                        flexGrow={{ xs: 1, sm: 1, md: 1, lg: 2 }}
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#96a5b3" : "#212121",
                            padding: "20px",
                            marginRight: "15px",
                        }}
                    >
                        <Text textAlign="center">item-3</Text>
                    </FlexItem>
                    <FlexItem
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#ebebeb" : "#212121",
                            padding: "20px",
                        }}
                    >
                        <Text textAlign="center">item-4</Text>
                    </FlexItem>
                </Flex>
            </Section>
            {/* =========FLEX SHRINK======= */}
            <Section style={{ padding: "20px 9%" }}>
                <Text
                    as="h4"
                    textAlign="left"
                    fontSize="16px"
                    style={{ marginBottom: "10px" }}
                >
                    Flex-Shrink
                </Text>
                <Flex
                    justifyContent="flex-start"
                    flexWrap={{
                        lg: "wrap",
                        md: "wrap",
                        sm: "wrap",
                        xs: "wrap",
                    }}
                    style={{
                        [`@media ${BreakPoints.tabletS}`]: {
                            marginRight: "15px",
                        },
                    }}
                >
                    <FlexItem
                        flexGrow={{ xs: 1, sm: 1, md: 2, lg: 2 }}
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#96a5b3" : "#212121",
                            padding: "20px",
                            marginRight: "15px",
                        }}
                    >
                        <Text textAlign="center">item-1</Text>
                    </FlexItem>
                    <FlexItem
                        flexGrow={{ xs: 1, sm: 1, md: 2, lg: 2 }}
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#ebebeb" : "#212121",
                            padding: "20px",
                            marginRight: "15px",
                        }}
                    >
                        <Text textAlign="center">item-2</Text>
                    </FlexItem>
                    <FlexItem
                        flexShrink={{ xs: 1, sm: 1, md: 3, lg: 3 }}
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#96a5b3" : "#212121",
                            padding: "20px",
                            marginRight: "15px",
                        }}
                    >
                        <Text textAlign="center">item-3</Text>
                    </FlexItem>
                    <FlexItem
                        flexGrow={{ xs: 1, sm: 1, md: 2, lg: 2 }}
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#ebebeb" : "#212121",
                            padding: "20px",
                        }}
                    >
                        <Text textAlign="center">item-4</Text>
                    </FlexItem>
                </Flex>
            </Section>
            {/* =========== Flex Component End Here =========== */}

            {/* =========== Grid templateColumns Start Here =========== */}

            <section style={{ padding: "20px 9%" }}>
                <Text as="h2" textAlign="left">
                    Grid Component
                </Text>
                <Divider
                    orientation="horizontal"
                    variant="solid"
                    style={{ marginBottom: 20 }}
                />
                <Text
                    as="h4"
                    textAlign="left"
                    fontSize="16px"
                    style={{ marginBottom: "10px" }}
                >
                    Grid Component templateColumn and templateRows
                </Text>
                <Grid
                    templateColumns={{
                        lg: "repeat(5,1fr)",
                        md: "repeat(3,1fr)",
                        sm: "repeat(3,1fr)",
                        xs: "repeat(2,1fr)",
                    }}
                    templateRows={{
                        lg: "repeat(3,1fr)",
                        md: "repeat(3,1fr)",
                        sm: "repeat(2,1fr)",
                        xs: "repeat(1,1fr)",
                    }}
                    gap={24}
                >
                    <GridItem
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#ebebeb" : "#212121",
                            padding: "20px",
                            justifyContent: "center",
                        }}
                    >
                        <Text textAlign="center"> item-1 </Text>
                    </GridItem>

                    <GridItem
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#ebebeb" : "#212121",
                            padding: "20px",
                            justifyContent: "center",
                        }}
                    >
                        <Text textAlign="center">item-2</Text>
                    </GridItem>

                    <GridItem
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#ebebeb" : "#212121",

                            padding: "20px",
                            justifyContent: "center",
                        }}
                    >
                        <Text textAlign="center">item-3</Text>
                    </GridItem>

                    <GridItem
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#ebebeb" : "#212121",

                            padding: "20px",
                            justifyContent: "center",
                        }}
                    >
                        <Text textAlign="center">item-4</Text>
                    </GridItem>

                    <GridItem
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#ebebeb" : "#212121",
                            padding: "20px",
                            justifyContent: "center",
                        }}
                    >
                        <Text textAlign="center">item-5</Text>
                    </GridItem>

                    <GridItem
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#ebebeb" : "#212121",
                            padding: "20px",
                            justifyContent: "center",
                        }}
                    >
                        <Text textAlign="center">item-6</Text>
                    </GridItem>

                    <GridItem
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#ebebeb" : "#212121",

                            padding: "20px",
                            justifyContent: "center",
                        }}
                    >
                        <Text textAlign="center">item-7</Text>
                    </GridItem>
                </Grid>
            </section>

            {/* ============Spanning grid columns and rows============= */}
            {/* =======ROW SPAN START======= */}

            <section style={{ padding: "20px 9%" }}>
                <Text
                    as="h4"
                    textAlign="left"
                    fontSize="16px"
                    style={{ marginBottom: "10px" }}
                >
                    Grid Component Spanning templateRows
                </Text>

                <Grid
                    templateColumns={{
                        lg: "repeat(3,1fr)",
                        md: "repeat(3,1fr)",
                        sm: "repeat(2,1fr)",
                    }}
                    templateRows={{
                        lg: "repeat(3,1fr)",
                        md: "repeat(2,1fr)",
                        sm: "repeat(1,1fr)",
                    }}
                    gap={24}
                >
                    <GridItem
                        rowSpan={{
                            sm: 2,
                        }}
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#ebebeb" : "#212121",
                            padding: "20px",
                            justifyContent: "center",
                        }}
                    >
                        item-1
                    </GridItem>
                    <GridItem
                        rowSpan={{
                            md: 2,
                        }}
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#ebebeb" : "#212121",
                            padding: "20px",
                            justifyContent: "center",
                        }}
                    >
                        item-2
                    </GridItem>
                    <GridItem
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#ebebeb" : "#212121",
                            padding: "20px",
                            justifyContent: "center",
                        }}
                    >
                        item-3
                    </GridItem>
                    <GridItem
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#ebebeb" : "#212121",
                            padding: "20px",
                            justifyContent: "center",
                        }}
                    >
                        item-4
                    </GridItem>
                    <GridItem
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#ebebeb" : "#212121",
                            padding: "20px",
                            justifyContent: "center",
                        }}
                    >
                        item-5
                    </GridItem>
                </Grid>
            </section>
            {/* =======END OF ROW SPAN======= */}

            {/* =======COLUMN SPAN START======= */}

            <section style={{ padding: "20px 9%" }}>
                <Text
                    as="h4"
                    textAlign="left"
                    fontSize="16px"
                    style={{ marginBottom: "10px" }}
                >
                    Grid Component Spanning templateColumns
                </Text>

                <Grid
                    templateColumns={{
                        lg: "repeat(3,1fr)",
                        md: "repeat(3,1fr)",
                        sm: "repeat(2,1fr)",
                    }}
                    templateRows={{
                        lg: "repeat(3,1fr)",
                        md: "repeat(2,1fr)",
                        sm: "repeat(1,1fr)",
                    }}
                    gap={24}
                >
                    <GridItem
                        colSpan={{
                            md: 2,
                        }}
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#ebebeb" : "#212121",
                            padding: "20px",
                            justifyContent: "center",
                        }}
                    >
                        item-1
                    </GridItem>
                    <GridItem
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#ebebeb" : "#212121",
                            padding: "20px",
                            justifyContent: "center",
                        }}
                    >
                        item-2
                    </GridItem>
                    <GridItem
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#ebebeb" : "#212121",
                            padding: "20px",
                            justifyContent: "center",
                        }}
                    >
                        item-3
                    </GridItem>
                    <GridItem
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#ebebeb" : "#212121",
                            padding: "20px",
                            justifyContent: "center",
                        }}
                    >
                        item-4
                    </GridItem>
                    <GridItem
                        colSpan={{
                            sm: 2,
                        }}
                        style={{
                            backgroundColor:
                                themeMode === "light" ? "#ebebeb" : "#212121",
                            padding: "20px",
                            justifyContent: "center",
                        }}
                    >
                        item-5
                    </GridItem>
                </Grid>
            </section>

            {/* =========== Debounce & Throttle Component start Here =========== */}
            <Section
                style={{
                    padding: "20px 9%",
                }}
            >
                <Text as="h2" textAlign="left">
                    Debounce and Throttle Hook
                </Text>
                <Divider
                    orientation="horizontal"
                    variant="solid"
                    style={{ marginBottom: 20 }}
                />
                <Flex justifyContent="space-between" alignItems="baseline">
                    <FlexItem
                        flexBasis={{
                            lg: "45%",
                            md: "45%",
                            sm: "80%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 1, marginBottom: 30 }}
                    >
                        <Text as="h4" fontSize="16px">
                            Input using Debounce Hook
                        </Text>
                        <Input
                            id="debounceInput"
                            placeholder="Please enter username"
                            value={debounceValue}
                            variant="ghost"
                            colorScheme="primary"
                            label="Debounce Input"
                            isRequired
                            onChange={onChangeDebounceHandler}
                            style={{
                                marginTop: 20,
                            }}
                            className="inputClass"
                        />
                        <Text as="h6" style={{ marginTop: 20 }}>
                            Input Text Debounced after 1000 Milli Second
                        </Text>
                        <Text style={{ marginTop: 20 }}>
                            Default Input Text: {debounceValue}
                        </Text>
                        <Text style={{ marginTop: 20 }}>
                            Debounced Input Text: {debouncedValue}
                        </Text>
                    </FlexItem>
                    <FlexItem
                        flexBasis={{
                            lg: "45%",
                            md: "45%",
                            sm: "80%",
                            xs: "100%",
                        }}
                        style={{ flexGrow: 1, order: 2, marginBottom: 30 }}
                    >
                        <Text as="h4" fontSize="16px">
                            Input using Throttle Hook
                        </Text>
                        <Input
                            id="throttleInput"
                            placeholder="Please enter firstname"
                            value={throttleText}
                            variant="ghost"
                            colorScheme="primary"
                            label="Throttle Input"
                            isRequired
                            onChange={onChangeThrottleHandler}
                            style={{
                                marginTop: 20,
                            }}
                            className="inputClass"
                        />
                        <Text as="h6" style={{ marginTop: 20 }}>
                            Input Text Throttled after every interval of 3000
                            Milli Second
                        </Text>
                        <Text style={{ marginTop: 20 }}>
                            Default Input Text: {throttleText}
                        </Text>
                        <Text style={{ marginTop: 20 }}>
                            Throttled Input Text: {throttledValue}
                        </Text>
                    </FlexItem>
                </Flex>
            </Section>
            {/* =========== Loader Component starts here =========== */}
            <Section style={{ padding: "20px 9%" }}>
                <Text as="h2" textAlign="left">
                    Loader Component
                </Text>
                <Divider
                    orientation="horizontal"
                    variant="solid"
                    style={{ marginBottom: 20 }}
                />
                <Flex className="loader_div" justifyContent="center">
                    <FlexItem
                        style={{
                            position: "relative",
                        }}
                    >
                        <Text fontFamily="Gotham-Bold">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Voluptates non possimus sequi, id earum
                            voluptas fugit? Magni, ducimus <br /> saepe numquam
                            ratione laborum aperiam labore placeat, consectetur
                            nemo, sed officia. Dolor.
                        </Text>
                        <Loader zIndex={99999} size="sm" />
                    </FlexItem>
                </Flex>
            </Section>
            {/* =========== Loader Component ends here =========== */}
            {/* Input Range component starts here  */}
            <Section style={{ padding: "40px 9%" }}>
                <Text as="h4" textAlign="left">
                    Input Range Component
                </Text>
                <InputRange
                    errorMessage="please enter min and max value"
                    min={0}
                    max={100}
                    iconSpacing={"30px"}
                    onChange={handleChange}
                    label="This is testing label"
                    inputRangeLeftChildren={
                        <SkipBack height={20} width={20} color="#1d78f3" />
                    }
                    inputRangeRightChildren={
                        <SkipForward height={20} width={20} color="#1d78f3" />
                    }
                    value={rangeValue}
                    // orientation="vertical"
                />
            </Section>
            {/* Input Range component ends here  */}
            {/* =========== Debounce & Throttle Component End Here =========== */}

            {/* =========== Footer Section Start Here =========== */}
            <NavigationSection
                id="footer_component"
                as="footer"
                colorScheme="accent"
                style={{
                    padding: "40px 40px",
                    backgroundColor:
                        themeMode === "light" ? "#edf2f6" : "#212121",
                }}
            >
                <Text as="h2" textAlign="center" style={{ marginRight: 20 }}>
                    Footer Component
                </Text>
            </NavigationSection>

            {/* =========== Footer Section End Here =========== */}

            {defaultModal && (
                <Modal
                    closeIcon={<X size="16px" />}
                    onClick={() => setDefaultModal(!defaultModal)}
                    className="modalTest"
                >
                    <Text as="h3" textAlign="left">
                        Welcome to the page
                    </Text>
                    <Divider
                        style={{ margin: "15px  0", borderColor: "#ddd" }}
                        orientation="horizontal"
                        variant="solid"
                        borderWidth="1px"
                    />
                    <Text style={{ padding: "20px 0" }} textAlign="left">
                        Hi, Lorem ipsum st de...
                    </Text>
                    <Divider
                        style={{ margin: "15px  0", borderColor: "#ddd" }}
                        orientation="horizontal"
                        variant="solid"
                        borderWidth="1px"
                    />
                    <Button
                        style={{
                            alignSelf: "flex-end",
                            color: themeMode === "light" ? "#000000" : "#fff",
                            borderColor:
                                themeMode === "light" ? "#000000" : "#fff",
                        }}
                        variant="outline"
                        onClick={() => setDefaultModal(!defaultModal)}
                    >
                        Close
                    </Button>
                </Modal>
            )}
            {leftTopModal && (
                <Modal
                    position="topLeft"
                    hideBackdrop
                    onClick={() => setLeftTopModalModal(!leftTopModal)}
                >
                    <Text as="h3" textAlign="left">
                        Welcome to the page
                    </Text>
                    <Divider
                        style={{ margin: "15px  0", borderColor: "#ddd" }}
                        orientation="horizontal"
                        variant="solid"
                        borderWidth="1px"
                    />
                    <Text style={{ padding: "20px 0" }} textAlign="left">
                        Hi, Lorem ipsum st de...
                    </Text>
                    <Divider
                        style={{ margin: "15px  0", borderColor: "#ddd" }}
                        orientation="horizontal"
                        variant="solid"
                        borderWidth="1px"
                    />
                    <Button
                        style={{
                            alignSelf: "flex-end",
                            color: themeMode === "light" ? "#000000" : "#fff",
                            borderColor:
                                themeMode === "light" ? "#000000" : "#fff",
                        }}
                        onClick={() => setLeftTopModalModal(!leftTopModal)}
                    >
                        Close
                    </Button>
                </Modal>
            )}
            {rightTopModal && (
                <Modal
                    position="topRight"
                    hideBackdrop
                    onClick={() => setRightTopModal(!rightTopModal)}
                >
                    <Text as="h3" textAlign="left">
                        Welcome to the page
                    </Text>
                    <Divider
                        style={{ margin: "15px  0", borderColor: "#ddd" }}
                        orientation="horizontal"
                        variant="solid"
                        borderWidth="1px"
                    />
                    <Text style={{ padding: "20px 0" }} textAlign="left">
                        Hi, Lorem ipsum st de...
                    </Text>
                    <Divider
                        style={{ margin: "15px  0", borderColor: "#ddd" }}
                        orientation="horizontal"
                        variant="solid"
                        borderWidth="1px"
                    />
                    <Button
                        style={{
                            alignSelf: "flex-end",
                            color: themeMode === "light" ? "#000000" : "#fff",
                            borderColor:
                                themeMode === "light" ? "#000000" : "#fff",
                        }}
                        onClick={() => setRightTopModal(!rightTopModal)}
                    >
                        Close
                    </Button>
                </Modal>
            )}

            {rightBottomModal && (
                <Modal
                    position="bottomRight"
                    hideBackdrop
                    onClick={() => setRightBottomModal(!rightBottomModal)}
                >
                    <Text as="h3" textAlign="left">
                        Welcome to the page
                    </Text>
                    <Divider
                        style={{ margin: "15px  0", borderColor: "#ddd" }}
                        orientation="horizontal"
                        variant="solid"
                        borderWidth="1px"
                    />
                    <Text style={{ padding: "20px 0" }} textAlign="left">
                        Hi, Lorem ipsum st de...
                    </Text>
                    <Divider
                        style={{ margin: "15px  0", borderColor: "#ddd" }}
                        orientation="horizontal"
                        variant="solid"
                        borderWidth="1px"
                    />
                    <Button
                        style={{
                            alignSelf: "flex-end",
                            color: themeMode === "light" ? "#000000" : "#fff",
                            borderColor:
                                themeMode === "light" ? "#000000" : "#fff",
                        }}
                        onClick={() => setRightBottomModal(!rightBottomModal)}
                    >
                        Close
                    </Button>
                </Modal>
            )}
            {leftBottomModal && (
                <Modal
                    position="bottomLeft"
                    hideBackdrop
                    onClick={() => setLeftBottomModal(!leftBottomModal)}
                >
                    <Text as="h3" textAlign="left">
                        Welcome to the page
                    </Text>
                    <Divider
                        style={{ margin: "15px  0", borderColor: "#ddd" }}
                        orientation="horizontal"
                        variant="solid"
                        borderWidth="1px"
                    />
                    <Text style={{ padding: "20px 0" }} textAlign="left">
                        Hi, Lorem ipsum st de...
                    </Text>
                    <Divider
                        style={{ margin: "15px  0", borderColor: "#ddd" }}
                        orientation="horizontal"
                        variant="solid"
                        borderWidth="1px"
                    />
                    <Button
                        style={{
                            alignSelf: "flex-end",
                            color: themeMode === "light" ? "#000000" : "#fff",
                            borderColor:
                                themeMode === "light" ? "#000000" : "#fff",
                        }}
                        onClick={() => setLeftBottomModal(!leftBottomModal)}
                    >
                        Close
                    </Button>
                </Modal>
            )}
        </>
    );
};

export default Demo;
