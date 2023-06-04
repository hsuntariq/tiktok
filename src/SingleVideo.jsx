import React, { useState } from 'react'
import Comment from './Comment'
import './styles.css'

import TopBar from './TopBar'
import VerticalBar from './VerticalBar'

const SingleVideo = ({id,video_url}) => {
  const [show,setShow] = useState(false);
  return (
    
    <>
        <div className="container" style={{borderRadius:'20px',overflow:'hidden',width:'100%',marginBottom:'1rem'}}> 
            <video autoPlay muted loop style={{width:'100%',objectFit:'cover',height:'100vh',overflow:'hidden'}} src={video_url} alt="" ></video>

            {/* top bar */}
            <TopBar/>
            {/* vertical bar */}
            <VerticalBar ss={setShow}/>
            
            {/* comment panel */}
            <Comment s={show} ss={setShow}/>
        </div>
    </>
  )
}

export default SingleVideo