// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import "./Multiplicative.css";

const Multiplicative = () => {
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
        const shift = parseInt(key, 10);
        const cipherText = MultiplicativeEncryptText(textArea, shift);
        setCipherText(cipherText);
        setPlainText(textArea);
        // setTextArea('');
        // setKey('');
    }
    function MultiplicativeEncryptText(plainText,key){
         // Check if the key is within the valid range (0-25)
    if (key < 0 || key > 25) {
        return 'Key should be between 0 and 25 inclusive.';
    } else {
        // Convert the plaintext to uppercase for consistency
        plainText = plainText.toUpperCase();

        let encryptedText = '';

        for (let i = 0; i < plainText.length; i++) {
            let char = plainText[i];

            // Check if the character is a letter
            if (/[A-Z]/.test(char)) {
                // Apply the key to the letter
                let charCode = (char.charCodeAt(0) - 65) * key % 26;
                if (charCode < 0) {
                    // Ensure the result is positive
                    charCode += 26;
                }
                charCode += 65;
                encryptedText += String.fromCharCode(charCode);
            } else {
                // Preserve non-alphabetic characters
                encryptedText += char;
            }
        }
        return encryptedText;
    }
    }
    return (
        <div className='additive-container'>
             <h1>Multiplicative Cipher</h1>
            <p><label htmlFor="additiveInput">Write plaintext:</label></p>
            <textarea value={textArea} name="inputText" id="additiveInput" cols="60" rows="5" onChange={(e) => handleonChange(e)}></textarea>
            <p>
                <label>
                    Key:
                    <input type="text" id="additiveKey" name="additiveKey" onChange={(e) => handleonChange(e)} value={key} placeholder='write key 0 to 25...' />
                </label>
            </p>
            <button className="button-3" onClick={() => handleOnClick()} role="button">Convert</button>
            <div>
                <p>Plaintext:{textArea ? textArea : plaintext}</p>
                <p>Ciphertext:<span className={cipherText === 'Key should be between 0 and 25 inclusive.' && 'red'}>{cipherText}</span></p>
            </div>
        </div>
    );
};

export default Multiplicative;