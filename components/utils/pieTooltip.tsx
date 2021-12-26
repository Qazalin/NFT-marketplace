import { Box, Text } from '@chakra-ui/react'

export const PieTooltip = ({ payload, key, active }) => {
  if (active) {
    console.log(payload[0])
    return (
      <Box bg="gray.900" p="2px">
        <Text variant="subtitle">{`${payload[0].name} : ${payload[0].value}`}</Text>
      </Box>
    )
  }

  return null
}
