import { GeneralGradientAreaChart } from '../utils/generalGradientAreaChart'

const data = [
  {
    name: 'January',
    uv: 4000,
  },
  {
    name: 'February',
    uv: 3000,
  },
  {
    name: 'March',
    uv: 2000,
  },
  {
    name: 'April',
    uv: 2780,
  },
  {
    name: 'May',
    uv: 1890,
  },
  {
    name: 'June',
    uv: 23,
  },
  {
    name: 'July',
    uv: 3490,
  },
]
export const BalanceGradientChart = () => {
  return (
    <GeneralGradientAreaChart
      data={data}
      color1="#FFE53B"
      color2="#00FFFF"
      id="balanceColors"
    />
  )
}
