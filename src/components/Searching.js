import { TextField } from '@mui/material'
import axios from 'axios'
import React from 'react'

function Searching({search,setSearch,setNewsItem,setPageLoader}) {

    
    const handleSearch = (e) =>{

        setSearch(e.target.value)
        setPageLoader(true)
        axios.get(`https://newsapi.org/v2/everything?q=${e.target.value}&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(response=>{
            setNewsItem(response.data.articles)
            setPageLoader(false)
            console.log("search success");
        })
        .catch(err=>{
            console.log("unsuccessful search")
        })
    }

  return (
    <div style={{marginTop:7,marginLeft:10}}>
      
      <TextField sx={{width:400,backgroundColor:'ButtonFace'}}
      value={search}
      placeholder="Search"
      onChange={handleSearch}></TextField>
    </div>
  )
}

export default Searching
