import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";
import mongoose from "mongoose";
import { Product } from "../../../models/Product";

const uri = process.env.MONGODB_URI;

// export async function GET(request) {
  
//   try {
//     const client = await clientPromise;
//     const db = client.db('productsDB');
//     const collection = db.collection('product');
//     const data = await collection.find({}).toArray();

//     return new Response(JSON.stringify(data), {
//       status: 200,
//       headers: { "Content-Type": "application/json" }
//     });
//   } catch (e) {
//     console.error(e);
//     return new Response(JSON.stringify({ message: 'Server error' }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" }
//     });
//   }
// }



export async function GET(){
  let data = [];
  let success=false
  try {
    await mongoose.connect(uri);
    data = await Product.find();
  }
   catch (error) {
    data = {result:"error"}
    success=false
  }
  return NextResponse.json({result:data},{success})
}


export async function POST(request){
  
    const payload = await request.json()
    await mongoose.connect(uri);
  let product  = new Product(payload);
  const result = await product.save();
  return NextResponse.json({result,success:true},{status:200})
}

