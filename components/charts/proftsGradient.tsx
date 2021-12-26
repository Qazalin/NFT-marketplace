import { GeneralGradientBar } from '../utils/generalGradientChart'
const data = [
  { name: 'Jan', uv: 30 },
  { name: 'Feb', uv: 80 },
  { name: 'Mar', uv: 40 },
  { name: 'Apr', uv: -20 },
  { name: 'May', uv: 10 },
]

export const ProfitsGradient = () => {
  return (
    <GeneralGradientBar
      data={data}
      color1={'#FFE53B'}
      color2={'#FF2525'}
      id="profitsColor"
    />
  )
}
