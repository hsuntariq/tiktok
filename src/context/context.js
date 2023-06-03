import React,{createContext, useRef, useState} from "react";
import { data } from "../data";

// create the context

export const AppContext = createContext();

// create the provider

export const AppProvider = ({children}) => {
    // create video's state
    const [videos,setVideos] = useState(data);
    const [count,setCount] = useState(255)
    const move = useRef(null);
    const [heart,setHeart] = useState(false)
    const [panel,setPanel] = useState(false)
    const show = useRef(null)

    return <AppContext.Provider value={{
        videos,
        setVideos,
        count,
        show,
        setCount,
        move,
        heart,
        setHeart,
        panel,
        setPanel
    }}>
        {children}
    </AppContext.Provider>
}
