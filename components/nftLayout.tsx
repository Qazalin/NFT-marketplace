import { Box, Grid, Flex, Center, VStack } from '@chakra-ui/layout'
import { Text, AspectRatio, Image } from '@chakra-ui/react'
import AuctionButtons from './auctionButtons'
import CountDown from './countDown'
// import Image from 'next/image'
export const NFTLayout = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={10}>
      <Box p="20px">
        <Box>
          <Text fontWeight="bold" fontSize="6xl">
            Bored Ape Yacht Club
          </Text>
          <Text fontWeight="bold" fontSize="5xl">
            #4288
          </Text>
        </Box>
        <Flex flexDirection="row" justify="space-around" mt="50px">
          <VStack>
            <Text fontSize="large" color="gray.500">
              Price
            </Text>
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="x-large"
              fontWeight="extrabold"
            >
              15 ETH
            </Text>
          </VStack>
          <VStack>
            <Text fontSize="large" color="gray.500">
              Ending in
            </Text>
            <CountDown auctionDays={7} />
          </VStack>
        </Flex>
        <Box mt="40px">
          <AuctionButtons />
        </Box>
        <Box mt="40px">
          <Text color="gray.600" fontSize={'large'}>
            description
          </Text>
          <Box mt="10px">
            <Text>
              The Bored Ape Yacht Club is a collection of 10,000 unique Bored
              Ape NFTs— unique digital collectibles living on the Ethereum
              blockchain. Your Bored Ape doubles as your Yacht Club membership
              card, and grants access to members-only benefits, the first of
              which is access to THE BATHROOM, a collaborative graffiti board.
              Future areas and perks can be unlocked by the community through
              roadmap activation.
            </Text>
          </Box>
        </Box>
      </Box>
      <Box height="70%" width="70%">
        <Image src="https://static.nftgo.io/asset/metadata/image/45c7d57b6b1326449ff3a3420a3af579c304e351df2738bc4a3ca3b011193b34" />
      </Box>
    </Grid>
  )
}
