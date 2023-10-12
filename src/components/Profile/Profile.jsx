import React, { useEffect, useState } from 'react'
import style from "./Profile.module.css"
import img from "../../img/avatar.png"
import jwtDecode from 'jwt-decode'
import { Link } from 'react-router-dom'
// import axios from 'axios'
// import { useQuery } from 'react-query'
import PopUp from '../PopUp/PopUp';
import { useDispatch, useSelector } from 'react-redux'
import { getMessages } from '../../Redux/messagesSlice'




export default function Profile() {
  // const [allMessages, setAllmessages] = useState([])
  
  
  // function getMessages(){
    //   return axios.get("https://sara7aiti.onrender.com/api/v1/message", {
      //     headers: {
  //       token : localStorage.getItem("Token")
  //     }
  //   })
  // }
  // // Queries
  // const query = useQuery('messages', getMessages)
  
  // useEffect(()=>{
  //   setAllmessages(query.data?.data?.allMessages)
  
  //   getUserId()
  // },[query.data])
  


  const [userId, setUserId] = useState("")
  const [userName, setUserName] = useState("")
  const [modalShow, setModalShow] = useState(false);
  const [sharelink, setSharelink] = useState('');


  const allMessages = useSelector((state)=> state.messages.message)
  
  let dispatch = useDispatch()
  
  useEffect(()=>{
    getUserData()
    dispatch(getMessages())    
    },[allMessages, dispatch])
    

    
    function getUserData(){
      let decoded = jwtDecode(localStorage.getItem("Token"))
      setUserId(decoded.id)
      setUserName(decoded.name)
    }


  const handleOpenModal = () => {
		const baseUrl = 'http://localhost:3000';
		const url = `${baseUrl}/messages/${userId}`;
		setSharelink(url);
		setModalShow(true);
	};


  return (
    <>
    <div className='w-50 mx-auto '>
        <div className=" text-center py-5 my-5">
          <div className="card py-3 bg-dark ">
            <img src={img} className={`${style.avatar} mb-5`} alt="" />

            <h3 className="mt-5 py-4 mb-3 text-white">{userName}</h3>
            <Link
							onClick={handleOpenModal}
							className="btn btn-outline-info w-25 mx-auto">
							<i className="fas fa-share-alt" /> Share Profile
						</Link>
						<PopUp
							show={modalShow}
							onHide={() => setModalShow(false)}
							sharelink={sharelink}
						/>
          </div>
        </div>
          
          {allMessages? <div className="row">
            <div className="col-md-12">
              

              {allMessages.length === 0 ? 
              <div className="card p-3 bg-dark position-relative ">
                <p className='text-white m-0'>You don't have any messages... </p>
                </div> : ""}

              {allMessages.length === 0 ? 
              "" : <><h4 className='text-white mb-3 '>Your messages:</h4></>}

            {allMessages.map((message) => { return <div key={message._id} className="card p-3 mb-3  bg-dark position-relative ">
              <p className='text-white m-0'>{message.messageContent}</p>
            </div>})}
            </div>
          </div> 
          :
          <div className='text-center'><i className="fa-solid fa-spinner fa-spin-pulse fa-4xl mx-5 "></i></div> 
          }
          
    </div>

    </>
  )
}
