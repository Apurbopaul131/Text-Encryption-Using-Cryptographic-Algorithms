/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "./Home.css";
import {Link } from "react-router-dom";

const Home = () => {
    const [input,setInput] = useState('')
    const handleInput = (e) =>{
        e.preventDefault();
        setInput(e.target.value);
    }
    return (
        <div className='container'>
            <h1 className='title'>Text Encription Using Cryptography Algoritms</h1>
            <ol type='1'>
                <li>Additve or Ceaser Cipher</li>
                <li>Multiplicative Cipher</li>
                <li>Affine Cipher</li>
                <li>Vigenere Cipher</li>
                <li>Railfence Cipher</li>
                <li>Autokey Cipher</li>
                <li>Playfair Cipher</li>
                <li>RSA</li>
            </ol>
            <div>
            <label>
                Choose an Algoritm: 
                <input type="text" onChange={(e)=>handleInput(e)} id="name" name="name" placeholder='Choose an Option..'/>
            </label>
            <Link to={`cipher/${input}`}><input type="button" value="Start" /></Link>

            </div>
        </div>
    );
};

export default Home;