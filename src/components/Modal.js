import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'


function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

const SimpleModal = ( {character, handleClose, open } ) => {

  const classes = useStyles()
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle)

  const ref = React.createRef()

  console.log("character:", character)
 

  return (

    <div>
      <Modal
          ref={ref}
          id={character.id}
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
      >
      <div id="modal-body" style={modalStyle} className={classes.paper}>
        {/* <SimpleModal /> */}
        <h2 id="simple-modal-title">{character.name}</h2>
        <img className="modal-image" id="simple-modal-image" src={character.image} alt={character.name} />
        <h5 id="simple-modal-text">{character.species}</h5>
        <h6 id="simple-modal-text">{character.status}</h6>
        <button id="close-btn" type="button" onClick={handleClose}>Close</button>
      </div>
      
      </Modal>
    </div>
  )
}

export default SimpleModal








