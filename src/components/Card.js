import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import '../App.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
})

const FlipCard = ( {character, handleOpen} ) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <CardMedia
                        component="img"
                          alt={character.name}
                        image={character.image}
                    />
                </div>
                <div className="flip-card-back">
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {character.name}
                        </Typography>
                        <Button id={character.id} type="button" onClick={() => handleOpen(character.id)}
                                    >Learn More</Button>
                    </CardContent>
                </div>
            </div>
        </div>
    </Card>
  )
}

export default FlipCard
