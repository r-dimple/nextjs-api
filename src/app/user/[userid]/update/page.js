'use client'
import { useEffect, useState } from "react"
export default function Page({params}){
   let id = params.id;
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [email,setEmail] = useState('');
    

    useEffect(()=>{
        getUserDetails()
    },[])

    const getUserDetails= async(id)=>{
        let data = await fetch("http://localhost:3000/api/users/"+id);
        data = await data.json();
        setName(data.result.name)
        setAge(data.result.age)
        setName(data.result.email)
    }

    const updateUser = async(id)=>{
        console.log(name,age,email)
        let result = await fetch("http://localhost:3000/api/users/"+id,{
            method : "PUT",
            body:JSON.stringify({name,age,email})
        });
        result = await result.json()
        console.log(result)
        
    }

    return(
     <div>
         <h1>Update user</h1>
         <input type='text' defaultValue={name} placeholder='enter name' onChange={(e)=>setName(e.target.value)}/>
         <input type='text' defaultValue={age} placeholder='enter age' onChange={(e)=>setAge(e.target.value)} />
         <input type='text' defaultValue={email} placeholder='enter email' onChange={(e)=>setEmail(e.target.value)} />
        <button onClick={updateUser}>update</button>
     </div>
    ) 
 }