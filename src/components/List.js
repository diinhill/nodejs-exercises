import React, { useState, useEffect, useRef } from 'react'
import ListItem from './ListItem'
import InputField from './InputField'
import MyModal from './MyModal'
import Card from './Card'



const List = () => {

    const [data, setData] = useState()
    const [name, setName] = useState('')
    const handleChange = (event) => {
      /* console.log('event.target.value:', event.target.value) */
      setName(event.target.value)
    }

    useEffect(() => {
        const getData = async () => {
            const response = await fetch("https://rickandmortyapi.com/api/character/")
            const obj = await response.json()
            /* console.log('results:', obj) */
            setData(obj.results)
        }
        getData()
    }, [])
    console.log('data:', data)

    const results = !name
    ? data
    : data && data.filter(person => 
        person.name.toLowerCase().includes(name.toLocaleLowerCase()))
        console.log("hello: ",results)


    return (
        <div>
            <InputField name={name} handleChange={handleChange} />
            {
                results &&
                results.map(item => {
                    /* console.log('item.name:', item.name) */
                    return (
                            <ListItem key={item.id} character={item} />
                    )
                })
            }
        </div>
    )
}

export default List
