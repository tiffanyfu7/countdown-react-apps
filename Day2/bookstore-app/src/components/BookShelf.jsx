import { SimpleGrid, Text, Box } from '@chakra-ui/react'
import React from 'react'

export const BookShelf = ({ books, color }) => {
  return (
    <>
      <SimpleGrid columns={4} spacing={10}>
        {
            books.map((book) => {
              return (
                <div key={book.title} class="book" style={{backgroundColor: color, height:"200px"}}>
                  <Text fontSize='3xl' as='i'>{book.title}</Text>
                  <Text fontSize='xl'>By: {book.author}</Text>
                  <Text color='kbd'>${book.price}</Text>
                </div>
              )
            })
              
        }
      </SimpleGrid>
      <Box bg='red.900' w='100%' p={4} color='#63171B'/>
    </>
  )
}
