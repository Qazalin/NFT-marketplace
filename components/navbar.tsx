import { Box } from '@chakra-ui/layout'
import { IconButton, Spacer } from '@chakra-ui/react'
import { BsHandbag } from 'react-icons/bs'
import { BiBarChartSquare } from 'react-icons/bi'
import { HStack } from '@chakra-ui/react'
import { AiOutlineCompass } from 'react-icons/ai'
import { IoWalletOutline } from 'react-icons/io5'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { UserPreview } from './preview/userPreview'
import Link from 'next/link'
export const Navbar = () => {
  return (
    <Box>
      <HStack spacing="10px">
        <IconButton
          sx={{ width: '90px' }}
          icon={<BsHandbag fontSize="20px" />}
          aria-label="close"
          colorScheme="bag"
          bg="gray.700"
          variant="link"
        />
        <IconButton
          icon={<BiBarChartSquare fontSize="20px" />}
          aria-label="close"
          colorScheme="chart"
          bg="gray.700"
          variant="link"
        />
        <Link href="/explore">
          <IconButton
            icon={<AiOutlineCompass fontSize="20px" />}
            aria-label="close"
            colorScheme="compass"
            bg="gray.700"
            variant="link"
          />
        </Link>
        <IconButton
          icon={<IoWalletOutline fontSize="20px" />}
          aria-label="close"
          colorScheme="wallet"
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
