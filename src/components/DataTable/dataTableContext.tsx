import * as React from "react";
import { PropTypes } from "../../utils/propType";
// import { Theme } from "../../context/ThemeProvider";
interface DataTableContextProps extends Omit<PropTypes, "as"> {
    /**
     * 2 types of pagination variants : 'outline - bordered layout' and 'solid - filled layout'
     * @property {string}
     *
     **/
    variant?: "outline" | "solid";
    /**
     * 2 types of dataTable variants : 'bordered - bordered layout' and 'striped - "transparent background for even items and colored for odd items'
     * @property {string}
     *
     **/
    type?: "bordered" | "striped";
}
export const DataTableContext = React.createContext<
    DataTableContextProps | undefined
>(null);
