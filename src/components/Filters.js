import {  FormControl ,InputLabel,MenuItem ,Select ,Typography} from '@mui/material'
import axios from 'axios'
import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme)=>({

  mainDiv:{
    display:'grid',alignItems:'center'
  },
  formcontrol:{
    width:220,backgroundColor:"ButtonFace",
    [theme.breakpoints.up('sm')]:{
      width:140,
    },
    [theme.breakpoints.down('md')]:{
      width:140,
    },

    [theme.breakpoints.up('md')]:{
      width:180,
    },
  },
  select:{
    height:40,
  },
  typo1:{
    display:'none',
    [theme.breakpoints.down('md')]:{
     display:'block'
    }
  },
  typo:{
    display:'block',
    [theme.breakpoints.down('md')]:{
      display:'none'
     }
  }


}))



 function Filters({setNewsItem,filterValue,setFilterValue,button,setPageLoader}) {

  
    

    const handleChange=(e)=>{

        setFilterValue(e.target.value)
        setPageLoader(true)

        axios.get(`https://newsapi.org/v2/top-headlines?country=${e.target.value}&category=${button}&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then((response)=>{
            setNewsItem(response.data.articles)
            setPageLoader(false)
            console.log('filtered item')
        })
        .catch((err)=>{
            console.log("error ",err)
        })
    }

   
    const classes = useStyles()


  return (
    <div  className={classes.mainDiv} >
          
        <Typography variant='h6' className={classes.typo}>Choose the country</Typography>
        <Typography variant='body1' className={classes.typo1}>select country</Typography>
        <FormControl className={classes.formcontrol} >
        <Select
        className={classes.select}
        sx={{boxShadow:3}}
        value={filterValue}
        onChange={handleChange}>

            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">US</MenuItem>
            <MenuItem value="CN">China</MenuItem>
            <MenuItem value="RU">Russia</MenuItem>
            <MenuItem value="AU">Australia</MenuItem>

        </Select>
      </FormControl>

    </div>
  )
}

export default Filters