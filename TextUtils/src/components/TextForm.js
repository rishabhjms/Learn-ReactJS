import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase",'success')
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase",'success')
    }
    const clearText = () => {
        let newText = ' '
        setText(newText)
    }
    const handleOnChange = (e) => {
        console.log("On Change")
        setText(e.target.value)
    }
    const [text, setText] = useState('');
    // text = "New text" // Invalid way to alter default text in useState
    // setText("New text"); // Invalid way to alter default text in useState
    return (
        <>
            <h2 style={{color: props.mode==='dark'?'white':'black'}} className='mb-4'>{props.heading}</h2>
            <div className="mb-3">
                <textarea spellCheck="false" className="form-control" id="myBox" rows="5" value={text} onChange={handleOnChange} placeholder="Enter some text..." style={{
                    backgroundColor: props.mode==='dark'?'#132035':'white', border: "1px solid #d0d4db", resize:"none",
                    color: props.mode==='dark'?'#fff':'black'
                }}></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick} disabled={text.length===0}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick} disabled={text.length===0}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={clearText} disabled={text.length===0}>Clear Text</button>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <p>Your text has <b>{text.length}</b> characters and <b>{text.split(" ").filter((e)=>{
                    return e.length!==0;
                }).length}</b> words</p>
                <h2>Your text preview</h2>
                <code><p>{text.length>0?text:"/: Nothing to preview"}</p></code>
                
            </div>
        </>
    )
}