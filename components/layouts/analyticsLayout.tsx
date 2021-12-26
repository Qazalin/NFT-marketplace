import { HStack, VStack } from '@chakra-ui/layout'
import { Box, Text } from '@chakra-ui/react'
import { BalanceGradientChart } from '../charts/balanceGradientChart'
import { PortfolioBarChart } from '../charts/portfolioBarChart'
import { PortfolioChart } from '../charts/portfolioChart'
import { ConcentrationPieChart } from '../charts/concentrationPie'
import { ProfitsGradient } from '../charts/proftsGradient'
import { TotalActivity } from '../charts/totalActivity'
export const AnalytcisLayout = () => {
  return (
    <Box>
      <VStack>
        <HStack>
          <Box>
            <Box mb="10px">
              <Text variant="normal">Portfolio Value</Text>
            </Box>
            <PortfolioBarChart />
          </Box>
          <Box>
            <Box mb="10px">
              <Text variant="normal">Balance Trends</Text>
            </Box>
            <BalanceGradientChart />
          </Box>
        </HStack>
        <HStack>
          <Box>
            <Box mb="10px">
              <Text variant="normal">Total Activity</Text>
            </Box>
            <TotalActivity />
          </Box>
          <Box>
            <Box mb="10px">
              <Text variant="normal">Profits</Text>
            </Box>
            <ProfitsGradient />
          </Box>
        </HStack>
      </VStack>
    </Box>
  )
}
