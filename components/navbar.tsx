import { Box } from '@chakra-ui/layout'
import { IconButton, Spacer } from '@chakra-ui/react'
import { BsHandbag } from 'react-icons/bs'
import { BiBarChartSquare } from 'react-icons/bi'
import { HStack } from '@chakra-ui/react'
import { AiOutlineCompass } from 'react-icons/ai'
import { IoWalletOutline } from 'react-icons/io5'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { UserPreview } from './userPreview'
export const Navbar = () => {
  return (
    <Box>
      <HStack spacing="10px">
        <IconButton
          sx={{ width: '90px' }}
          icon={<BsHandbag fontSize="20px" />}
          aria-label="close"
          colorScheme="white"
          bg="gray.700"
          variant="link"
        />
        <IconButton
          icon={<BiBarChartSquare fontSize="20px" />}
          aria-label="close"
          colorScheme="white"
          bg="gray.700"
          variant="link"
        />
        <IconButton
          icon={<AiOutlineCompass fontSize="20px" />}
          aria-label="close"
          colorScheme="white"
          bg="gray.700"
          variant="link"
        />
        <IconButton
          icon={<IoWalletOutline fontSize="20px" />}
          aria-label="close"
          colorScheme="white"
          bg="gray.700"
          variant="link"
        />
        <Spacer />
        <Box height="20px">
          <UserPreview />
        </Box>
      </HStack>
    </Box>
  )
}
