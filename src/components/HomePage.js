import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DisplayNews from './DisplayNews'
import Filters from './Filters'
import Categories from './Categories'
import Searching from './Searching'
import Sorting from './Sorting'
import Language from './Language'
import Timing from './Timing'
import { CircularProgress ,Typography ,Backdrop} from '@mui/material'
//import Language from './Language'


function HomePage({setDescription,description,setLog}) {

    const [newsItem , setNewsItem] = useState([])
    const [filterValue,setFilterValue] = useState("")
    const [button ,setButton] = useState("")
    const [search,setSearch] = useState("")
    const [sort,setSort] = useState("")
    const [lang,setLang] = useState("")
    const [fromDate,setFromDate] = useState("")
    const [toDate,setToDate] = useState("")
    const [loading,setLoading]= useState(true)
    const [apiCall,setApiCall] = useState(false)
    const [pageLoader,setPageLoader] = useState(false)
    
    //const apiKey = process.env.REACT_APP_API_KEY;


    useEffect(()=>{
        axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2022-07-25&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`)
        
        .then((resp)=>{
            console.log("response",resp.data.articles)
            setNewsItem(resp.data.articles)
            setLoading(false)
        })
        .catch((err)=>{
            console.log("error",err)
            setApiCall(true)
        })

    },[])


  return (
    <>
      <Backdrop
      sx={{
        color:'#fff',
      }}
      open={apiCall}
      onClick={()=>{setApiCall(false)}}>
      <Typography variant='h3'>
        Invalid API CALL...!
      </Typography>
      </Backdrop>

    <div>
        { loading ?
      <div style={{display:'flex',marginLeft:600,marginTop:50}}>
      <CircularProgress color='success'  />
      <Typography variant="h4" sx={{marginLeft:3}}> Loading...</Typography>
      </div>
      :
      <div>
      <Categories setPageLoader={setPageLoader} setButton={setButton} filterValue={filterValue} setNewsItem={setNewsItem}  />
      
      <div style={{backgroundColor:'khaki'}}>
      <div style={{display:'flex',justifyContent:'space-between',marginRight:20,backgroundColor:'khaki'}}>
      <Searching setPageLoader={setPageLoader} search={search} setSearch={setSearch} setNewsItem={setNewsItem}/>
      <Timing setPageLoader={setPageLoader} filterValue={filterValue} fromDate={fromDate} search={search} setFromDate={setFromDate} toDate={toDate} setToDate={setToDate} setNewsItem={setNewsItem}/>
      </div>
      
      <br/>
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <Sorting setPageLoader={setPageLoader} sort={sort} setSort={setSort} setNewsItem={setNewsItem}/>
      <Language setPageLoader={setPageLoader} lang={lang} setLang={setLang} setNewsItem={setNewsItem} />
      <Filters setPageLoader={setPageLoader} button={button} filterValue={filterValue} setFilterValue={setFilterValue} setNewsItem={setNewsItem}/>
      </div>
      
      <br/>
      <DisplayNews loading={loading} newsItem={newsItem} description={description} setLog={setLog} 
      setDescription={setDescription} setPageLoader={setPageLoader} pageLoader={pageLoader}/>
      </div>
      </div>
      
    }
    

    </div>

    </>

  )
}

export default HomePage
