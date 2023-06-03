import React, { useContext } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import {} from "react-icons/ai";
import { AppContext } from "./context/context";
const VerticalBar = () => {
  const { show,heart, setHeart,count,setCount,setPanel } = useContext(AppContext);
  const test = () => {
    show.current.style.height = '100%'
    console.log(show.current)
  }
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

        {heart ? (
            <AiFillHeart onClick={()=>{
                setHeart(false)
                setCount(count-1)
            }} style={{ cursor: "pointer", fontSize: "2rem",color:'red' }} />
            ):(
                <AiOutlineHeart onClick={()=>{
                    setHeart(true)
                    setCount(count+1)

                }} style={{ cursor: "pointer", fontSize: "2rem" }} />
                )}
        <p style={{position:'absolute',top:'35px'}}>{count}</p>
                </div>
        <AiOutlineComment onClick={test} style={{ cursor: "pointer", fontSize: "2rem" }} />
        <IoMdShareAlt style={{ cursor: "pointer", fontSize: "2rem" }} />
      </div>
    </>
  );
};

export default VerticalBar;
