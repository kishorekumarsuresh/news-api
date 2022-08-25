import { FormControl,Typography, MenuItem, Select} from '@mui/material'
import axios from 'axios'
import React from 'react'

function Sorting({sort,setSort,setNewsItem,setPageLoader}) {

  
    const handleSorting = (e) => {
         
        setSort(e.target.value)
        setPageLoader(true)
        axios.get(`https://newsapi.org/v2/everything?q=tesla&sortBy=${e.target.value}&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(response=>{
            setNewsItem(response.data.articles)
            setPageLoader(false)
            console.log("success sorting")
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
  return (
    <div>
      
      
      <div style={{display:'flex'}}>
          
          <Typography variant='h6'>Sort By</Typography>
          <FormControl sx={{width:220,backgroundColor:"ButtonFace"}}>
          
          <Select
            value={sort}
            onChange={handleSorting}>
  
              <MenuItem value="popularity">popularity</MenuItem>
              <MenuItem value="publishedAt">publishedAt</MenuItem>
              
              
          </Select>
        </FormControl>
  
      </div>
     
    </div>
  )
}

export default Sorting
