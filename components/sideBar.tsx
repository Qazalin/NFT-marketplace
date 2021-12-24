import { Box } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/react'
import { AiOutlineClose } from 'react-icons/ai'
import { FiShare } from 'react-icons/fi'
import { VStack } from '@chakra-ui/react'
import { FcLike } from 'react-icons/fc'
import { BsThreeDots } from 'react-icons/bs'

export const SideBar = () => {
  return (
    <Box>
      <VStack spacing="10px">
        <IconButton
          icon={<AiOutlineClose fontSize="20px" />}
          aria-label="close"
          colorScheme="white"
          isRound
          bg="gray.700"
          variant="link"
        />
        <IconButton
          icon={<FiShare fontSize="20px" />}
          aria-label="close"
          colorScheme="white"
          isRound
          bg="gray.700"
          variant="link"
        />
        <IconButton
          icon={<FcLike fontSize="20px" />}
          aria-label="close"
          colorScheme="white"
          isRound
          bg="gray.700"
          variant="link"
        />
        <IconButton
          icon={<BsThreeDots fontSize="20px" />}
          aria-label="close"
          colorScheme="white"
          isRound
          bg="gray.700"
          variant="link"
        />
      </VStack>
    </Box>
  )
}
