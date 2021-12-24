import { Box } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/react'
import { AiOutlineClose, AiOutlineHistory } from 'react-icons/ai'
import { FiShare, FiHelpCircle } from 'react-icons/fi'
import { VStack } from '@chakra-ui/react'
import { FcLike } from 'react-icons/fc'
import { BsThreeDots, BsXDiamond } from 'react-icons/bs'
import Link from 'next/link'

export const NFTSideBar = () => {
  return (
    <Box>
      <VStack spacing="10px">
        <Link href={'/user'}>
          <IconButton
            icon={<AiOutlineClose fontSize="20px" />}
            aria-label="close"
            colorScheme="white"
            isRound
            bg="gray.700"
            variant="link"
          />
        </Link>
        <IconButton
          icon={<FiShare fontSize="20px" />}
          aria-label="share"
          colorScheme="white"
          isRound
          bg="gray.700"
          variant="link"
        />
        <IconButton
          icon={<FcLike fontSize="20px" />}
          aria-label="like"
          colorScheme="white"
          isRound
          bg="gray.700"
          variant="link"
        />
        <IconButton
          icon={<BsThreeDots fontSize="20px" />}
          aria-label="dots"
          colorScheme="white"
          isRound
          bg="gray.700"
          variant="link"
        />
      </VStack>
    </Box>
  )
}

export const DashboardSideBar = () => {
  return (
    <Box>
      <VStack spacing="10px">
        <IconButton
          sx={{ width: '90px' }}
          icon={<BsXDiamond fontSize="20px" />}
          aria-label="diamond"
          colorScheme="white"
          bg="gray.700"
          variant="link"
        />
        <IconButton
          icon={<AiOutlineHistory fontSize="20px" />}
          aria-label="history"
          colorScheme="white"
          bg="gray.700"
          variant="link"
        />
        <IconButton
          icon={<FiHelpCircle fontSize="20px" />}
          aria-label="help"
          colorScheme="compass"
          bg="gray.700"
          variant="link"
        />
      </VStack>
    </Box>
  )
}
