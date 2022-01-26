import { Box, Flex } from '@chakra-ui/layout'
import { Image, Text, IconButton } from '@chakra-ui/react'
import { IoOpenOutline } from 'react-icons/io5'
import { useStoreActions } from 'easy-peasy'
import { useState } from 'react'
import Link from 'next/link'
import { ExternalLinks } from '../utils/externalLinks'
import ConnectButton from '../utils/connectWallet'

export const UserPreview = () => {
  return (
    <Flex>
      <ConnectButton />
    </Flex>
  )
}
