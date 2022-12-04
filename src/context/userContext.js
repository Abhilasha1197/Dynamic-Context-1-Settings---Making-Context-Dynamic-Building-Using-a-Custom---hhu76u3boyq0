 import React, { createContext, useState } from "react";


const UserContext = createContext()

const Wrapper = (props) => {

    const[state,setState] = useState("Hello")

    const greeting = state;
    const changeGreeting = (value) =>{
        setState(value);
    }
  
    return (
        <UserContext.Provider value={{ greeting,changeGreeting }}>
            {props.children}
        </UserContext.Provider>
    )
}
export { Wrapper, UserContext }