import axios from 'axios'
import React, { useState } from 'react'
import { apiUrl } from '../Apilist/Api'
import { useNavigate } from 'react-router-dom'
 
 
function Home() {
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [email,setEmail] = useState("")
  const [address,setAddress] = useState("");
  const [salary,setSalary] = useState("");
  const [role,setrole] = useState("");
  const [msg,setMessage] = useState("")
  const datas = {firstName,lastName,email,address,salary,role}
  const redirects = useNavigate();
  const addUser = async (e)=>{
      e.preventDefault();
      await axios.post(apiUrl, datas).then((res)=>{
          console.log("User Added..");
          setMessage("User added successfully...");
          setTimeout(()=>{
            redirects("/userlist")
          },1000)
      })
  }
  return (
    <div>
         <div className="container">
            <div className="row">
            
                    <div className="col-md-6 offset-md-3 py-5">
                        <h3>Enter User Details...</h3>
                         <form onSubmit={addUser}>
                            <div className="form-group mb-2">
                                <input type="text" placeholder='Enter FirstName' onChange={e=>setFirstName(e.target.value)} className='form-control' />
                            </div>
                            <div className="form-group mb-2">
                                <input type="text" placeholder='Enter LastName' onChange={e=>setLastName(e.target.value)} className='form-control'/>
                            </div>
                            <div className='form-group mb-2'>
                                <input type="text" placeholder='Enter Email' onChange={e=>setEmail(e.target.value)} className='form-control'/>
                            </div>

                            <div className='form-group mb-2'>
                                <input type="text" placeholder='Enter Address'  onChange={e=>setAddress(e.target.value)} className='form-control'/>
                            </div>

                            <div className='form-group mb-2'>
                                <input type="text" placeholder='Enter Salary' onChange={e=>setSalary(e.target.value)} className='form-control' />
                            </div>

                            <div className='form-group mb-2'>
                                <input type="text" placeholder='Enter Role' onChange={e=>setrole(e.target.value)} className='form-control'/>
                            </div>

                            <div className='form-group'>
                                <button type='submit' className='btn btn-primary' >ADD USER</button>
                            </div>
                         </form>
                         <h4 className='text-success'>{msg}</h4>
                   
                </div>
            </div>
         </div>
    </div>
  )
}

export default Home