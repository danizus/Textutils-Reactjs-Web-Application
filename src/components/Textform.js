
import React, {useState} from 'react'

export default function Textform(props) {
   
   const handler = (event)=>{
    setText(event.target.value)
   }
   const clearText = ()=>{
    setText("");
    props.showAlert("Text cleared!","warning")
   }

   const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("speaking...","success")
  }

  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied!","success")
}
  
   const clickedUpper=()=>{
       let newText = text.toUpperCase()
       setText(newText)
       props.showAlert("Text converted to uppercase!","primary")
    }
   const clickedlower=()=>{
       let newText = text.toLowerCase()
       setText(newText)
       props.showAlert("Text converted to lowercase!","danger")
    }

    const [text,setText] = useState("");
    
 
 
    return (
   

   <>
     <div className="mb-3" style={{color: props.mode==="dark" ? "white":"black"}} >
       
        <h1 >{props.heading}</h1>
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==="dark"?"#a7a2a2":"white",color: props.mode==="dark" ? "white":"black" ,cursor: 'text'}} onChange={handler} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary mx-2 my-2" onClick={clickedUpper}>convert to uppercase</button>
        <button className="btn btn-danger mx-2 my-2" onClick={clickedlower}>convert to Lowercase</button>
        <button className="btn btn-dark mx-2 my-2" onClick={speak}>speak</button>
        <button className="btn btn-success mx-2 my-2" onClick={copyText}>copy</button>
        <button className="btn btn-warning mx-2 my-2" onClick={clearText}>clear text</button>
    </div>
    <div className="conatiner my-5" style={{color: props.mode==="dark" ? "white":"black"}}>
      <h2 >Your text summary</h2>
      <p><i><b>{text.split(/\s+/).filter((e)=>{return e.length !==0}).length} words and {text.length} characters</b></i></p>
      <p><i><b>you can read it in {0.008*(text.split(/\s+/).filter((e)=>{return e.length !==0}).length)} minutes</b></i></p>
      <h3>Preview text</h3>
      <p>{text.length>0?text:"Enter tour text to preview..."}</p>
    </div>
    </>
  )
}
