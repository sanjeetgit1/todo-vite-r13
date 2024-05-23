import { json } from 'express';
import React, { createContext, useState } from 'react'

export const taskscontext = createContext(null);



function Taskcontext(props) {

    const [task,settask]=useState(
        JOSN.parse(localStorage.getItem("tasks")) || []

    );

    return  
    <taskscontext.Provider value={[task,settask]}>
        {props.children}
    </taskscontext.Provider>
    
   
        
    
}

export default Taskcontext
