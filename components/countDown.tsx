import { Box } from '@chakra-ui/layout'
import Countdown from 'react-countdown'
import { Text } from '@chakra-ui/react'

const CountDown = ({ auctionDays, fontSize, isBold }) => {
  const date = auctionDays * 24 * 60 * 60 * 1000
  return (
    <Box>
      <Text
        color="white"
        fontSize={fontSize}
        fontWeight={isBold ? 'extrabold' : 'light'}
      >
        <Countdown date={Date.now() + date} />
      </Text>
    </Box>
  )
}

export default CountDown
