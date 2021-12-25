import { Box, Center } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/react'

export const GradientCard = ({ color1, color2 }) => {
  return (
    <Box
      w="250px"
      h="100px"
      bgGradient={`linear(to-l, ${color1},  ${color2})`}
      borderRadius={'2%'}
      p="10px"
      textAlign={'center'}
    >
      <Text>0x7c9C...D00</Text>
      <Text fontWeight="extrabold" mt="2px">
        18.0094 ETH
      </Text>
    </Box>
  )
}
