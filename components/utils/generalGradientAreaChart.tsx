import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts'
import { PieTooltip } from './pieTooltip'

export const GeneralGradientAreaChart = ({ data, color1, color2, id }) => {
  return (
    <AreaChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient
          id={id}
          x1="0"
          y1="0"
          x2="0"
          y2="100%"
          spreadMethod="reflect"
        >
          <stop offset="0" stopColor={color1} />
          <stop offset="1" stopColor={color2} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip content={<PieTooltip />} />
      <Area
        type="monotone"
        dataKey="uv"
        stroke={color1}
        fillOpacity={1}
        fill={`url(#${id})`}
      />
    </AreaChart>
  )
}
