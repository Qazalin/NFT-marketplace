import { GeneralGradientAreaChart } from '../utils/generalGradientAreaChart'

const data = [
  {
    name: 'January',
    uv: 100,
  },
  {
    name: 'February',
    uv: 40,
  },
  {
    name: 'March',
    uv: 30,
  },
  {
    name: 'April',
    uv: 50,
  },
  {
    name: 'May',
    uv: 90,
  },
  {
    name: 'June',
    uv: 70,
  },
  {
    name: 'July',
    uv: 64,
  },
]

export const TotalActivity = () => {
  return (
    <GeneralGradientAreaChart
      data={data}
      color1="#A32CDF"
      color2="#106AD2"
      id="activityColor"
    />
  )
}
