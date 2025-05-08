'use client'
import { useState } from 'react'
import './style.css'
export default function Page(){
    const[name,setName] = useState('')
    const[age,setAge] = useState('')
    const[email,setEmail] = useState('')
    const adduser= async () =>{
        let response = await fetch("http://localhost:3000/api/users",{
            method:"Post",
            body:JSON.stringify({name,age,email})
        });
        response = await response.json(); 
        console.log(response); 
    }

    return(
        <div className='add-user'>
            <h1>Add New User</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="enter name" className='input-field'></input>
            <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="enter age" className='input-field'></input>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="enter email" className='input-field'></input>
            <button onClick={adduser} className='btn'>ADD USER</button>
        </div>
    )
}