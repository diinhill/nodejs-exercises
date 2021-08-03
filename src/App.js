import List from './components/List'
import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import './App.css'

function App() {



  return (
    <React.Fragment>
      <CssBaseline/>
        {
        /*you'd call it JSX (it's both kind of html and js, but not)*/
        <div className="App">
          <List />
        </div>
        }
    </React.Fragment>
  )
}

export default App
