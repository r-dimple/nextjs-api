"use client"

import Link from "next/link";
import "../../../../style.css";
import { useEffect, useState } from "react"

export default function Page(props){
    const[name,setName] = useState("");
    const[price,setPrice] = useState("")
    const[color,setColor] = useState("")
    const[company,setCompany] = useState("")
    const[category,setCategory] = useState("")

useEffect(() => {
    getProductDetail()
},[]);

    const getProductDetail = async() =>{
        let productId =props.params.editproduct;
        console.log(productId)
        let productData = await fetch("http://localhost:3000/productlist/"+productId);
        console.log(productData)
        // productData = await productData.json(); 
        
        // if(productData.success){
        //     let result = productData.result;
        //     setName(result.name);
        //     setPrice(result.price);
        //     setColor(result.color);
        //     setCompany(result.company);
        //     setCategory(result.category);
        // }   

    }
    return (
        <div>
            hoh
        </div>
    )
    return(
        <div>
            <h1>UPDATE Products</h1>
            <input type="text" value={name} placeholder="enter product name" onChange={(e)=>setName(e.target.value)} className="input" />
            <input type="text" value={price} placeholder="enter product price" onChange={(e)=>setPrice(e.target.value)} className="input" />
            <input type="text" value={color} placeholder="enter product color" onChange={(e)=>setColor(e.target.value)} className="input" />
            <input type="text" value={company} placeholder="enter product company" onChange={(e)=>setCompany(e.target.value)} className="input" />
            <input type="text" value={category} placeholder="enter product category" onChange={(e)=>setCategory(e.target.value)} className="input" />
            <button className="btn">UPDATE Product</button>
            <Link href={"/productlist"}>go to product list</Link>
        </div>
    )
}