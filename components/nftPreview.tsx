import { HStack, Box, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import AuctionButtons from './auctionButtons'
import CountDown from './countDown'
export const NFTPreviw = () => {
  return (
    <Box my="10px">
      <HStack>
        <Box width="50%" p="5px">
          <Image src="https://static.nftgo.io/cryptopunk/cryptopunk9598.png" />
        </Box>
        <Box>
          <Text variant="title">CryptoPunk #9598</Text>
          <Text variant="subtitle">59.95 ETH</Text>
        </Box>
      </HStack>
      <Box mt="20px">
        <Text variant="subtitle" fontWeight={'bold'}>
          Ends In
        </Text>
        <CountDown auctionDays={4} fontSize={'medium'} isBold />
        <Box mt="15px">
          <AuctionButtons />
        </Box>
      </Box>
    </Box>
  )
}
