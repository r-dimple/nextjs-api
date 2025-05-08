import Link from "next/link";
import DeleteUser from "../api/util/deleteuser";
 export async function getUsers(){
    let  data = await fetch("http://localhost:3000/api/users");
    data = await data.json();
    return data;
}
export default async function Page(){
    const users = await getUsers();
    return(
        <div>
            <h1>User List</h1>
            {
                users.map((item)=>(
                    <div >
                       <Link href={`user/${item.id}`}>{item.name}</Link><br/>
                       <Link href={`user/${item.id}/update`}>EDIT</Link><br/>
                       <DeleteUser id={item.id} />
                    </div>
                ))
            }
        </div>
    )
}