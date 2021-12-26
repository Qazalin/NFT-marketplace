import { GeneralPieChart } from '../utils/generalPieChart'

const data = [
  { name: 'Bitcoin', value: 100 },
  { name: 'ETH', value: 500 },
  { name: 'USDT', value: 300 },
  { name: 'DAI', value: 200 },
]
const colors = ['#0362FF', '#A162F6', '#62F783', '#FF8642']
export const BalancePieChart = () => {
  return <GeneralPieChart data={data} colors={colors} />
}
