import { Box, Grid } from '@chakra-ui/layout'
import { NFTPreviw } from '../preview/nftPreview'
import { dashboardData, exploreData } from '../../server/mocks'
export const ExploreLayout = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {exploreData.map((nft) => (
        <Box bg="gray.800" borderRadius={'md'} p="10px">
          <NFTPreviw
            image={nft.image}
            title={nft.title}
            price={nft.price}
            pageLink={nft.externalLink}
            externalLink={nft.externalLink}
            auctionDays={nft.auctionDays}
          />
        </Box>
      ))}
    </Grid>
  )
}
