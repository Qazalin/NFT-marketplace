import { Grid, GridItem, Box } from '@chakra-ui/react'
import { NFTPreviw } from './nftPreview'
import { activities, topProjects } from '../server/mocks'
import { ListTemplate } from './ListTemplate'
import { PortfolioChart } from './portfolioChart'
import { GradientCard } from './gradientCard'

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
        <NFTPreviw />
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
