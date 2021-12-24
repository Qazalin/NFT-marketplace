import { Box, Flex } from '@chakra-ui/layout'
import { Image, Text, IconButton } from '@chakra-ui/react'
import { BiChevronDown } from 'react-icons/bi'
import { IoIosNotificationsOutline } from 'react-icons/io'

//import PlaceHolder from '../assets/hannah.png'
export const UserPreview = () => {
  // 'https://i.pinimg.com/564x/78/72/b0/7872b020f3f1a9c2599d2673d141f6c7.jpg'
  return (
    <Flex>
      <Box>
        <Text fontWeight="bold">Veronika Smith</Text>
        <Flex>
          <Text mr="3px" color="gray.400">
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
