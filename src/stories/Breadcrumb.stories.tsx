import { Breadcrumb } from "../components/index";
import { BreadcrumbLink } from "../components/index";

export default {
    title: "Breadcrumb",
    component: Breadcrumb,
    parameters: {
        docs: {
            description: {
                component:
                    "Indicate the current page’s location within a navigational hierarchy that automatically adds separators.",
            },
        },
    },
};

const breadCrumbList = [
    { id: "1", to: "test", label: "Label1" },
    { id: "2", to: "test1", label: "Label2" },
    { id: "3", to: "test2", label: "Label3" },
];

const Template = (args) => (
    <Breadcrumb {...args}>
        {breadCrumbList.map(({ to, label }) => (
            <BreadcrumbLink id="breadcrumblink" key={to}>
                {label}
            </BreadcrumbLink>
        ))}
    </Breadcrumb>
);

export const DefBreadcrumb = Template.bind({});
DefBreadcrumb.args = {
    separator: "/",
    colorScheme: "primary",
};
