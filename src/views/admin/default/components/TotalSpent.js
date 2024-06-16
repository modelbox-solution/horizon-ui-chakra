// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import LineChart from "components/charts/LineChart";
import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import {
  MdBarChart,
  // MdOutlineCalendarToday
} from "react-icons/md";
// Assets
import { RiArrowUpSFill } from "react-icons/ri";
import {
  lineChartDataSucessRate,
  lineChartOptionsSucessRate,
} from "variables/charts";

export default function TotalSpent(props) {
  const { ...rest } = props;

  // Chakra Color Mode

  const textColor = useColorModeValue("secondaryGray.900", "white");
  // const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  // const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );
  return (
    <Card justifyContent='center' align='center' direction='column' w='100%' {...rest}>
      <Flex align='center' flexDirection='row'>
        <Text //flexBasis="auto"
          mx={5}
          color={textColor}
          fontSize='x-large'
          fontWeight='700'
          lineHeight='100%'>
          Rendimiento Modelos
        </Text>
        <Text 
          mx={5}
          color={textColor}
          fontSize='34px'
          textAlign='start'
          fontWeight='700'
          lineHeight='100%'>
          x4.76
        </Text>
        <Flex flexDirection='column' align='center' mx={5}>
          <Text
            color='secondaryGray.600'
            fontSize='x-small'
            fontWeight='500'>
            Tasa de éxito
          </Text>
          <Flex align='center'>
            <Icon as={RiArrowUpSFill} color='green.500'/>
            <Text color='green.500' fontSize='sm' fontWeight='700'>
              +2.45%
            </Text>
          </Flex>
        </Flex>

        <Flex align='center'>
          <Icon as={IoCheckmarkCircle} color='green.500' me='4px' />
          <Text color='green.500' fontSize='md' fontWeight='700'>
            Al día
          </Text>
        </Flex>

        <Button
          align='center'
          justifyContent='center'
          bg={bgButton}
          _hover={bgHover}
          _focus={bgFocus}
          _active={bgFocus}
          w='37px'
          h='37px'
          lineHeight='100%'
          borderRadius='10px'
          left='410px' // Ajusta el valor según sea necesario
          {...rest}>
          <Icon as={MdBarChart} color={iconColor} w='24px' h='24px' />
        </Button>
      </Flex>
      <Flex w='100%' flexDirection={{ base: "column", lg: "row" }}>
    
        <Box minH='270px' minW='100%' mt='auto'>
          <LineChart
            chartData={lineChartDataSucessRate}
            chartOptions={lineChartOptionsSucessRate}
          />
        </Box>
      </Flex>
    </Card>
  );
}
