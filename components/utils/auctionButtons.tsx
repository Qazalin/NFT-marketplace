import { Button, ButtonGroup, Link } from '@chakra-ui/react'

const AuctionButtons = ({ externalLink }) => {
  return (
    <Link href={externalLink} isExternal>
      <ButtonGroup spacing={5} width={'90%'}>
        <Button width={'50%'} bg="white" color="black" fontSize={'large'}>
          Buy now
        </Button>
        <Button width={'50%'} bg="gray.800" fontSize={'large'} variant={'bid'}>
          Place a bid
        </Button>
      </ButtonGroup>
    </Link>
  )
}
export default AuctionButtons
