import { Box } from '@chakra-ui/layout'
import { DashboardLayout } from '../../components/layouts/dashboardLayout'
import { GradientCard } from '../../components/utils/gradientCard'
const gradients = [
  ['#FF2CDF', '0014FF'],
  ['#00E1FD', '#FC007A'],
  ['#00FF5B', '0014FF'],
]
const User = () => {
  const gradientIndex = Math.floor(Math.random() * gradients.length)
  const colors = gradients[gradientIndex]

  return <DashboardLayout />
}

export default User
