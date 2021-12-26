import { Box, Text } from '@chakra-ui/layout'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'
import { PieTooltip } from '../utils/pieTooltip'

const data = [
  { name: 'Bitcoin', value: 100 },
  { name: 'ETH', value: 500 },
  { name: 'USDT', value: 300 },
  { name: 'DAI', value: 200 },
]
const COLORS = ['#0362FF', '#A162F6', '#62F783', '#FF8642']
export const BalanceChart = () => {
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
