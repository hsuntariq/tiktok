import React, { useRef } from 'react'
import './modal.css'
const Modal = ({message}) => {
    const scale = useRef(null);
    // setTimeout(() => {
    //     scale.current.style.scale = '0'
    // }, 1000);
    console.log(scale.current)
  return (
    <>
        <div ref={scale} className="box">
        <h5>{message}</h5>
        </div>
    </>
  )
}

export default Modal