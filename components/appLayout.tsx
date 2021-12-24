import { Box, Divider } from '@chakra-ui/layout'
import { Navbar } from './navbar'
import { DashboardSideBar, NFTSideBar } from './sideBar'
import { useRouter } from 'next/router'

export const AppLayout = ({ children }) => {
  const router = useRouter()
  console.log(router.pathname)

  return (
    <Box width="100vw" height="100vh" p="20px">
      <Box position="absolute" width="50px" mt="100px">
        {router.pathname == '/user' ? <DashboardSideBar /> : <NFTSideBar />}
      </Box>
      <Box position="absolute" width="100%" height="50px" mb="50px">
        <Navbar />
      </Box>
      <Box mt="90px" ml="90px">
        {children}
      </Box>
    </Box>
  )
}
