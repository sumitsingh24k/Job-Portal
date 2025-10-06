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

    //fetch company dat a
    const fetchCompanyData=async()=>{
        try{
            const {data}=await axios.get(backendUrl+'api/company/company',{headers:{token:companyToken}})
            if (data.success){
                setCompanyData(data.company)
            }else{
                toast.error(data.message)
            }
        }catch(error){

        toast.error(error.message)
        }
    }
    useEffect(()=>{
        if(companyToken){
            fetchCompanyData()
        }
    }, [companyToken])
    useEffect(()=>{
        fetchjobs()
        const storedCompanyToken=localStorage.getItem('companyToken')
        if (storedCompanyToken){
            setCompanyToken(storedCompanyToken)
        }
    })

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