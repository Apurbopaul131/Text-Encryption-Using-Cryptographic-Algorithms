// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import "./Vigenere.css";

const Vigenere = () => {
    const [plaintext, setPlainText] = useState('');
    const [textArea, setTextArea] = useState('');
    const [key, setKey] = useState('');
    const [cipherText, setCipherText] = useState('');
    const handleonChange = (e) => {
        e.preventDefault();
        if (e.target.id === "additiveInput") {
            setTextArea(e.target.value);
        }
        else {
            setKey(e.target.value);
        }
    }
    const handleOnClick = () => {
        // Convert the string into integer
        const cipherText = vigenereEncryptText(textArea, key);
        setCipherText(cipherText);
        setPlainText(textArea);
        // setTextArea('');
        // setKey('');
    }
    function vigenereEncryptText(plaintext,keyword){
        plaintext = plaintext.toUpperCase();
        keyword = keyword.toUpperCase();
       if(/[A-Z]/.test(keyword)){
            let ciphertext = '';
        let keywordIndex = 0;
        
    
        for (let i = 0; i < plaintext.length; i++) {
            let char = plaintext[i];
    
            // Check if the character is a letter
            if (/[A-Z]/.test(char)) {
    
                // Convert the character to its numeric equivalent
                let charCode = char.charCodeAt(0) - 65;
    
                // Convert the keyword character to its numeric equivalent
                let keywordCharCode = keyword[keywordIndex % keyword.length].charCodeAt(0) - 65;
    
                // Apply the encryption formula: E(x) = (x + k) mod 26
                let encryptedCharCode = (charCode + keywordCharCode) % 26;
    
                // Convert the result back to a character
                let encryptedChar = String.fromCharCode(encryptedCharCode + 65);
    
                // Preserve the case of the original character
                ciphertext += encryptedChar;
    
                // Increase the value for move next character
                keywordIndex++;
            } else {
                // Preserve non-alphabetic characters
                ciphertext += char;
            }
        }
    
        return ciphertext;
       }
       else{
           return "Key should be string";
       }
        }
    return (
        <div className='additive-container'>
            <h1>Vigenere Cipher</h1>
            <p><label htmlFor="additiveInput">Write plaintext:</label></p>
            <textarea value={textArea} name="inputText" id="additiveInput" cols="60" rows="5" onChange={(e) => handleonChange(e)}></textarea>
            <p>
                <label>
                    Key:
                    <input type="text" id="additiveKey" name="additiveKey" onChange={(e) => handleonChange(e)} value={key} placeholder='key Will be string' />
                </label>
            </p>
            <button className="button-3" onClick={() => handleOnClick()} role="button">Convert</button>
            <div>
                <p>Plaintext:{textArea ? textArea : plaintext}</p>
                <p>Ciphertext:<span className={cipherText === 'Key should be string' && 'red'}>{cipherText}</span></p>
            </div>
        </div>
    );
};

export default Vigenere;