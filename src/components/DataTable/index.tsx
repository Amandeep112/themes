import React, { useMemo, useState } from "react";
import { cx as classNames } from "@emotion/css";
import styled, { CSSObject } from "@emotion/styled";
import { PropTypes } from "../../utils/propType";
import { Property } from "../../utils/types";
import DataTableBody from "./dataTableBody";
import DataTableHeader from "./dataTableHeader";
import DataTableRow from "./dataTableRow";
import DataTableColumn from "./dataTableColumn";
import { ArrowDown } from "react-feather";
import { Flex } from "../Flex";
import { Text } from "../Text";
import DataTablePagination from "./dataTablePagination";
import { DataTableContext } from "./dataTableContext";

export type coumnSort<T> = (a: T, b: T) => number;
type columnProps<T> = {
    id: string;
    style?: CSSObject;
    name: string | JSX.Element;
    sort?: boolean;
    sortFunction?: coumnSort<T>;
};

interface DataTablePropType<T> extends PropTypes {
    /**
     * To specify the particular width
     * @property {Property.Width}
     */
    width?: Property.Width;
    /**
     * To specify the particular height
     * @property {Property.Height}
     */
    height?: Property.Height;
    /**
     * To provide header for the table
     * @property {boolean}
     */
    header?: boolean;
    /**
     * To rounds the corner of element
     * @property {Property.BorderRadius}
     */
    borderRadius?: Property.BorderRadius;
    /**
     * To specify the columns to the table
     * @property { columnProps<T>[]}
     */
    columns?: columnProps<T>[];
    /**
     * To provide the data(content) for table
     * @property {T[]}
     */
    data?: T[];
    /**
     * To display the error message
     * @property {JSX.Element | string}
     */
    errorMessage?: JSX.Element | string;
    /**
     * To sorting in particular direction
     * @property {boolean}
     */
    sortDirection?: boolean;
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
     * To define size to the pages
     * @property {number}
     */
    pageSize?: number;
    /**
     * Event occurs on page changes
     * @property {void}
     *
     **/
    onPageChange?: (page: number) => void;
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
    /**
     * To specify the particular width to the coloumn
     * @property {Property.FlexBasis}
     */
    columnWidth?:
        | {
              xs?: Property.FlexBasis;
              sm?: Property.FlexBasis;
              md?: Property.FlexBasis;
              lg?: Property.FlexBasis;
              xl?: Property.FlexBasis;
              xxl?: Property.FlexBasis;
          }
        | Property.FlexBasis;
}

/**
 * @function StyledDataTableProps
 * This function that takes all props (passed by the emotion itself) as a argument returns object of its types
 */
type StyledDataTableProps = {
    overrideStyle?: PropTypes["style"];
} & Partial<DataTablePropType<React.ElementType>>;

/**
 * @function EmotionDataTableWrapper
 * This function is used to wrap the Inner Item for style
 */
export const EmotionDataTableWrapper = styled("div")(
    ({ overrideStyle, width, height, borderRadius }: StyledDataTableProps) => {
        return {
            display: "flex",
            flexDirection: "column",
            width,
            borderRadius,
            height,
            flex: 1,

            ...overrideStyle,
        };
    },
);

export const EmotionDataTable = styled(Flex)(() => {
    return {
        overflow: "auto",
        flex: 1,
        width: "100%",
        alignItems: "unset",
    };
});

export const DataTable = React.forwardRef<
    HTMLDivElement,
    React.PropsWithChildren<DataTablePropType<React.ElementType>>
>(
    (
        {
            id,
            style,
            children,
            header,
            columns,
            data,
            errorMessage,
            className,
            nextIcon,
            prevIcon,
            pageSize,
            columnWidth,
            variant,
            type,
            onPageChange,
            onNextClickListener,
            onPrevClickListener,
            colorScheme,
            sortDirection: sortAsc,
            ...props
        },
        ref,
    ) => {
        const [sortDirection, setSortDirection] = React.useState(sortAsc);
        const [currentPage, setCurrentPage] = useState(1);
        const [dataFilter, setDataFilter] = React.useState(data);

        const currentTableData = useMemo(() => {
            const firstPageIndex = (currentPage - 1) * pageSize;
            const lastPageIndex = firstPageIndex + pageSize;
            return [...dataFilter].slice(firstPageIndex, lastPageIndex);
        }, [currentPage, dataFilter]);

        return (
            <DataTableContext.Provider
                value={{
                    variant: variant,
                    colorScheme: colorScheme,
                    type: type,
                }}
            >
                <EmotionDataTableWrapper
                    id={id}
                    ref={ref}
                    overrideStyle={style}
                    className={classNames(className)}
                    {...props}
                >
                    <EmotionDataTable
                        justifyContent={"stretch"}
                        flexDirection="column"
                        flexWrap={"nowrap"}
                    >
                        {header && (
                            <DataTableHeader data-header="data">
                                {columns.length > 0 &&
                                    columns.map((column) => (
                                        <DataTableColumn
                                            data-column="data-head"
                                            flexBasis={columnWidth}
                                            data-head="content"
                                            style={column.style}
                                            key={`datatable_column_${column.id}`}
                                            id={`datatable_column_id_${column.name}_${column.id}`}
                                        >
                                            <Flex justifyContent={"flex-start"}>
                                                {column.name}
                                                {column.sort && (
                                                    <ArrowDown
                                                        width={"15px"}
                                                        height={"15px"}
                                                        onClick={
                                                            column.sort &&
                                                            column.sortFunction
                                                                ? () => {
                                                                      setSortDirection(
                                                                          !sortDirection,
                                                                      );

                                                                      const columnSort =
                                                                          column.sortFunction;
                                                                      const customSortFunction =
                                                                          sortDirection
                                                                              ? columnSort
                                                                              : (
                                                                                    a,
                                                                                    b,
                                                                                ) => {
                                                                                    return (
                                                                                        columnSort(
                                                                                            a,
                                                                                            b,
                                                                                        ) *
                                                                                        -1
                                                                                    );
                                                                                };
                                                                      const sortList =
                                                                          [
                                                                              ...dataFilter,
                                                                          ].sort(
                                                                              customSortFunction,
                                                                          );
                                                                      setDataFilter(
                                                                          sortList,
                                                                      );
                                                                  }
                                                                : undefined
                                                        }
                                                    />
                                                )}
                                            </Flex>
                                        </DataTableColumn>
                                    ))}
                            </DataTableHeader>
                        )}
                        {currentTableData.length > 0 ? (
                            <DataTableBody data-body="data">
                                {currentTableData.map((item, _id) => (
                                    <DataTableRow
                                        key={`datatable_data_${_id}`}
                                        id={`datatable_data_id_${_id}`}
                                        data-row="content"
                                    >
                                        {Object.values(item).map((val, i) => (
                                            <DataTableColumn
                                                data-column="data-body"
                                                flexBasis={columnWidth}
                                                key={`data-column-body_${val}_${i}`}
                                                id={`data-column-body_${val}_${i}`}
                                                data-cell="content"
                                            >
                                                {val}
                                            </DataTableColumn>
                                        ))}
                                    </DataTableRow>
                                ))}
                            </DataTableBody>
                        ) : errorMessage ? (
                            errorMessage
                        ) : (
                            <Text data-text="no-data">No Record Found</Text>
                        )}
                    </EmotionDataTable>
                    {children}
                    <DataTablePagination
                        currentPage={currentPage}
                        totalCount={dataFilter.length}
                        onPageChange={
                            onPageChange
                                ? (page) => onPageChange(page)
                                : (page) => setCurrentPage(page)
                        }
                        onNextClickListener={onNextClickListener}
                        onPrevClickListener={onPrevClickListener}
                        pageSize={pageSize}
                        nextIcon={nextIcon}
                        prevIcon={prevIcon}
                        style={{
                            marginTop: 20,
                        }}
                    />
                </EmotionDataTableWrapper>
            </DataTableContext.Provider>
        );
    },
);

export default DataTable;

/**
 * defaultProps - To define default values for component props
 */
DataTable.defaultProps = {
    header: true,
    pageSize: 5,
    columnWidth: {
        xs: "20%",
        sm: "20%",
        md: "20%",
        lg: "20%",
        xl: "20%",
        xxl: "20%",
    },
    type: "bordered",
    colorScheme: "primary",
    variant: "solid",
};
