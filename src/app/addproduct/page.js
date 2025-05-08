'use client'
import "../../../style.css";
import { useState } from "react"

export default function Page(){
    const[name,setName] = useState("");
    const[price,setPrice] = useState("")
    const[color,setColor] = useState("")
    const[company,setCompany] = useState("")
    const[category,setCategory] = useState("")

    const addProduct= async()=>{
        console.log(name,price,color,category,company);
        let result = await fetch("http://localhost:3000/products",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({name,price,color,company,category})
        });
        result = await result.json();
        if(result.success){
            alert("new product added")
        }
    }

    return(
        <div>
            <h1>ADD Products</h1>
            <input type="text" value={name} placeholder="enter product name" onChange={(e)=>setName(e.target.value)} className="input" />
            <input type="text" value={price} placeholder="enter product price" onChange={(e)=>setPrice(e.target.value)} className="input" />
            <input type="text" value={color} placeholder="enter product color" onChange={(e)=>setColor(e.target.value)} className="input" />
            <input type="text" value={company} placeholder="enter product company" onChange={(e)=>setCompany(e.target.value)} className="input" />
            <input type="text" value={category} placeholder="enter product category" onChange={(e)=>setCategory(e.target.value)} className="input" />
            <button className="btn" onClick={addProduct}>Add Product</button>
        </div>
    )
}