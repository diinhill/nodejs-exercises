import React from 'react'
import Card from './Card'

const ListItem = ( {character, handleOpen} ) => {

    return (
            <Card character={character} handleOpen={handleOpen} />
    )
}

export default ListItem
