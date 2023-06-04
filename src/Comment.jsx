import React, { useReducer, useState } from 'react'
import './comment.css'
import {BsSend} from 'react-icons/bs'
import {RiArrowDropDownLine} from 'react-icons/ri'
import Modal from './Modal'
import {FaUserCircle} from 'react-icons/fa'
const Comment = ({s,ss}) => {
    const reducer = (state,action) => {
        if(action.type === 'EMPTY'){
            return {
                ...state,
                show:true,
                message:'Please enter a comment'
            }
        }if(action.type === 'HIDE'){
            return {
                ...state,
                show:false,
                message:''
            }
        }
        if(action.type === 'ADD'){
            return {
                ...state,
                comments:[...state.comments,action.payload],
                show:true,
                message:'Comment Added'

            }
        }
    }
    const [comment,setComment] = useState('');
    const initialState = {
        comments:[],
        show:false,
        message:'',
        
    }
    const [state,dispatch] = useReducer(reducer,initialState);
    const addComments = (e) => {
        e.preventDefault()
        if(!comment){
            dispatch({type:'EMPTY'})
        }else{
            dispatch({type:'ADD',payload:comment})
            setComment('')
        }



        setTimeout(() => {
            dispatch({type:"HIDE"})
        }, 2000);
        
    }
  return (
    <>
        <div className="container-comment" style={{
            height:`${s ? '50%':'0'}`
        }}>
                <RiArrowDropDownLine onClick={()=>ss(false)} className='icon' style={{fontSize:'2rem'}}/>
                {state.show && <Modal message={state.message}/>}
                    {state.comments.map((comm)=>{
                        return(
                            <>
                                <div className="container" style={{color:'white',width:'100%',border:'1px solid white',display:'flex',alignItems:'center',marginTop:'2rem'}}>
                                    <FaUserCircle/>
                                    <h5>{comm}</h5> 
                                </div>
                            </>
                        )
                    })}
            <form>
                <input value={comment} onChange={(e)=>setComment(e.target.value)} type="text" placeholder='Enter a comment' name="" id="" />
                <button type='submit' onClick={addComments}><BsSend/></button>
            </form>
        </div>
    </>
  )
}

export default Comment