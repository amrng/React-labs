/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
// import style from "./Message.module.css"
// import img from "../../img/avatar.png"
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup'
// import jwtDecode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


export default function Message() {

  // const [userId, setUserId] = useState("")
  // const [userName, setUserName] = useState("")
  
  // async function postMessage(values){
    //   let body = {
      //   messageContent: values.messageContent ,
  //   receivedId: userIdParams.userId
  //   }
  //     console.log(body);
  
  //   let res = await axios.post("https://sara7aiti.onrender.com/api/v1/message", body)
  //   console.log(res);
  
  // }
  
  // const sendingStatus = useSelector(state => state.message)


  const userIdParams = useParams()
  const dispatch = useDispatch()
  // const sendMessage = useSelector(state => state.messages.setMessage)

  const validationSchema = Yup.object({
    messageContent: Yup.string()
    .max(250, "Max 250 char")
    .required("You can't send empty message"),
    })


  const formik = useFormik({
    initialValues : {
      messageContent: ""
    },
    validationSchema,
    onSubmit: (values) => {
      console.log({messageContent: values.messageContent,
         receivedId: userIdParams.userId});

         console.log(values.messageContent);
    
      dispatch(postMessage({messageContent: values.messageContent,
         receivedId: userIdParams.userId}))
    }
  })

  
  return (
    <>
    <div className='w-50 mx-auto mt-5 '>
        <div className="text-center pb-2 pt-5 m-5 ">
          <div className="card py-3 bg-dark ">

            <h3 className=" text-white">Send a meesage to your friend</h3>
          </div>
        </div>
          <div className='bg-dark pt-3 px-4 rounded-2'>

            {formik.errors.messageContent ? <><div className="alert alert-info m-0 p-2 fw-bold w-50 mx-auto "><i className="fa-solid fa-xmark fa-beat-fade fa-lg"></i> {formik.errors.messageContent}</div></> : ""}

          <form className='p-3' onSubmit={formik.handleSubmit}>
        <textarea onChange={formik.handleChange} value={formik.values.messageContent}
        className="form-control bg-dark-subtle bg-opacity-25" name="messageContent"
            cols={10} rows={9} placeholder="You cannot send a Sarahah to yourself, share your profile with your friends :)"/>

        <button type='submit' className="btn btn-outline-info mx-auto d-block mt-3">
          <i className="far fa-paper-plane"/> Send</button>
      </form>
          </div>
    </div>
    </>
  )
}
