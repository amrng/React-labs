/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import style from "./Login.module.css"
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



export default function Login() {

  // programatic routing
  const navigate = useNavigate()
  // loading while api responso
  const [isLoading , setIsLoading] = useState(false)
  // if there is error in response
  const [apiError, setApiError] = useState("")

    function login(values){
    setIsLoading(true)
    axios.post('https://sara7aiti.onrender.com/api/v1/user/signin', values).then((data)=> {
      console.log(data);
      if (data.data.message === "welcome" ) {
        setIsLoading(false)
        setApiError("")
        navigate("/profile")
      }
    }).catch((err)=>{
      setIsLoading(false)
      setApiError(err.response.data.error)
    })
  }

    const validationSchema = Yup.object({
    email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

    password: Yup.string()
    .required("Password is required")
    .matches(/^[A-Z][a-z0-9]/, "Password must start with CAPITAL char")
    .min(5, "Password must be more than 5 char")
    .max(15, "Password must be less than 15 char"),
    })

    let formik = useFormik({
    initialValues:{
    email:"",
    password:"",
    },
    validationSchema,
    onSubmit: (values) => {
      login(values)
    }
  })








  return (
    <>
    <div className="w-50 mx-auto m-5 bg-dark rounded-5  px-5 py-3  ">
      {apiError? <div className="alert alert-info">{apiError}</div> : ""}
      
      <h2 className='text-center m-5 '>Login</h2>

      <form onSubmit={formik.handleSubmit}>
        {/* Email */}
        <div className="form-group mb-4 w-75 mx-auto">
        <input type="email" placeholder='Email' name="email" id="email" className='form-control'
        value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.errors.email && formik.touched.email?
        <div className="alert alert-info h-25">{formik.errors.email}</div> 
        : ""}        
        </div>

        {/* Password */}
        <div className="form-group mb-4 w-75 mx-auto">
        <input type="password" placeholder='Password' name="password" id="password" className='form-control'
        value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.errors.password && formik.touched.password?
        <div className="alert alert-info">{formik.errors.password}</div> 
        : ""}   
        </div>

        <button type='submit' className='btn btn-outline-info w-25  d-block mx-auto fw-bold'>
          {isLoading ? <i className="fa-solid fa-spinner fa-spin-pulse"></i> : <><i className="fa-solid fa-right-to-bracket me-2 "></i>Login</>}          
          </button>
    </form>
    </div>
    </>
  )
}
