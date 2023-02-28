import React, { useState } from "react";
import bgImg from "../../assets/img1.png";
import "./Login.css";
import { useForm } from "react-hook-form";
import { CiUser } from "react-icons/ci";
import axios from 'axios';

import {useNavigate} from "react-router-dom"
export default function Login() {
  const navigate = useNavigate();
  const [LoginDetails,setLoginDetails]=useState({
    employeeId:'',
    password:''
  })
  const handleChange=(event,field)=>{
   
    let actualValue=event.target.value

    setLoginDetails({
      ...LoginDetails,
      [field]:actualValue
    })
 
  }
  const handleFormSubmit=(event)=>{
    event.preventDefault()
if(LoginDetails.employeeId==='' || LoginDetails.password===''){
alert("fill credentials")
}

const url='http://localhost:8080/java/login';
axios.post(url,LoginDetails).then((result)=>{
  console.log(result.data.role);
  if(result.data.role==="manager"){
    navigate("/manager",{ state:{EmployeeId:result.data.employee_id,EmployeeName:result.data.employee_name},});
  }

 else if(result.data.role==="employee"){
    navigate("/employee",{ state:{EmployeeId:result.data.employee_id,EmployeeName:result.data.employee_name},});
  }
  
  else if(LoginDetails.employeeId==='' && LoginDetails.password===''){
    alert("user not found")
  }
     
}).catch((error)=>{
     alert(error.data)
});

  }
  return (
    <section className="page">
      <div className="register">
        <div className="col-1">
          <h2 className="signintext">Sign In</h2>
          <CiUser size="4rem" color="#EF4815" />
          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleFormSubmit}
          >
            <input
              className="input-box"
              type="text"
              value={LoginDetails.employeeId}
              placeholder = 'UserId'
              onChange={(e)=>handleChange(e,'employeeId')}
         
            />
            <input
              className="input-box"
              type="password"
              value={LoginDetails.password}
              placeholder = 'Password'
              onChange={(e)=>handleChange(e,'password')}
            />
            <button className="btn">Sign In</button>
          </form>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
      </div>
    </section>
  );
}
