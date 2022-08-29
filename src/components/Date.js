import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react'
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import { Link, useNavigate } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { makeStyles } from '@mui/styles';
import { ClassNames } from '@emotion/react'


const useStyles = makeStyles((theme)=>({

  mainDiv:{
    // display:'block',alignItems:'center',justifyContent:'center',
    // //display:'block',
    [theme.breakpoints.down('md')]:{
      display:'grid',
    }
  },
  div2:{
    [theme.breakpoints.up('md')]:{
      display:'flex',justifyContent:'space-between'
    },
    [theme.breakpoints.down('sm')]:{
      display:'grid',justifyContent:'space-between',
      width:300
    },
    
  }
}))
function Date({title,description,imageUrl,published,content,url}) {

  const classes = useStyles(); 
  const nav = useNavigate();

  return (
    <div  className={classes.mainDiv} >
    <Card  sx={{backgroundColor:'silver'}}>
     
     <CardContent>
      <div className={classes.div2} >
      
      { (imageUrl)?
        <img src={imageUrl} height='200px' width='300px' alt='picture'/> :
        <img src='/img/background.jpg' height='300px' width='460px' alt='picture'/>

      }
      <div style={{display:'grid',marginLeft:5,}}>
      <Typography variant="h4">Title:</Typography>{title}
      <Typography variant="h4">Description:</Typography>{description}
      <Typography variant="h4">Content:</Typography>{content}
      <Typography variant="h4">Published at:</Typography>{published}
      </div>
      </div>
     </CardContent>
     <CardActions>
        <ArrowBackIosNewIcon onClick={()=>{nav('/home')}}/>
      <Button variant="contained" onClick={()=>{nav('/home')}}>Back</Button>
     </CardActions>
    </Card>
    </div>
  )
}

export default Date
