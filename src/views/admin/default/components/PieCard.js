// Chakra imports
import { Box, Flex, Text, Select, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import PieChart from "components/charts/PieChart";
import { pieChartData, pieChartOptions } from "variables/charts";
import { VSeparator } from "components/separator/Separator";
import React from "react";

export default function Conversion(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardColor = useColorModeValue("white", "navy.700");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card align='center' direction='column' w='100%' h='100%' {...rest}>
      <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent='space-between'
        alignItems='center'
        w='100%'
        mb='14px'>
        <Text color={textColor} fontSize='md' fontWeight='600' mt='4px'>
          Cónsumo por área
        </Text>
        <Select
          fontSize='sm'
          variant='subtle'
          defaultValue='mensual'
          width='unset'
          fontWeight='700'>
          <option value='diario'>Diario</option>
          <option value='mensual'>Mensual</option>
          <option value='anual'>Anual</option>
        </Select>
      </Flex>

      <PieChart chartData={pieChartData} chartOptions={pieChartOptions}/>

      <Card bg={cardColor} flexDirection='row' boxShadow={cardShadow} w='100%' px='28px'>
        <Flex align='center' w='50px' direction='column' py='10px'>
          <Flex align='center'>
            <Box h='8px' w='8px' bg='brand.500' borderRadius='50%' me='6px' mb='4px'/>
            <Text fontSize='xs' color='secondaryGray.600' fontWeight='700' mb='5px'> 
              CRM 
            </Text>
          </Flex>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
            43%
          </Text>
        </Flex>
        <VSeparator mx={{ base: "10px", xl: "10px", "2xl": "30px" }} />
        <Flex align='center' w='50px'direction='column' py='10px'>
          <Flex align='center'>
            <Box h='8px' w='8px' bg='#00B5D8' borderRadius='50%' me='6px' mb='4px'/>
            <Text fontSize='xs' color='secondaryGray.600' fontWeight='700' mb='5px'>
              RRHH
            </Text>
          </Flex>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
            21%
          </Text>
        </Flex>
        <VSeparator mx={{ base: "10px", xl: "10px", "2xl": "30px" }} />
        <Flex align='center' w='50px' direction='column' py='10px'>
          <Flex align='center'>
            <Box h='8px' w='8px' bg='#D53F8C' borderRadius='50%' me='6px' mb='4px'/>
            <Text fontSize='xs' color='secondaryGray.600' fontWeight='700' mb='5px'>
              Finanzas
            </Text>
          </Flex>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
            36%
          </Text>
        </Flex>
      </Card>
    </Card>
  );
}
