import { Box, Text } from '@chakra-ui/layout'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'
import { PieTooltip } from '../utils/pieTooltip'

const data = [
  { name: 'Sell', value: 500 },
  { name: 'Buy', value: 200 },
  { name: 'Mint', value: 100 },
  { name: 'Burn', value: 70 },
]
const COLORS = ['#FFF636', '#0496ff', '#0FFFAB', '#E80DE7']

export const ActvityChart = () => {
  return (
    <PieChart width={300} height={350}>
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip content={<PieTooltip />} />
      <Legend align="left" />
    </PieChart>
  )
}
