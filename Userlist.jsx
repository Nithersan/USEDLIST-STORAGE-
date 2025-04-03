import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { apiUrl } from '../Apilist/Api';
import { useNavigate } from 'react-router-dom';
 
function Userlist() {
  const redirect = useNavigate();
  const [apiResponse,setApiresponse] = useState([]);
  const [msg,setMsg] = useState("");
 
  const getUsers = async()=>{
  await axios.get(apiUrl).then((res)=>{
      console.log(res.data);     
      setApiresponse(res.data); 
  }).catch(err=> console.log(err)  )
  }

  useEffect(()=>{
    getUsers();
},[])


const deleteUser = async (id)=>{
    console.log(id);
await axios.delete(`${apiUrl}/${id}`).then((res)=>{
  setMsg("User Deleted..")
    console.log("User deleted");    
    getUsers();
}).catch((err)=>{
    console.log(err);
    
})
    
}

const Updateuser = ( {firstName,lastName,email,address,salary,role,id})=>{
       redirect("/updateuser");
       localStorage.setItem("id", id);
       localStorage.setItem("firstName", firstName);
       localStorage.setItem("lastName", lastName);
       localStorage.setItem("email", email);
       localStorage.setItem("address", address);
       localStorage.setItem("salary", salary);
       localStorage.setItem("role", role);
}
  return (
    <div>
      <div className="container">
          <div className="row py-5">
                {
                   apiResponse.map((user, index)=>{
                      return(
                         <div className='col-md-4 profile mb-2' key={index}>
                              {/* <img src={user.avatar} alt="" /> */}
                              <h4>{user.firstName}</h4>
                              <p>{user.email}</p>
                              <p>{user.address}</p>
                              <p>{user.salary}</p>
                              <p>{user.role}</p>
                              <button className='btn btn-primary me-2' onClick={()=>Updateuser(user)}>Update</button>
                              <button className='btn btn-danger' onClick={()=>deleteUser(user.id)}>Delete</button>

                               
                         </div>
                      )
                   })
                }
                <h5 className='text-danger'>{msg}</h5>
          </div>
      </div>
    </div>
  )
}

export default Userlist