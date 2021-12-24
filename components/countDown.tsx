import { Box } from '@chakra-ui/layout'
import Countdown from 'react-countdown'
import { Text } from '@chakra-ui/react'

const CountDown = ({ auctionDays }) => {
  const date = auctionDays * 24 * 60 * 60 * 1000
  return (
    <Box>
      <Text color="white" fontSize="x-large" fontWeight="extrabold">
        <Countdown date={Date.now() + date} />
      </Text>
    </Box>
  )
}

export default CountDown
