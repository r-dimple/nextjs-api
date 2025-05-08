import { NextResponse } from "next/server";
import {user} from '../../../api/util/db';

export function GET(request,content){
    const userData=user.filter((item)=>item.id==content.params.id)
    return NextResponse.json(
        userData.length==0? {result:"NO DATA FOUND", success:'false'}
        :
        {
            result: userData , success:'true'
        },{status:200}
    )
}

export async function PUT(request,content){
    let payload = await request.json();
    payload.id = content.params.id;
    console.log(payload);
    if(!payload.id || !payload.name || !payload.email || !payload.age){
        return NextResponse.json({result:"Data is not found",success:'false'},{status:400})
    }
    else{
        return NextResponse.json({result:'payload',success:'true'},{status:200})
    }
}

const map={
    
}

export async function POST(response){
    let payload = await response.json();
    console.log(payload);
    if(!payload.id || !payload.name || !payload.email || !payload.age){
        return NextResponse.json({result:"Data is not found",success:'false'},{status:400})
    }
    else{
        return NextResponse.json({result:'payload',success:'true'},{status:200})
    }
}

export function DELETE(request,content){
    let id = content.params.id
    if(id){
        return NextResponse.json({result:"sucessfully deleted",success:true},{status:200})
    }
    else{
        return NextResponse.json({result:"internal error",success:false},{status:400})
    }
}
