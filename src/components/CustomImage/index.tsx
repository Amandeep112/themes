import React, { ReactElement } from "react";

interface Props<C extends React.ElementType> {
    /**
     * To override the purpose of default HTML tag.
     * @property {string}
     */
    as?: C;

    /**
     * To pass child inside the component
     * @property {void}
     */
    children?: React.ReactNode;
}

type ImageProps<C extends React.ElementType> = Props<C> &
    Omit<React.ComponentPropsWithoutRef<C>, keyof Props<C>>;

export const CustomImage = <C extends React.ElementType = "img">({
    as,
    children,
    ...other
}: ImageProps<C>): ReactElement | null => {
    const Component = as || "img";
    return <Component {...other}>{children}</Component>;
};
