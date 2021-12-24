import { Box, Divider } from '@chakra-ui/layout'
import { Navbar } from './navbar'
import { SideBar } from './sideBar'

export const AppLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh" p="20px">
      <Box position="absolute" width="50px" mt="100px">
        <SideBar />
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
