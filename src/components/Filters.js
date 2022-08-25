import {  FormControl ,MenuItem ,Select ,Typography} from '@mui/material'
import axios from 'axios'
import React from 'react'


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

   



  return (
    <div style={{display:'flex'}}>
          
        <Typography variant='h6'>Choose the country</Typography>
        <FormControl sx={{width:220,backgroundColor:"ButtonFace",}}>
        
        <Select
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