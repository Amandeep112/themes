import { ColorScheme } from "../utils/theme";
import { DetailedHTMLProps } from "./types";
import { CSSObject } from "@emotion/react";
export interface PropTypes<T = HTMLDivElement, E = React.ElementType>
    extends Omit<Partial<DetailedHTMLProps<T>>, "className"> {
    /** Id is used to point & manipulate the element with the specific id
     * @property {string}
     */
    id?: string;

    /** Disable action and styling */
    disable?: boolean;

    /** To override the purpose of default HTML tag.
     * @property {string}
     */
    as?: E;

    /** Theme based color scheme for styling with different colors */
    colorScheme?: ColorScheme;

    /**
     * To provide unique classname or identity to the element
     * @property {string | string[]}
     */
    className?: string | string[];

    /**
     * To provide style properties to the elements
     * @property {CSSObject}
     */
    style?: CSSObject;
}
