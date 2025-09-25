import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext=createContext();

export const AppContextProvider=(props)=>{
    const backendUrl=import.meta.env.VITE_BACKEND_URL
    const[searchFilter,setSearchFilter]=useState({
        title:'',
        location:''
    })
    const [isSearched,setIsSearched]=useState(false)
    const [jobs,setjobs]=useState([])
    const [showRecruiterLogin,setShowRecruiterLogin]=useState(false)
    const [companyToken,setCompanyToken]=useState(null)
    const [companyData,setCompanyData]=useState(null)
    const fetchjobs=async=>{
        setjobs(jobsData)
    }
    useEffect(()=>{
        fetchjobs()

    },)
    const value={
        setSearchFilter,searchFilter,
        isSearched,setIsSearched,
        jobs,setjobs,
        showRecruiterLogin,setShowRecruiterLogin,
        companyToken,setCompanyToken,
        companyData,setCompanyData,
        backendUrl

    }
    return (<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)
}