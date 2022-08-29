import React from 'react'
import {  FormControl ,MenuItem ,Select ,Typography} from '@mui/material'
import axios from 'axios'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme)=>({

  mainDiv:{
    display:'grid',alignItems:'center'
  },
  formcontrol:{
    width:220,
    [theme.breakpoints.up('sm')]:{
      width:140,
    },
    [theme.breakpoints.down('md')]:{
      width:140,
    },

    [theme.breakpoints.up('md')]:{
      width:180,
    },

    backgroundColor:'ButtonFace'},
  select:{
    height:40,boxShadow:3
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

    const classes = useStyles()

  return (
    
    <div  className={classes.mainDiv} >
      <Typography variant='h6' className={classes.typo}>Select Language</Typography>
      <Typography variant='body1' className={classes.typo1}>select language</Typography>
        <FormControl  className={classes.formcontrol} >
        
        <Select
        sx={{boxShadow:3}}
        className={classes.select}
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
