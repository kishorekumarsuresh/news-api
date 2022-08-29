import { FormControl,Typography, MenuItem, Select} from '@mui/material'
import axios from 'axios'
import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme)=>({

  mainDiv:{
    //display:'grid',
    alignItems:'center',marginLeft:3,
    

    [theme.breakpoints.down('sm')]:{
      display:'none'
    },
    [theme.breakpoints.up('md')]:{
      display:'grid'
    },
    // [theme.breakpoints.down('md')]:{
    //   display:'flex'
    // }


  },
  formControl:{

    [theme.breakpoints.up('sm')]:{
      width:100,
    },

    [theme.breakpoints.up('md')]:{
      width:180,
    },

    backgroundColor:"ButtonFace"
  },
  Select:{
    height:40,
    boxShadow:3
  },
  Typo:{
    display:'block',
    [theme.breakpoints.down('md')]:{
      display:'none'
    },

  },
  Typo1:{
    display:'none',
    [theme.breakpoints.down('md')]:{
     display:'block'
    }
  }
}))

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
    
    const classes = useStyles();

  return (
    <div>
      
      
      <div className={classes.mainDiv}>
          
          <Typography variant='h6' className={classes.Typo}>Sort By </Typography>
          <Typography variant='body1' className={classes.Typo1}>sort By </Typography>
          <FormControl className={classes.formControl}>
          
          <Select
            className={classes.Select}
            sx={{boxShadow:3,}}
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
