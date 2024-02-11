import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tooltip from './Components/Tooltip'

function App() {
 
    return<>
     <h1>Tooltip Project</h1>
     <Tooltip text={"Please click for sumbit"}>
     <button>Sumbit</button>
     </Tooltip>
       
    </>
}

export default App
