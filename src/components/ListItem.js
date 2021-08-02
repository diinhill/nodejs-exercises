import React from 'react'

const ListItem = (props) => {
    const character = props.character

    return (
        <div>
            <h3>{character.name}</h3>
            <img src={character.image} alt="" />
        </div>
    )
}

export default ListItem
