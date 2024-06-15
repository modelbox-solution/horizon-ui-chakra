import {
  Flex,
  Table,
  Progress,
  Icon,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

// Custom components
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";

// Assets
import { MdCheckCircle, MdCancel, MdOutlineError, MdWarning } from "react-icons/md";

export default function ColumnsTable(props) {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 5;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "auto" }}
    >
      <Flex px="25px" justify="space-between" mb="10px" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          Modelos en Producción
        </Text>
        <Menu />
      </Flex>
      <Table {...getTableProps()} variant="simple" color="gray.500" mb="24px">
        <div style={{ overflowY: "auto", height: "200px", width: "100%" }}>
          <Thead>
            {headerGroups.map((headerGroup, index) => (
              <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <Th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    pe="10px"
                    key={index}
                    borderColor={borderColor}
                  >
                    <Flex
                      justify="space-between"
                      align="center"
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color="gray.400"
                    >
                      {column.render("Header")}
                    </Flex>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()} style={{ width: "100%" }}>
            {page.map((row, index) => {
                prepareRow(row);

                return (
                  <Tr {...row.getRowProps()} key={index}>
                    {row.cells.map((cell, index) => {
                      let data = "";
                      if (cell.column.Header === "Modelo") {
                        data = (
                          <Text color={textColor} fontSize="sm" fontWeight="700">
                            {cell.value}
                          </Text>
                        );
                      } else if (cell.column.Header === "Estado") {
                        data = (
                          <Flex align="center">
                            <Icon
                              w="24px"
                              h="24px"
                              me="5px"
                              color={
                                cell.value === "Good"
                                  ? "green.500"
                                  : cell.value === "Degraded"
                                  ? "orange.500"
                                  : cell.value === "Poor"
                                  ? "red.500"
                                  : null
                              }
                              as={
                                cell.value === "Good"
                                  ? MdCheckCircle
                                  : cell.value === "Degraded"
                                  ? MdWarning
                                  : cell.value === "Poor"
                                  ? MdCancel
                                  : null
                              }
                            />
                            <Text color={textColor} fontSize="sm" fontWeight="700">
                              {cell.value}
                            </Text>
                          </Flex>
                        );
                      } else if (cell.column.Header === "Última predicción") {
                        data = (
                          <Text color={textColor} fontSize="sm" fontWeight="700">
                            {cell.value}
                          </Text>
                        );
                      } else if (cell.column.Header === "Consumo") {
                        data = (
                          <Flex align="center">
                            <Progress
                              variant="table"
                              colorScheme="brandScheme"
                              h="8px"
                              w="108px"
                              value={cell.value}
                            />
                          </Flex>
                        );
                      }
                      return (
                        <Td
                          {...cell.getCellProps()}
                          key={index}
                          fontSize={{ sm: "14px" }}
                          maxH="30px !important"
                          py="8px"
                          minW={{ sm: "150px", md: "200px", lg: "auto" }}
                          borderColor="transparent"
                        >
                          {data}
                        </Td>
                      );
                    })}
                  </Tr>
                );
              })}
          </Tbody>
        </div>

      </Table>

    </Card>
  );
}
