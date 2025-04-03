import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { apiUrl } from '../Apilist/Api';
import { useNavigate } from 'react-router-dom';

function Updateuser() {
  const [msg,setMsg] = useState("");
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [email,setEmail] = useState("")
  const [address,setAddress] = useState("");
  const [salary,setSalary] = useState("");
  const [role,setrole] = useState("");
  const [id,setId] = useState("");
  const datas = {firstName,lastName,email,address,salary,role}
  const redirects =useNavigate();
  useEffect(()=>{
      setId(localStorage.getItem("id"))
      setFirstName(localStorage.getItem("firstName"));
      setLastName(localStorage.getItem("lastName"));
      setEmail(localStorage.getItem("email"));
      setAddress(localStorage.getItem("address"));
      setSalary(localStorage.getItem("salary"));
      setrole(localStorage.getItem("role"));
  },[])

  const updateuser = async (e)=>{   
      e.preventDefault();
         await axios.put(`${apiUrl}/${id}`, datas ).then((res)=>{
            console.log("user updated");
            setMsg("user updated")
            setTimeout(()=>{
              redirects("/userlist");
            },1000)
            
         })
  }
  return (
    <div>
        <div className="container">
            <div className="row">
            
                    <div className="col-md-6 offset-md-3 py-5">
                        <h3>Enter User Details...</h3>
                         <form onSubmit={updateuser}>
                            <div className="form-group mb-2">
                                <input type="text" placeholder='Enter FirstName' onChange={e=>setFirstName(e.target.value)} value={firstName} className='form-control' />
                            </div>
                            <div className="form-group mb-2">
                                <input type="text" placeholder='Enter LastName' onChange={e=>setLastName(e.target.value)} value={lastName} className='form-control'/>
                            </div>
                            <div className='form-group mb-2'>
                                <input type="text" placeholder='Enter Email' value={email} onChange={e=>setEmail(e.target.value)} className='form-control'/>
                            </div>

                            <div className='form-group mb-2'>
                                <input type="text" placeholder='Enter Address' value={address}  onChange={e=>setAddress(e.target.value)} className='form-control'/>
                            </div>

                            <div className='form-group mb-2'>
                                <input type="text" placeholder='Enter Salary' value={salary} onChange={e=>setSalary(e.target.value)} className='form-control' />
                            </div>

                            <div className='form-group mb-2'>
                                <input type="text" placeholder='Enter Role' value={role} onChange={e=>setrole(e.target.value)} className='form-control'/>
                            </div>

                            <div className='form-group'>
                                <button type='submit' className='btn btn-primary' >UPDATE USER</button>
                            </div>
                         </form>
                         <h3>{msg}</h3>
                          
                   
                </div>
            </div>
         </div>
    </div>
  )
}

export default Updateuser