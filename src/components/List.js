import React, { useState, useEffect } from 'react'
import ListItem from './ListItem'
import InputField from './InputField'
import SimpleModal from './Modal'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Pagination from '@material-ui/lab/Pagination'
import { flexbox } from '@material-ui/system';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }))


const List = () => {

    const classes = useStyles()
    const [page, setPage] = useState(1)
    console.log("page:", page)
    const onHandleChange = (event, value) => {
        setPage(value)
    } 
 

    const [data, setData] = useState()
    const [name, setName] = useState('')
    const [open, setOpen] = useState(false)
    const [isClicked, setIsClicked] = useState('')

    console.log("isClicked:", isClicked)
    console.log("open:", open)
    
   
    const handleChange = (event) => {
      setName(event.target.value)
    }

    useEffect(() => {
        const getData = async (page) => {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            const obj = await response.json()
            console.log('results:', obj)
            setData(obj.results)
        }
        getData()
    }, [page])


    const results = !name
    ? data
    : data && data.filter(person => 
        person.name.toLowerCase().includes(name.toLocaleLowerCase()))

    const handleOpen = (id) => {
        setIsClicked(results.find(clickedObj => clickedObj.id === id))
        setOpen(true)
    }       
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div style={{ maxWidth: '992px', margin: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px' }}>
             <InputField name={name} handleChange={handleChange} />
            </div>
            <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', marginTop: '5px' }}> 

                {
                    results &&
                    results.map(item => {
                        return (
                            <div style={{ margin: "5px" }}  key={item.id}>
                                <ListItem character={item} handleOpen={handleOpen} />
                            </div>
                        )
                    })
                }

            </div>
            <SimpleModal character={isClicked} open={open} handleClose={handleClose} />
            
            <div className={classes.root}>
            <Typography>Page: {page}</Typography>
            <Pagination count={34} page={page} onChange={onHandleChange} />
        </div>
        </div>
    )
}

export default List
