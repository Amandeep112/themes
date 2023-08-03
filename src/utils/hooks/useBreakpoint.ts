export const useBreakPoint = (point: "xs" | "sm" | "lg" | "md"): string => {
    const points = {
        xs: "@media(max-width:767px)",
        sm: "@media(min-width:768px)",
        md: "@media(min-width:992px)",
        lg: "@media(min-width:1200px)",
    };
    return points[point];
};
