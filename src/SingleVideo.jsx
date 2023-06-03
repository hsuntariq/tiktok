import React from 'react'
import CommentPanel from './CommentPanel'
import './styles.css'

import TopBar from './TopBar'
import VerticalBar from './VerticalBar'

const SingleVideo = ({id,video_url}) => {
  return (
    <>
        <div className="container" style={{borderRadius:'20px',overflow:'hidden',width:'100%',marginBottom:'1rem'}}> 
            <video autoPlay muted loop style={{width:'100%',objectFit:'cover',height:'100vh'}} src={video_url} alt="" ></video>

            {/* top bar */}
            <TopBar/>
            {/* vertical bar */}
            <VerticalBar id={id}/>
            {/* comment section */}
            <CommentPanel />
        </div>
    </>
  )
}

export default SingleVideo