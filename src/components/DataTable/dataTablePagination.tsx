import React from "react";
import { cx as classNames } from "@emotion/css";
import styled from "@emotion/styled";
import { PropTypes } from "../../utils/propType";
import { StyledButtonProps, Button } from "../Button";
import { ChevronLeft, ChevronRight } from "react-feather";
import { usePagination, DOTS } from "./usePagination";
import { DataTableContext } from "./dataTableContext";

interface DataTablePaginationPropType
    extends PropTypes,
        StyledButtonProps<React.ElementType> {
    /**
     * To provide unique ID
     * @property {string}
     */
    id?: string;
    /**
     * To define size to the pages
     * @property {number}
     */
    pageSize?: number;
    /**
     * To provide current page number
     * @property {number}
     */
    currentPage?: number;
    /**
     * To provide icon for next tab
     * @property {JSX.Element}
     */
    nextIcon?: JSX.Element;
    /**
     * To provide icon for previous tab
     * @property {JSX.Element}
     */
    prevIcon?: JSX.Element;
    /**
     * To get the total count
     * @property {number}
     */
    totalCount?: number;
    siblingCount?: number;
    /**
     * Event occurs on page changes
     * @property {void}
     *
     **/
    onPageChange?: (page: any) => void;
    /**
     * Event occurs on clicking next
     * @property {void}
     *
     **/
    onNextClickListener: () => void;
    /**
     * Event occurs on clicking previous
     * @property {void}
     *
     **/
    onPrevClickListener: () => void;
}

/**
 * @function StyledDataTablePaginationProps
 * This function that takes all props (passed by the emotion itself) as a argument returns object of its types
 */
type StyledDataTablePaginationProps = {
    overrideStyle?: PropTypes["style"];
} & Partial<DataTablePaginationPropType>;

/**
 * @function EmotionDataTablePagination
 * This function is used to wrap the Inner Item for style
 */
const EmotionDataTablePagination = styled("div")(
    ({ overrideStyle }: StyledDataTablePaginationProps) => {
        return {
            display: "flex",
            flexWrap: "nowrap",
            ...overrideStyle,
        };
    },
);

const EmotionTablePaginationButton = styled(
    Button as React.FC<StyledButtonProps<React.ElementType>>,
)(({ theme, colorScheme }) => {
    const colorInPalette = theme.palette[colorScheme];
    return {
        borderRight: 0,
        "&:last-of-type": {
            borderRight: `1px solid ${colorInPalette.main}`,
        },

        ...(colorScheme && {
            "&.active-pagination": {
                backgroundColor: colorInPalette.hover,
                borderColor: colorInPalette.hover,
                color: colorInPalette.contrastText,
            },
        }),
    };
});

export const DataTablePagination = React.forwardRef<
    HTMLDivElement,
    React.PropsWithChildren<DataTablePaginationPropType>
>(
    (
        {
            id,
            style,
            className,
            prevIcon,
            nextIcon,
            currentPage,
            siblingCount = 1,
            pageSize,
            totalCount,
            onPageChange,
            onNextClickListener,
            onPrevClickListener,
            ...props
        },
        ref,
    ) => {
        const paginationRange = usePagination({
            currentPage,
            totalCount,
            siblingCount,
            pageSize,
        });

        if (currentPage === 0 || paginationRange.length < 2) {
            return null;
        }

        const onNext = () => {
            onPageChange(currentPage + 1);
            onNextClickListener && onNextClickListener();
        };

        const onPrevious = () => {
            onPageChange(currentPage - 1);
            onPrevClickListener && onPrevClickListener();
        };

        const lastPage = paginationRange[paginationRange.length - 1];
        const tableValues = React.useContext(DataTableContext);
        return (
            <EmotionDataTablePagination
                id={id}
                ref={ref}
                overrideStyle={style}
                className={classNames(className)}
                {...props}
            >
                <EmotionTablePaginationButton
                    startIcon={
                        prevIcon ? prevIcon : <ChevronLeft color="#222" />
                    }
                    aria-label={"prev"}
                    onClick={onPrevious}
                    disable={currentPage === 1}
                    variant={tableValues.variant}
                    colorScheme={tableValues.colorScheme}
                    spaceBetween={"0px"}
                />
                {paginationRange.map((pageNumber, idx) => {
                    if (pageNumber === DOTS) {
                        return (
                            <EmotionTablePaginationButton
                                key={`pagination_button_key_${idx}_${pageNumber}_${id}`}
                                id={`pagination_button_${idx}_${pageNumber}_${id}`}
                                variant={tableValues.variant}
                                colorScheme={tableValues.colorScheme}
                            >
                                &#8230;
                            </EmotionTablePaginationButton>
                        );
                    }

                    return (
                        <EmotionTablePaginationButton
                            key={`paginate_count_${pageNumber}_${idx}_${id}`}
                            className={
                                pageNumber === currentPage &&
                                "active-pagination"
                            }
                            variant={tableValues.variant}
                            colorScheme={tableValues.colorScheme}
                            onClick={() => onPageChange(pageNumber)}
                        >
                            {pageNumber}
                        </EmotionTablePaginationButton>
                    );
                })}

                <EmotionTablePaginationButton
                    disable={currentPage === lastPage}
                    endIcon={
                        nextIcon ? nextIcon : <ChevronRight color="#222" />
                    }
                    onClick={onNext}
                    aria-label={"next"}
                    variant={tableValues.variant}
                    colorScheme={tableValues.colorScheme}
                    spaceBetween={"0px"}
                />
            </EmotionDataTablePagination>
        );
    },
);

export default DataTablePagination;
