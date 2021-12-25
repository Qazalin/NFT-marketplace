import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import { lineChartData } from '../../server/mocks'
import { Box } from '@chakra-ui/layout'
import CustomTooltip from '../utils/customToolTip'
export const PortfolioChart = () => {
  return (
    <Box p="10px">
      <LineChart
        width={1000}
        height={250}
        data={lineChartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid opacity={0.1} vertical={false} />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          name="NFT Market Cap"
          type="monotone"
          dataKey="pv"
          stroke="#f96186"
        />
        <Line
          name="Your Portfolio"
          type="monotone"
          dataKey="uv"
          stroke="#ffbe0b"
        />
      </LineChart>
    </Box>
  )
}
