import { IoOpenOutline } from 'react-icons/io5'
import { Link, IconButton } from '@chakra-ui/react'

export const ExternalLinks = ({ link }) => {
  return (
    <Link href={link} isExternal>
      <IconButton
        icon={<IoOpenOutline fontSize="20px" />}
        aria-label="open"
        colorScheme="white"
        bg="none"
        variant="link"
      />
    </Link>
  )
}
