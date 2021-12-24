import { Button, ButtonGroup } from '@chakra-ui/react'

const AuctionButtons = () => {
  return (
    <ButtonGroup spacing={5} width={'90%'}>
      <Button width={'50%'} bg="white" color="black" fontSize={'large'}>
        Buy now
      </Button>
      <Button width={'50%'} bg="gray.800" fontSize={'large'} variant={'bid'}>
        Place a bid
      </Button>
    </ButtonGroup>
  )
}
export default AuctionButtons
