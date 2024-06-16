import {
  // Avatar,
  Box,
  // Flex,
  // FormLabel,
  Icon,
  // Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
// import Spain from "assets/img/dashboards/spain.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import {
  // MdAddTask,
  // MdAttachMoney,
  // MdBarChart,
  // MdFileCopy,
  MdAssessment,
  // MdModelTraining,
  MdPeople,
  // MdOutlineModelTraining,
} from "react-icons/md";
import { IoIosPersonAdd } from "react-icons/io";
import { 
  FaRobot,
  FaBox 
} from "react-icons/fa";
import { LuAlertTriangle } from "react-icons/lu";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
// import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const alertColor = useColorModeValue("red.500", "brand.500");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap="30px"
        mb="20px"
        maxWidth="3000px" // Ajusta según sea necesario
        mx="auto"         // Centrado horizontal
        placeItems="center" // Centrado horizontal y vertical
      >
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon w="32px" h="32px" as={FaBox} color={brandColor} />}
            />
          }
          name="Total de modelos en ModelBox"
          value="20"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={FaRobot} color={brandColor} />
              }
            />
          }
          name="Modelos en Producción"
          value="12"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon w="32px" h="32px" as={MdAssessment} color={brandColor} />}
            />
          }
          name="Multiplicador de tasa de éxito"
          value="x4.76"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg="linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)"
              icon={<Icon w="28px" h="28px" as={MdPeople} color="white" />}
            />
          }
          name="Clientes Potenciales Captados"
          value="1054"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon w="32px" h="32px" as={LuAlertTriangle} color={alertColor} />}
            />
          }
          name="Modelos con Peor Rendimiento"
          value="2"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon w="32px" h="32px" as={IoIosPersonAdd} color={brandColor} />}
            />
          }
          name="Mejor Owner"
          value="jperezr"
        />
      </SimpleGrid>
      

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <TotalSpent name="Rendimiento de Modelos" />
        <WeeklyRevenue name="Tása de éxito" />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <Box gridColumn={{ base: 'auto', xl: 'span 1' }}>
          <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
          <DailyTraffic />
          <PieCard />
        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 4 }} gap="20px" mb="20px">
        <Box gridColumn={{ base: 'auto', xl: 'span 3' }}> {/* El ComplexTable ocupa 3 huecos en pantallas grandes (xl) */}
          <ComplexTable
            columnsData={columnsDataComplex}
            tableData={tableDataComplex}
          />
        </Box>
        <MiniCalendar h="100%" minW="100%" selectRange={false} />
      </SimpleGrid>
    </Box>
  );
}
