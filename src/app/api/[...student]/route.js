import { NextResponse } from "next/server";

export async function GET(request,content){
    console.log(content);
    const studentdetails = content.params.student;
    console.log(studentdetails)
    //return new Response("all routes catched")
    return  NextResponse.json({result:studentdetails},{status:200})
}