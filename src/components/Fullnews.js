import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useState ,useContext } from 'react'
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import { Link, useNavigate } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { makeStyles } from '@mui/styles';
import { ClassNames } from '@emotion/react'
import { ValueContext } from './ValueContext'


const useStyles = makeStyles((theme)=>({

  mainDiv:{
    backgroundColor:'yellow !important',
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
    
  },
  card:{
    backgroundColor:'green !important',
    backgroundColor:'silver !important',
    //backgroundColor:'chocolate !important',

  }
}))


function Fullnews({}) {

  const classes = useStyles(); 
  const nav = useNavigate();
  const {title,description,imageUrl,published,content,url} = useContext(ValueContext)

  return (
    <div  className={classes.mainDiv} >
    <Card  className={classes.card} >
     
     <CardContent>
      <div className={classes.div2} >
      
      { (imageUrl)?
        <img src={imageUrl} height='300px' width='460px' alt='picture'/> :
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

export default Fullnews
