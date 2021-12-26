import { GeneralGradientBar } from '../utils/generalGradientChart'
const data = [
  { name: 'Jan', uv: 400 },
  { name: 'Feb', uv: 500 },
  { name: 'Mar', uv: 300 },
  { name: 'Apr', uv: 700 },
  { name: 'May', uv: 200 },
]
export const PortfolioBarChart = () => {
  return (
    <GeneralGradientBar
      color1={'#FFCAC9'}
      color2={'#737DFE'}
      data={data}
      id="portfolioColor"
    />
  )
}
