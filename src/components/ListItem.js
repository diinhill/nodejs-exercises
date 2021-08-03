import React from 'react'
import Card from './Card'
import MyModal from './MyModal'

const ListItem = (props) => {
    const character = props.character

    return (
        <div>
            <Card img={character.image} name={character.name} 
                    species={character.species} status={character.status} />
            <MyModal img={character.image} name={character.name} 
                    species={character.species} status={character.status} />
        </div>
    )
}

export default ListItem
