import React, { useState, useEffect } from 'react'

const List = () => {

    const [data, setData] = useState()
    useEffect(() => {
        const getData = async () => {
            const response = await fetch("https://rickandmortyapi.com/api/character/")
            const obj = await response.json()
            console.log('results:', obj)
            setData(obj.results)
        }
        getData()
    }, [])


    console.log('data:', data)

    return (
        <div>

        </div>
    )
}

export default List
