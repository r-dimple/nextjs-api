"use client"

import { useRouter } from "next/navigation";

export default function Deleteproduct(props){
    const router = useRouter()
    console.log(props.id)

    const deleteRecord = async() =>{
        let response = await fetch("http://localhost:3000/products/"+props.id,{
            method : "delete"
        });
        response = response.json();
        if(response.success){
            alert("product deleted")
            router.push("/products")
        }
    }

    return(
        <button onClick={deleteRecord}>Delete </button>
    )
}