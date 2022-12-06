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
            <h2 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{
                    backgroundColor: props.mode==='dark'?'grey':'white'
                }}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <p>Your text has <b>{text.length}</b> characters and <b>{text.split(" ").length}</b> words</p>
                <h2>Your text preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview"}</p>
            </div>
        </>
    )
}