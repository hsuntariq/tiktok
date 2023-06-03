import React, { useContext } from 'react'
import { AppContext } from './context/context'
import { data } from './data'
import SingleVideo from './SingleVideo'

const Videos = () => {
  const {videos,setCount,count,move} = useContext(AppContext)
  
  return (
    <>
        <div className="container" style={{border:'5px solid #000',width:'460px'}}>
            {videos.map((video)=>{
              return <SingleVideo key={video.id} {...video}/>
            })}
        </div>
        
    </>
  )
}

export default Videos