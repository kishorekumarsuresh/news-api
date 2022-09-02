import { FormControl,Typography, MenuItem, Select} from '@mui/material'
import axios from 'axios'
import React from 'react'
import { makeStyles } from '@mui/styles';
//import { shadows } from '@mui/system';

const useStyles = makeStyles((theme)=>({

  mainDiv:{
    //display:'grid',
    alignItems:'center',marginLeft:'13px',
    

    [theme.breakpoints.down('sm')]:{
      display:'none'
    },
    [theme.breakpoints.up('md')]:{
      display:'grid'
    },
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
    boxShadow:'1px 1px 1px 1px grey'
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

function Sorting({sort,setSort,setNewsItem,setPageLoader,fromDate,toDate,search}) {

  
    const handleSorting = (e) => {
         
        setSort(e.target.value)
        setPageLoader(true)
        if (search==="" && fromDate ==="" && toDate===""){
          axios.get(`https://newsapi.org/v2/everything?q=apple&from=30-08-2022&to=30-08-2022&sortBy=${sort}&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(response=>{
            setNewsItem(response.data.articles)
            setPageLoader(false)
            console.log("success sorting")
        })
        .catch(err=>{
            console.log(err)
        })
        }

        else if (search===""){
          axios.get(`https://newsapi.org/v2/everything?q=apple&from=${fromDate}&to=${toDate}&sortBy=${sort}&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(response=>{
            setNewsItem(response.data.articles)
            setPageLoader(false)
            console.log("success sorting")
        })
        .catch(err=>{
            console.log(err)
        })
        }
        else{
          axios.get(`https://newsapi.org/v2/everything?q=${search}&from=${fromDate}&to=${toDate}&sortBy=${sort}&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(response=>{
            setNewsItem(response.data.articles)
            setPageLoader(false)
            console.log("success sorting")
        })
        .catch(err=>{
            console.log(err)
        })
        }
        
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
