import React from "react";
import {FiSkipBack} from 'react-icons/fi'
import {AiFillCamera,AiOutlineSearch} from 'react-icons/ai'
import {CiUser} from 'react-icons/ci'
const TopBar = () => {
  return (
    <div className="top">
      <div className="left">
        <h4>
          <FiSkipBack style={{ fontSize:'2rem', color: "white" }} />
        </h4>
      </div>
      <div className="right">
        <h4>
          <AiFillCamera style={{ fontSize:'2rem', color: "white" }} />
        </h4>
        <h4>
          <AiOutlineSearch style={{ fontSize:'2rem', color: "white" }} />
        </h4>
        <h4>
          <CiUser style={{ fontSize:'2rem', color: "white" }} />
        </h4>
      </div>
    </div>
  );
};

export default TopBar;
