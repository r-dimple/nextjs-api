export async function getUser (id){
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    console.log(data.result[0].name)
    return data.result;
}

export default async function Page({params}){
    console.log("p="+params)
   let user = await  getUser (params.userid);
  
   console.log("here bye")
   console.log("here now")
   console.log(user.id);
    return(
        <div>
            <h3>User detail</h3>
           <h4>ID : {user.id}</h4>
            <h4>Name : {user.name} </h4>
            <h4>Age : {user.age}</h4>
            <h4>Email : {user.email}</h4>
        </div>
    )
}