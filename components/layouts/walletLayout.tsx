import {
  Box,
  Center,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/layout'
import { ButtonGroup, IconButton } from '@chakra-ui/react'
import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiFillPlusCircle,
} from 'react-icons/ai'
import { ActivityPieChart } from '../charts/activityPie'
import { BalancePieChart } from '../charts/balancePie'
export const WalletLayout = () => {
  return (
    <Box>
      <VStack>
        <Text variant="title" fontSize={'5xl'}>
          Current Wallet Value
        </Text>
        <Box>
          <Text variant="body" color={'green.500'} fontSize={'4xl'}>
            + 73421.98
          </Text>
        </Box>
        <Box>
          <ButtonGroup>
            <IconButton
              icon={<AiOutlineArrowUp fontSize="40px" />}
              aria-label="send"
              colorScheme="white"
              isRound
              bg="gray.700"
              variant="link"
            />
            <IconButton
              icon={<AiFillPlusCircle fontSize="40px" />}
              aria-label="purchase"
              colorScheme="white"
              isRound
              bg="gray.700"
              variant="link"
            />
            <IconButton
              icon={<AiOutlineArrowDown fontSize="40px" />}
              aria-label="recieve"
              colorScheme="white"
              isRound
              bg="gray.700"
              variant="link"
            />
          </ButtonGroup>
        </Box>
      </VStack>
      <HStack>
        <Box>
          <BalancePieChart />
        </Box>
        <Box>
          <ActivityPieChart />
        </Box>
      </HStack>
    </Box>
  )
}
