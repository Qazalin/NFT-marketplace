import { Grid, GridItem, Box } from '@chakra-ui/react'
import { NFTPreviw } from '../preview/nftPreview'
import { activities, topProjects } from '../../server/mocks'
import { ListTemplate } from '../utils/ListTemplate'
import { PortfolioChart } from '../charts/portfolioChart'
import { GradientCard } from '../utils/gradientCard'
import { dashboardData } from '../../server/mocks'

export const DashboardLayout = () => {
  return (
    <Grid
      h="20em"
      width={'95%'}
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={2} colSpan={1}>
        <ListTemplate title="Recent Activities" listData={activities} />
      </GridItem>
      <GridItem colSpan={2}>
        <NFTPreviw
          image={dashboardData.image}
          title={dashboardData.title}
          price={dashboardData.price}
          pageLink={dashboardData.externalLink}
          externalLink={dashboardData.externalLink}
          auctionDays={dashboardData.auctionDays}
        />
      </GridItem>
      <GridItem colSpan={2}>
        <ListTemplate title="Top Projects" listData={topProjects} />
      </GridItem>
      <GridItem colSpan={6}>
        <PortfolioChart />
      </GridItem>
    </Grid>
  )
}
