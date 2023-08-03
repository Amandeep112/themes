module.exports = {
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    staticDirs: ["../public"],
    addons: [
        "@emotion/react",
        "@storybook/addon-links",
        "@storybook/addon-docs",
    ],
    typescript: { reactDocgen: "none" },
    features: {
        emotionAlias: false,
    },
    // argTypes: {
    //     style: { control: "object" },
    // },
    framework: {
        name: "@storybook/nextjs",
        options: {},
    },
    docs: {
        autodocs: true,
    },
};
