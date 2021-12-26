import { GeneralPieChart } from '../utils/generalPieChart'

const data = [
  { name: 'Sell', value: 500 },
  { name: 'Buy', value: 200 },
  { name: 'Mint', value: 100 },
  { name: 'Burn', value: 70 },
]
const colors = ['#FFF636', '#0496ff', '#0FFFAB', '#E80DE7']

export const ActivityPieChart = () => {
  return <GeneralPieChart data={data} colors={colors} />
}
