
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
   const [mode,setMode] = useState("light");
   const [alert,setAlert] = useState("null");
   
   
   const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)

    },2000

    )


   }


   const darkMode = ()=>{
    if(mode ==="light"){
      setMode('dark');
      document.body.style.backgroundColor = "#303a4a"
      showAlert("darkmode enabled!","success")
    }else{
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("lightmode enabled!","success")

    }

   }


  return (
    <>
    <BrowserRouter>
   < Navbar title = "TextUtils" aboutText = "About us" mode={mode} toggle = {darkMode}/>
   <Alert alert={alert} />
   
   <Routes>

   <Route exact path="/" element={<div className="container my-5 "><Textform  showAlert = {showAlert} heading="Enter text to analyse" mode={mode} /> </div>} ></Route>
   
    
    
    <Route exact path="/about" element={<div className="container my-5 "><About mode ={mode}/></div>}></Route>
    

  </Routes>
  
   
  

   </BrowserRouter>
   </>
    
   
  
  );
}

export default App;
