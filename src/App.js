import { useState } from 'react';
import './App.css';
import Alert from './component/Alert';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light')
  const [txt,setTxt]=useState('Enable dark mode')
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{setAlert({
    msg:message,
    type:type}
  )
  setTimeout(() => {
    setAlert(null)
  }, 1500);

  }
  let darkmode=()=>{
    if(mode==='light'){
      document.body.style.backgroundColor='black'
      setMode('dark')
      setTxt('Disable dark mode')
      showAlert('dark mode enabled','success')
    }
    else{
      document.body.style.backgroundColor='white'
      setMode('light')
      setTxt('Enable dark mode ')
      showAlert('light mode enabled','success')



    }
  }

  return (
    <Router>
    <>
    <Navbar mode={mode} darkmode={darkmode}  txt={txt}/>
    <Alert alert={alert}/>
    <Routes>
          <Route exact path="/about" element={  <About mode={mode} />}>
          
          </Route>
        
          <Route exact path="/" element={  <TextForm mode={mode} showAlert={showAlert} />}>
         
          </Route>
        </Routes>
    {/* <About mode={mode} /> */}
    </>
    </Router>
   
  );
}

export default App;
