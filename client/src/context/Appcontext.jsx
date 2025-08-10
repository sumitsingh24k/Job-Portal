import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext=createContext();

export const AppContextProvider=(props)=>{

    const[searchFilter,setSearchFilter]=useState({
        title:'',
        location:''
    })
    const [isSearched,setIsSearched]=useState(false)

    const [jobs,setjobs]=useState([])
    const fetchjobs=async=>{
        setjobs(jobsData)
    }
    useEffect(()=>{
        fetchjobs()

    },)
    const value={
        setSearchFilter,searchFilter,
        isSearched,setIsSearched,
        jobs,setjobs
    }
    return (<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)
}