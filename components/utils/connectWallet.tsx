// ConnectButton.tsx
import { Button, Box, Text, useColorMode, Flex } from '@chakra-ui/react'
import { useEthers, useEtherBalance } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'
import { ExternalLinks } from './externalLinks'

export default function ConnectButton() {
  const { activateBrowserWallet, account } = useEthers()
  const etherBalance = useEtherBalance(account)

  const { colorMode } = useColorMode()
  const bg = { light: '#F7F8FD', dark: '#292A33' }
  const color = { light: 'black', dark: 'white' }

  function handleConnectWallet() {
    activateBrowserWallet()
  }

  return account ? (
    <Box display={'flex'} alignItems="center">
      <Box mx="10px">
        <Button bg={bg[colorMode]}>
          <Text
            color={color[colorMode]}
            fontSize="md"
            fontWeight="medium"
            mx="2"
          >
            {account &&
              `${account.slice(0, 6)}...${account.slice(
                account.length - 4,
                account.length
              )}`}
          </Text>
        </Button>
      </Box>
      <Box mx="20px">
        <Text fontSize="lg" fontWeight={'bold'} justify={'center'} mb="5px">
          Your balance:
        </Text>
        <Flex>
          <Text fontSize="md" color={color[colorMode]} mt="9px">
            {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)}{' '}
            ETH
          </Text>
          <ExternalLinks link={`https://etherscan.io/address/${account}`} />
        </Flex>
      </Box>
    </Box>
  ) : (
    <Button onClick={handleConnectWallet}>Connect wallet</Button>
  )
}
