import React, { useReducer, useState } from 'react'

const Test = () => {
    const reducer = (state,action) => {
        if(action.type === 'ADD'){
            return {
                ...state,
                message:'Comment Added',
                comments: [...state.comments,action.payload]
            }
        }
    }
    // create the initialState
    const initialState = {
        comments:[],
        message:'',
        show:false,
        count:0
    }
    const [comment,setComment] = useState('')
    const handleClick = () => {
        dispatch({type:'ADD',payload:'test'})
    }

    const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <>
    {state.message}
    <div onClick={handleClick}>Test</div>
    </>
  )
}

export default Test