import { Box, Text, List, ListItem } from '@chakra-ui/layout'

export const ListTemplate = ({ title, listData }) => {
  return (
    <Box>
      <Text fontWeight={'extrabold'} fontSize={'2xl'}>
        {title}
      </Text>
      <List>
        {listData.map((data) => (
          <ListItem>
            <Box
              my="10px"
              p="5px"
              borderWidth="1px"
              borderColor="gray.600"
              borderRadius={'md'}
            >
              <Text variant="title">{data.title}</Text>
              <Text variant="subtitle">{data.subtitle}</Text>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
