import { Box, Text } from '@chakra-ui/layout'

export default function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <Box bg="gray.900" p="2px">
        <Text fontWeight={'bold'}> {label}</Text>
        <Text variant="subtitle">
          Your Portfolio: {payload[0].value.toFixed(2)} ETH
        </Text>
        <Text variant="subtitle">
          NFT Market Cap: {payload[1].value.toFixed(2)} ETH
        </Text>
      </Box>
    )
  }
  return null
}
