import React from 'react'
import {  FormControl ,MenuItem ,Select ,Typography} from '@mui/material'
import axios from 'axios'
function Language({lang, setLang, setNewsItem,setPageLoader}) {

  
    const handleLanguage = (e) =>{

        setLang(e.target.value)
        setPageLoader(true)
        axios.get(`https://newsapi.org/v2/top-headlines?language=${e.target.value}&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(response=>{
            setNewsItem(response.data.articles)
            setPageLoader(false)
            console.log("language api call")
        })
        .catch(err=>{
            console.log("language api fails",err)
        })
    }
  return (
    
    <div style={{display:'flex'}}>
      <Typography variant='h6'>Select Language</Typography>
        <FormControl sx={{width:220,backgroundColor:'ButtonFace'}}>
        
        <Select
        value={lang}
        onChange={handleLanguage}>

            <MenuItem value="en">English</MenuItem>
            <MenuItem value="fr">French</MenuItem>
            <MenuItem value="it">Italian</MenuItem>
            <MenuItem value="pt">Portuguese</MenuItem>
            <MenuItem value="ru">Russian</MenuItem>
            <MenuItem value="sv">Swedish</MenuItem>

        </Select>
      </FormControl>
    </div>
  )
}

export default Language
