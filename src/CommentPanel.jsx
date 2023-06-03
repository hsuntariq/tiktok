import React, { useContext, useRef } from 'react'
import './comment.css'
import { AppContext } from './context/context'
const CommentPanel = () => {
    const{panel,show} = useContext(AppContext)
  return (
    <>
        <div ref={show} className="comment-container" style={{
            // height:`${panel && '100%'}`
        }}>
            <form  style={{display:'flex'}}>
                <input type="text" placeholder='Write a comment...' />
                <button style={{width:'40px'}}>
                    Add
                </button>
            </form>
        </div>
    </>
  )
}

export default CommentPanel