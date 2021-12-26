import { GeneralPieChart } from '../utils/generalPieChart'

const data = [
  { name: 'Bored Apes Yacht Club', value: 30 },
  { name: 'Crypto Punks', value: 10 },
  { name: 'Cool Cats NFT', value: 2 },
  { name: 'Doodles', value: 5 },
]
const colors = ['#FE5BA9', '#3AD599', '#FFB342', '#FB4336']

export const ConcentrationPieChart = () => {
  return <GeneralPieChart data={data} colors={colors} legendWidth={'500px'} />
}
