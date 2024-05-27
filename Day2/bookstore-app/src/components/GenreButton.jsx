import { Button } from '@chakra-ui/react'
import React from 'react'

const GenreButton = ({ setGenre, genreTitle}) => {
    const genreStr = genreTitle[0].toUpperCase() + genreTitle.substring(1);
    return (
        <Button
            onClick={() => setGenre(genreTitle)}
            colorScheme='teal'
            size='sm'
            variant='outline'
        >
            {genreStr}
        </Button>
    )
}

export default GenreButton