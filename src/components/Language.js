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
  },
  select:{
    boxShadow:'1px 1px 1px 1px grey',
    height:'40px'
  }



}))

function Language({lang, setLang, setNewsItem,setPageLoader,button,filterValue,search}) {

  
    const handleLanguage = (e) =>{

        setLang(e.target.value)
        setPageLoader(true)
        axios.get(`https://newsapi.org/v2/top-headlines?q=${search}&language=${e.target.value}&country=${filterValue}&category=${button}&apiKey=${process.env.REACT_APP_API_KEY}`)
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
        className={classes.select}
        value={lang}
        onChange={handleLanguage}>

            <MenuItem value="en" selected>English</MenuItem>
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
