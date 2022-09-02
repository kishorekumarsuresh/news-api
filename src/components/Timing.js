import { Button, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
//import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import { makeStyles } from '@mui/styles';
import { ClassNames } from '@emotion/react'

const useStyles = makeStyles((theme)=>({

    mainDiv:{

        display:'flex',alignItems:'center',marginTop:15,
        [theme.breakpoints.down('sm')]:{
            display:'none',
        },
    },
    button:{
        height:22,
        marginLeft:'10px !important'
    }

}))


function Timing({lang,search,filterValue, fromDate, setFromDate, toDate, setToDate,sort, setNewsItem,setPageLoader,button}) {


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
        
        setPageLoader(true)
        if (fromDate!=="" && toDate!==""){
            //console.log('ready')
            if (search===""){
                axios.get(`https://newsapi.org/v2/everything?q=apple&from=${fromDate}&to=${toDate}&sortBy=${sort}&apiKey=${process.env.REACT_APP_API_KEY}`)
                .then(respose=>{
                    setNewsItem(respose.data.articles)
                    setPageLoader(false)
                    console.log('timing api call')
                })
                .catch(err=>{
                    console.log('timing api fails',err)
                })
            }

            else if (lang || button){
                axios.get(`https://newsapi.org/v2/top-headlines?q=${search}&language=${lang}&country=${filterValue}&category=${e.target.name}&sortBy=${sort}&apiKey=${process.env.REACT_APP_API_KEY}`)
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
                axios.get(`https://newsapi.org/v2/everything?q=${search}&from=${fromDate}&to=${toDate}&sortBy=${sort}&apiKey=${process.env.REACT_APP_API_KEY}`)
                .then(respose=>{
                    setNewsItem(respose.data.articles)
                    setPageLoader(false)
                    console.log('timing api call')
                })
                .catch(err=>{
                    console.log('timing api fails',err)
                })
            }
           
        }
        else{
            alert('provide both start and end date')
        }

    }

    const classes = useStyles();

  return (
    <div>
    <div className={classes.mainDiv} >
        <label style={{display:'flex',}}>
        from date
      <input type="date" 
      style={{marginLeft:2}}
        name="fromDate"
        value={fromDate}
        onChange={handleTiming} />
        </label>
    <label style={{marginLeft:4}}>
        to date 
      <input type="date" 
      style={{marginLeft:2}}
      name="toDate"
      value={toDate}
        onChange={handleTiming}/>
    </label>
        <Button  className= {classes.button}  variant="contained"  onClick={showDetails}>Go</Button>
    </div>
    </div>
  )
}

export default Timing
