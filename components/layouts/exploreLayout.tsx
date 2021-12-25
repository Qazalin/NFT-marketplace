import { Box, Grid } from '@chakra-ui/layout'
import { NFTPreviw } from '../preview/nftPreview'
import { dashboardData } from '../../server/mocks'
export const ExploreLayout = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <Box bg="gray.800" borderRadius={'md'} p="10px">
        <NFTPreviw
          image={dashboardData.image}
          title={dashboardData.title}
          price={dashboardData.price}
          pageLink={dashboardData.externalLink}
          externalLink={dashboardData.externalLink}
          auctionDays={dashboardData.auctionDays}
        />
      </Box>
      <Box bg="gray.800" borderRadius={'md'} p="10px">
        <NFTPreviw
          image={dashboardData.image}
          title={dashboardData.title}
          price={dashboardData.price}
          pageLink={dashboardData.externalLink}
          externalLink={dashboardData.externalLink}
          auctionDays={dashboardData.auctionDays}
        />
      </Box>
      <Box bg="gray.800" borderRadius={'md'} p="10px">
        <NFTPreviw
          image={dashboardData.image}
          title={dashboardData.title}
          price={dashboardData.price}
          pageLink={dashboardData.externalLink}
          externalLink={dashboardData.externalLink}
          auctionDays={dashboardData.auctionDays}
        />
      </Box>{' '}
      <Box bg="gray.800" borderRadius={'md'} p="10px">
        <NFTPreviw
          image={dashboardData.image}
          title={dashboardData.title}
          price={dashboardData.price}
          pageLink={dashboardData.externalLink}
          externalLink={dashboardData.externalLink}
          auctionDays={dashboardData.auctionDays}
        />
      </Box>{' '}
      <Box bg="gray.800" borderRadius={'md'} p="10px">
        <NFTPreviw
          image={dashboardData.image}
          title={dashboardData.title}
          price={dashboardData.price}
          pageLink={dashboardData.externalLink}
          externalLink={dashboardData.externalLink}
          auctionDays={dashboardData.auctionDays}
        />
      </Box>{' '}
      <Box bg="gray.800" borderRadius={'md'} p="10px">
        <NFTPreviw
          image={dashboardData.image}
          title={dashboardData.title}
          price={dashboardData.price}
          pageLink={dashboardData.externalLink}
          externalLink={dashboardData.externalLink}
          auctionDays={dashboardData.auctionDays}
        />
      </Box>{' '}
      <Box bg="gray.800" borderRadius={'md'} p="10px">
        <NFTPreviw
          image={dashboardData.image}
          title={dashboardData.title}
          price={dashboardData.price}
          pageLink={dashboardData.externalLink}
          externalLink={dashboardData.externalLink}
          auctionDays={dashboardData.auctionDays}
        />
      </Box>
    </Grid>
  )
}
