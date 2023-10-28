// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import './App.css'
import { Button } from '@mui/material'
import { useState } from 'react'
import Upload from './Components/Upload';

function App() {
  // const [count, setCount] = useState(0)
  const [open, setOpen]  = useState(false);

  return (
    <>
      <Navbar />
      <Button onClick={()=> setOpen(!open)}>Upload</Button>
      {/* <Upload/> */}
      {open && (<Upload setOpen={setOpen}/>)}
      
    </>
  )
}

export default App
