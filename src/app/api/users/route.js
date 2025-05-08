import { NextResponse } from "next/server";
import {user} from '../../api/util/db';

export function GET(){
    const data = user;
    return NextResponse .json(data,{status:200})
}

export  async function POST(request){
    const data = user;
    return NextResponse .json(data,{status:200})
   // return NextResponse.json({result:'hello'},{status:200})
    // let payload = await request.json();
    // console.log(payload);
    // return NextResponse.json({result:'hello'},{status:200})
}