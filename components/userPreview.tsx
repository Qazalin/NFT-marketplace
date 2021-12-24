import { Box, Flex } from '@chakra-ui/layout'
import { Image, Text, IconButton } from '@chakra-ui/react'
import { BiChevronDown } from 'react-icons/bi'
import { useStoreActions } from 'easy-peasy'
import { useState } from 'react'
import Link from 'next/link'

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
        <Link href={'/user'}>
          <Image
            src={'https://i.postimg.cc/bYM5509X/model.jpg'}
            borderRadius="100%"
            height="60px"
            width="60px"
          />
        </Link>
      </Box>
      <IconButton
        icon={<BiChevronDown fontSize="20px" />}
        aria-label="close"
        colorScheme="white"
        bg="none"
        variant="link"
      />
    </Flex>
  )
}
