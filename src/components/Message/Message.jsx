/* eslint-disable no-unused-vars */
import React from 'react'
import style from "./Message.module.css"
import img from "../../img/avatar.png"
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';


export default function Message() {

  

  async function addMessage(values){
    let body = {
    messageContent: values.messageContent ,
    receivedId: userIdParams.userId
    }
      console.log(body);

    let res = await axios.post("https://sara7aiti.onrender.com/api/v1/message", body)
    console.log(res);
    
  }

    let userIdParams = useParams()
    console.log(userIdParams);

const validationSchema = Yup.object({
    messageContent: Yup.string()
    .max(250, "Max 250 char")
    .required("You can't send empty message"),
    })

  let formik = useFormik({
    initialValues : {
      messageContent: ""
    },
    validationSchema,
    onSubmit: (values) => {
      addMessage(values)
      }
  })
  
  return (
    <>
    <div className='w-50 mx-auto'>
        <div className="text-center pb-2 pt-5 mt-5">
          <div className="card py-3 bg-dark ">

            <img src={img} className={`${style.avatar} mb-5`} alt="" />

            <h3 className="mt-5 py-4 mb-3 text-white">Amr Elnagdy</h3>
            <button data-toggle="modal" data-target="#share" className="btn btn-outline-info w-25 mx-auto share "><i className="fas fa-share-alt" />  Share Profile</button>
          </div>
        </div>
          <div className='bg-dark pt-3 px-4 rounded-2'>

            {formik.errors.messageContent ? <><div className="alert alert-info m-0 p-2 fw-bold w-50 mx-auto "><i className="fa-solid fa-xmark fa-beat-fade fa-lg"></i> {formik.errors.messageContent}</div></> : ""}

          <form className='p-3' onSubmit={formik.handleSubmit}>
        <textarea onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.messageContent}
        className="form-control bg-dark-subtle bg-opacity-25" name="messageContent"
            cols={10} rows={9} placeholder="You cannot send a Sarahah to yourself, share your profile with your friends :)"/>

        <button type='submit' onClick={addMessage} className="btn btn-outline-info mx-auto d-block mt-3">
          <i className="far fa-paper-plane"/> Send</button>
      </form>
          </div>
    </div>
    </>
  )
}
