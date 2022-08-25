import { Button, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'

function Timing({search, fromDate, setFromDate, toDate, setToDate, setNewsItem,setPageLoader}) {


    const handleTiming = (e) =>{

        if (e.target.name==='fromDate'){
            console.log(e.target.value)
            setFromDate(e.target.value)

        }

        else {
            setToDate(e.target.value)
            console.log(e.target.value)
        }
    }

    const showDetails = (e) => {
        //console.log(fromDate)
        //console.log(toDate)
        setPageLoader(true)
        if (fromDate!=="" && toDate!==""){
            //console.log('ready')
            axios.get(`https://newsapi.org/v2/everything?q=apple&from=${fromDate}&to=${toDate}&apiKey=${process.env.REACT_APP_API_KEY}`)
            .then(respose=>{
                setNewsItem(respose.data.articles)
                setPageLoader(false)
                console.log('timing api call')
            })
            .catch(err=>{
                console.log('timing api fails',err)
            })
        }
        else{
            alert('provide both start and end date')
        }

    }

  return (
    // <div style={{dsiplay:'flex',flexDirection:'row'}}>
    //     <div style={{display:'grid'}}>
    //         <div style={{display:'flex',marginTop:2}}>
    //     <Typography>from: </Typography>
    //     <DatePicker sx={{height:20,}} selected={fromDate} name="fromDate" 
    //     dateFormat='yyyy/MM/dd'
    //     onChange={(e)=>{setFromDate(e) 
    //         console.log(e)}} 
    //     showYearDropdown
    //     scrollableYearDropdown
    //     isClearable/>
    //         </div>
    //         <div style={{display:'flex',marginTop:2}}>
    //     <Typography sx={{marginLeft:2.3}}>to: </Typography>
    //     <DatePicker sx={{height:20,}} selected={toDate} name="toDate" 
    //     dateFormat='yyyy/MM/dd'
    //     maxDate={new Date()}
    //     onChange={(e)=>{setToDate(e)}} 
    //     showYearDropdown
    //     scrollableYearDropdown
    //     isClearable/>
    //         </div>
    //     </div>
    //     <div style={{marginLeft:103}}>
    //     <Button variant='contained' onClick={showDetails}>Go</Button>
    //     </div>
        
        
    // </div>
    <div style={{display:'grid'}}>
         from date
      <input type="date" 
        name="fromDate"
        value={fromDate}
        onChange={handleTiming} />
         to date
      <input type="date" 
      name="toDate"
      value={toDate}
        onChange={handleTiming}/>

        <Button  variant="contained"  onClick={showDetails}>Go</Button>
    </div>
    
  )
}

export default Timing
