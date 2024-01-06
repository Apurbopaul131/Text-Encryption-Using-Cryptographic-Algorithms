// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import "./Affine.css";

const Affine = () => {
    const [plaintext, setPlainText] = useState('');
    const [textArea, setTextArea] = useState('');
    const [keyOne, setKeyOne] = useState('');
    const [keyTwo, setKeyTwo] = useState('');
    const [cipherText, setCipherText] = useState('');
    const handleonChange = (e) => {
        e.preventDefault();
        if (e.target.id === "additiveInput") {
            setTextArea(e.target.value);
        }
        else if(e.target.id === "additiveKeyOne") {
            setKeyOne(e.target.value);
        }
        else{
            setKeyTwo(e.target.value);
        }
    }
    const AffineEncryptText = (plaintext,keyA,keyB) =>{
        if((keyA < 0 || keyA > 25) || (keyB < 0 || keyB > 25)){
            return 'Key should be between 0 and 25 inclusive.';
        }
        else{
            let ciphertext = '';
            plaintext = plaintext.toUpperCase();
        for (let i = 0; i < plaintext.length; i++) {
            let char = plaintext[i];
    
            // Check if the character is a letter
            if (/[A-Z]/.test(char)) {
    
                // Convert the character to its numeric equivalent
                let charCode = char.charCodeAt(0) - 65;
                //Applied formula
                let encryptedCharCode = (keyA * charCode + keyB) % 26;
                encryptedCharCode = encryptedCharCode + 65;
                // Convert the result back to a character
                let encryptedChar = String.fromCharCode(encryptedCharCode);
    
                // Preserve the case of the original character
                ciphertext += encryptedChar;
            } else {
                // handle non-alphabatic character
                ciphertext += char;
            }
        }
        return ciphertext;
        }
    }
    const handleOnClick = () => {
        // Convert the string into integer
        const keyFirst = parseInt(keyOne, 10);
        const keySeccond = parseInt(keyTwo, 10);
        const cipherText = AffineEncryptText(textArea, keyFirst, keySeccond);
        setCipherText(cipherText);
        setPlainText(textArea);
        // setTextArea('');
        // setKeyOne('');
    }
    
   
    return (
        <div className='additive-container'>
             <h1>Affine Cipher</h1>
            <p><label htmlFor="additiveInput">Write plaintext:</label></p>
            <textarea value={textArea} name="inputText" id="additiveInput" cols="60" rows="5" onChange={(e) => handleonChange(e)}></textarea>
            <p>
                <label>
                    Key One:
                    <input type="text" id="additiveKeyOne" name="additiveKeyOne" onChange={(e) => handleonChange(e)} value={keyOne} placeholder='write key 0 to 25...' />
                </label>
            </p>
            <p>
                <label>
                    Key Two:
                    <input type="text" id="additiveKeyTwo" name="additiveKeyTwo" onChange={(e) => handleonChange(e)} value={keyTwo} placeholder='write key 0 to 25...' />
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

export default Affine;