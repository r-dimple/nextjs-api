import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Product } from "../../../../models/Product";

const uri = process.env.MONGODB_URI;

export async function PUT(request,content){
    const productId = content.params.productid;
    const filter = {_id:productId}
    const payload = await request.json();
    console.log(payload);
    await mongoose.connect(uri);
    const result = await Product.findOneAndUpdate(filter,payload)
    return NextResponse.json({result,success:true})
}

export async function GET(request,content){
    const productId = content.params.productid;
    const record = {_id:productId}
    await mongoose.connect(uri);
    const result = await Product.findById(record)
    return NextResponse.json({result,success:true})
}