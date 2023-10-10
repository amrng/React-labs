/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import style from "./Register.module.css"
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Register() {

  // programatic routing
  const navigate = useNavigate()
  // loading while api responso
  const [isLoading , setIsLoading] = useState(false)
  // if there is error in response
  const [apiError, setApiError] = useState("")

  function register(values){
    setIsLoading(true)
    axios.post('https://sara7aiti.onrender.com/api/v1/user', values).then((data)=> {
      console.log(data);
      if (data.data.message === "Added" ) {
        setIsLoading(false)
        setApiError("")
        navigate("/login")
      }
    }).catch((err)=>{
      setIsLoading(false)
      setApiError(err.response.data.error)
    })
  }

  // difficult way
  // const validate = (values)=>{
  //   let errors = {}
  //   // name validation
  //   if (!values.name) {
  //     errors.name = "Name is required"
  //   } else if (values.name.length > 10) {
  //     errors.name = "Name must be less than 10 char"
  //   } else if (values.name.length < 3) {
  //     errors.name = "Name must be more than 3 char"
  //   }
  //   // Email validation
  //   if (!values.email) {
  //     errors.email = "Email is required"
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = "Enter valid email"
  //   }
  //   // Password validation
  //   if (!values.password) {
  //     errors.password = "Password is required"
  //   } else if (!/^[A-Z][a-z0-9]/.test(values.password)) {
  //     errors.password = "Enter valid password"
  //   } else if (values.password.length < 4) {
  //     errors.password = "Password must be more than 4 char"
  //   } else if (values.password.length > 12) {
  //     errors.password = "Password must be less than 12 char"
  //   }
  //   // Chech the same password
  //   if (!values.rePassword) {
  //     errors.rePassword = "Re-Enter the password"
  //   } else if (values.rePassword !== values.password) {
  //     errors.rePassword = "Password not match"
  //   }
  //   // Check Age validation
  //   if (!values.age) {
  //     errors.age = "Age is required"
  //   } else if (values.age > 55) {
  //     errors.age = "Age must be less than 55"
  //   }else if (values.age < 14) {
  //     errors.age = "Age must be more than 14"
  //   }
  //   return errors
  // }

  // using YUP
  const validationSchema = Yup.object({
    name: Yup.string()
    .max(10, "Name must be less than 10 char")
    .min(3, "Name must be more than 3 char")
    .required("Name is required"),

    email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

    password: Yup.string()
    .required("Password is required")
    .matches(/^[A-Z][a-z0-9]/, "Password must start with CAPITAL char")
    .min(5, "Password must be more than 5 char")
    .max(15, "Password must be less than 15 char"),
    
    rePassword: Yup.string()
    .required("Password is required").oneOf([Yup.ref("password")]),
    age: Yup.number()
    .required("Age is required")
    .integer("Enter valid age")
    .positive("must be positive age"),
    })


  let formik = useFormik({
    initialValues:{
    name:"",
    email:"",
    password:"",
    rePassword:"",
    age:0
    },
    validationSchema,
    onSubmit: (values) => {
      register(values)
    }
  })



  return (
    <>
    <div className="w-50 mx-auto m-5 bg-dark rounded-5  px-5 py-3  ">
      {apiError? <div className="alert alert-info">{apiError}</div> : ""}
      

      <h2 className='text-center m-5 '>Register</h2>

      <form onSubmit={formik.handleSubmit}>
        {/* Name */}
        <div className="form-group mb-4 w-75 mx-auto">
        <input type="text" placeholder='Name' name="name" id="name" className='form-control my-3'
        value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.errors.name && formik.touched.name?
        <div className="alert alert-info m-0 p-0 px-3">{formik.errors.name}</div> 
        : ""}        
        </div>

        {/* Email */}
        <div className="form-group mb-4 w-75 mx-auto">
        <input type="email" placeholder='Email' name="email" id="email" className='form-control my-3'
        value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.errors.email && formik.touched.email?
        <div className="alert alert-info m-0 p-0 px-3">{formik.errors.email}</div> 
        : ""}        
        </div>

        {/* Password */}
        <div className="form-group mb-4 w-75 mx-auto">
        <input type="password" placeholder='Password' name="password" id="password" className='form-control my-3'
        value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.errors.password && formik.touched.password?
        <div className="alert alert-info m-0 p-0 px-3">{formik.errors.password}</div> 
        : ""}   
        </div>

        {/* rePassword */}
        <div className="form-group mb-4 w-75 mx-auto">
        <input type="password" placeholder='Re-Password' name="rePassword" id="rePassword" className='form-control my-3'
        value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.errors.rePassword && formik.touched.rePassword?
        <div className="alert alert-info m-0 p-0 px-3">{formik.errors.rePassword}</div> 
        : ""}   
        </div>

        {/* Age */}
        <div className="form-group mb-5 w-75 mx-auto">
        <input type="number" placeholder='Age' name="age" id="age" className='form-control my-3'
        value={formik.values.age} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.errors.age && formik.touched.age?
        <div className="alert alert-info m-0 p-0 px-3">{formik.errors.age}</div> 
        : ""}   
        </div>
        <button type='submit' className='btn btn-outline-info w-25  d-block mx-auto fw-bold'>
          {isLoading ? <i className="fa-solid fa-spinner fa-spin-pulse"></i> : <><i className="fa-solid fa-right-to-bracket me-2 "></i>Register</>}
          
          
          
          </button>
    </form>

    </div>
    </>
  )
}
