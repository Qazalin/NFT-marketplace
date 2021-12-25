import { Box, Flex } from '@chakra-ui/layout'
import { Image, Text, IconButton } from '@chakra-ui/react'
import { IoOpenOutline } from 'react-icons/io5'
import { useStoreActions } from 'easy-peasy'
import { useState } from 'react'
import Link from 'next/link'
import { ExternalLinks } from '../utils/externalLinks'

export const UserPreview = () => {
  return (
    <Flex>
      <Box>
        <Text variant="title">Veronika Smith</Text>
        <Flex>
          <Text mr="3px" variant="subtitle">
            18.0094
          </Text>
          <Text ml="3px" color={'pink.100'}>
            ETH
          </Text>
        </Flex>
      </Box>
      <Box ml="10px">
        <Image
          src={'https://i.postimg.cc/bYM5509X/model.jpg'}
          borderRadius="100%"
          height="60px"
          width="60px"
        />
      </Box>
      <ExternalLinks
        link={
          'https://etherscan.io/address/0x7c9ceff6479439bf14621a09ca8ab5635a26bd00'
        }
      />
    </Flex>
  )
}
