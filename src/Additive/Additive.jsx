/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "./Additive.css";
const Additive = () => {
    const [plaintext,setPlainText] = useState('');
    const [textArea, setTextArea] = useState('');
    const [key,setKey] = useState('');
    const [cipherText,setCipherText] = useState('');
    const handleonChange = (e) =>{
        e.preventDefault();
        if(e.target.id === "additiveInput"){
            setTextArea(e.target.value);
        }
        else{
            setKey(e.target.value);
        }
    }
    const handleOnClick = () =>{
        const shift = parseInt(key, 10);
        const cipherText = encryptText(textArea,shift);
        setCipherText(cipherText);
        setPlainText(textArea);
        setTextArea('');
        setKey('');
    }
    function encryptText(plainText, shift) {
        // Check if shift is within the valid range (0-25)
        if (shift < 0 || shift > 25) {
            throw new Error('Shift should be between 0 and 25 inclusive.');
        }
    
        // Convert the plaintext to uppercase for consistency
        plainText = plainText.toUpperCase();
    
        let encryptedText = '';
    
        for (let i = 0; i < plainText.length; i++) {
            let char = plainText[i];
    
            // Check if the character is a letter
            if (/[A-Z]/.test(char)) {
                // Apply the shift to the letter
                let charCode = ((char.charCodeAt(0) - 65 + shift) % 26) + 65;
                encryptedText += String.fromCharCode(charCode);
            } else {
                // Preserve non-alphabetic characters
                encryptedText += char;
            }
        }
        return encryptedText;
    
    
    }
   
    return (
        <div>
            <h1>Additive Cipher</h1>
            <p><label htmlFor="additiveInput">Write plaintext:</label></p>
            <textarea value={textArea} name="inputText" id="additiveInput" cols="60" rows="5" onChange={(e)=>handleonChange(e)}></textarea>
            <p>
            <label>
                Key:
                <input type="text" id="additiveKey" name="additiveKey" onChange={(e)=>handleonChange(e)} value={key} placeholder='write key 0 to 25...'/>
            </label>
            </p>
            <button className="button-3" onClick={()=>handleOnClick()} role="button">Convert</button>
            <div>
                <p>Plaintext:{textArea ? textArea : plaintext}</p>
                <p>Ciphertext:{cipherText}</p>
            </div>
        </div>
    );
};

export default Additive;