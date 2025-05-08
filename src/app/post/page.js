import { NextResponse } from "next/server";

export default async function POST(){
    let payload = await requestAnimationFrame.json();
    console.log(payload);
    return NextResponse.json({result:'hello'},{status:200})
}