import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'
import { PieTooltip } from './pieTooltip'

export const GeneralPieChart = ({ data, colors, legendWidth }) => {
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
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip content={<PieTooltip />} />
      <Legend align="left" width={legendWidth ? legendWidth : '300px'} />
    </PieChart>
  )
}
