import React from "react";
import { useSelectContext } from "./index";
import { ListItem, ListItemPropType } from "../ListItem";

interface SelectOptionPropType
    extends Omit<ListItemPropType, "isSelected" | "onClick" | "ref"> {
    /**to get selected value from ListItem */
    value: string;
    name?: string;
}
// selectOptions is used to pass as children in our select component,basically it will render as ListItem component
//it will contain value prop which describes that which label is selected
//rest is for spreding our all select props
export const SelectOptions: React.FC<SelectOptionPropType> = ({
    children,
    value,
    name,
    ...rest
}) => {
    const selectState = useSelectContext();
    const onKeyPressOption = (e) => {
        if (
            e.code === "Enter" ||
            e.code === "NumpadEnter" ||
            e.charCode === 13
        ) {
            selectState.onOptionSelect(value, name);
        }
    };
    return (
        <ListItem
            isSelected={value === selectState.selectedOptionId}
            onClick={() => selectState.onOptionSelect(value, name)}
            onKeyDown={onKeyPressOption}
            {...rest}
        >
            {children}
        </ListItem>
    );
};
