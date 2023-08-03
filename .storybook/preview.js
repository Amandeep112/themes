import React from "react";
import ThemeProvider from "../src/context/ThemeProvider";
import { defaultTheme } from "../src/context/ThemeProvider";
export const decorators = [
    (Story) => {
        return (
            <ThemeProvider theme={defaultTheme}>
                <Story />
            </ThemeProvider>
        );
    },
];

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    previewTabs: {
        canvas: { hidden: true },
    },
};
