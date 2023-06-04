import React, { useContext, useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import {} from "react-icons/ai";
import { AppContext } from "./context/context";
const VerticalBar = ({ss}) => {
  const[increase,setIncrease] = useState(false)
  const [likes,setLikes] = useState(298);
  return (
    <>
      <div
        className="container"
        style={{
          height: "200px",
          position: "absolute",
          bottom: "10px",
          right: "5px",
          width: "10%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          color: "white",
          alignItems: "center",
        }}
      >
        <div className="likes" style={{display:'flex',flexDirection:'column',alignItems:'center',postion:'relative'}}>

        {increase ? (
            <AiFillHeart onClick={()=>{
                setIncrease(false)
                setLikes(likes-1)
            }} style={{ cursor: "pointer", fontSize: "2rem",color:'red' }} />
            ):(
                <AiOutlineHeart onClick={()=>{
                  setIncrease(true)
                  setLikes(likes+1)

                }} style={{ cursor: "pointer", fontSize: "2rem" }} />
                )}
        <p style={{position:'absolute',top:'35px'}}>{likes}</p>
                </div>
        <AiOutlineComment onClick={()=>ss(true)} style={{ cursor: "pointer", fontSize: "2rem" }} />
          
        <IoMdShareAlt style={{ cursor: "pointer", fontSize: "2rem" }} />
      </div>
    </>
  );
};

export default VerticalBar;
