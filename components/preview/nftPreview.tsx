import { HStack, Box, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import AuctionButtons from '../utils/auctionButtons'
import CountDown from '../utils/countDown'
import { ExternalLinks } from '../utils/externalLinks'
export const NFTPreviw = ({
  image,
  title,
  price,
  auctionDays,
  pageLink,
  externalLink,
}) => {
  return (
    <Box my="10px">
      <HStack>
        <Box width="50%" p="5px">
          <Image src={image} fit={'contain'} />
        </Box>
        <Box>
          <Text variant="title">{title}</Text>
          <Text variant="subtitle">{price}</Text>
          <ExternalLinks link={externalLink} />
        </Box>
      </HStack>
      <Box mt="20px">
        <Text variant="subtitle" fontWeight={'bold'}>
          Ends In
        </Text>
        <CountDown auctionDays={auctionDays} fontSize={'medium'} isBold />
        <Box mt="15px">
          <AuctionButtons externalLink={externalLink} />
        </Box>
      </Box>
    </Box>
  )
}
