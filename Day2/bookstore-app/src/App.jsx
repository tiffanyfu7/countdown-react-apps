import { useState } from 'react'
import './App.css'
import { BookShelf } from './components/BookShelf';
import { Button, Text, ChakraProvider } from '@chakra-ui/react'
import GenreButton from './components/GenreButton';

function App() {
  const [genre, setGenre] = useState("");
  
  const bookData = {
    "fiction": [
      {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "price": 10.00},
      {"title": "1984", "author": "George Orwell", "price": 8.50},
      {"title": "The Catcher in the Rye", "author": "J.D. Salinger", "price": 9.80 },
      {"title": "Dandelions", "author": "Yasunari Kawabata", "price": 11.00 }
    ],
    "non-fiction": [
      {"title": "Sapiens: A Brief History of Humankind", "author": "Yuval Noah Harari", "price": 15.00},
      {"title": "In Cold Blood", "author": "Truman Capote", "price": 12.00},
      { "title": "The Diary of a Young Girl", "author": "Anne Frank", "price": 7.00 },
      { "title": "Pale Blue Dot", "author": "Carl Sagan", "price": 8.00 }
    ],
    "children": [
      {"title": "Charlotte's Web", "author": "E.B. White", "price": 5.00},
      {"title": "The Gruffalo", "author": "Julia Donaldson", "price": 6.00},
      { "title": "Where the Wild Things Are", "author": "Maurice Sendak", "price": 8.00 },
      { "title": "Winnie-the-Pooh", "author": "A. A. Milne", "price": 7.00 }
    ]
  };

  return (
    <ChakraProvider>
      <Text fontSize='5xl' as='b'>📚Welcome to the Bookstore</Text> <br></br>
      {genre == "" && 
        <Text fontSize='md' as='i'>Select a Genre to get Started</Text> }
      <br></br>
      {
        Object.keys(bookData).map((g) => {
          return (<GenreButton key={g} setGenre={setGenre} genreTitle={g} /> )
        })
      }

      <GenreButton key={"all"} setGenre={setGenre} genreTitle={"all"} />

      {(genre == "fiction" || genre == "all") &&
        <BookShelf books={bookData["fiction"]} color="#d1495b"/>
      }
      {(genre == "non-fiction" || genre == "all") &&
        <BookShelf books={bookData["non-fiction"]} color="#edae49"/>
      }
      {(genre == "children" || genre == "all") &&
        <BookShelf books={bookData["children"]} color="#00798c"/>
      }
    </ChakraProvider>
  )
}

export default App
