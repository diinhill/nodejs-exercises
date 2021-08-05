import React, { useState, useEffect } from 'react'
import ListItem from './ListItem'
import InputField from './InputField'
import SimpleModal from './Modal'




const List = () => {

    const [data, setData] = useState()
    const [name, setName] = useState('')
    const [open, setOpen] = useState(false)
    const [isClicked, setIsClicked] = useState('')

    console.log("isClicked:", isClicked)
    console.log("open:", open)
    
   
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

    const handleOpen = (id) => {
        setIsClicked(results.find(clickedObj => clickedObj.id === id))
        setOpen(true)
    }
            
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <InputField name={name} handleChange={handleChange} />
            {
                results &&
                results.map(item => {
                    /* console.log('item.name:', item.name) */
                    return (

                        <div key={item.id}>
                            <ListItem character={item} handleOpen={handleOpen} />
                            {/* <SimpleModal character={item} open={open} handleClose={handleClose} /> */}
                        </div>
                    )
                })
            }
            <SimpleModal character={isClicked} open={open} handleClose={handleClose} />
        </div>
    )
}

export default List
