import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (e) => {
        console.log("On Change")
        setText(e.target.value)
    }
    const [text, setText] = useState('Enter text here');
    // text = "New text" // Invalid way to alter default text in useState
    // setText("New text"); // Invalid way to alter default text in useState
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </>
    )
}