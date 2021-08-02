import React from 'react'
import Card from './Card'

const ListItem = (props) => {
    const character = props.character

    return (
        <div>
            <Card img={character.image} name={character.name}/>
        </div>
    )
}

export default ListItem
