import { TextField } from '@mui/material'
import axios from 'axios'
import React, {useCallback} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme)=>({

  search:{
    marginTop:7,
    marginLeft:10
  },
 
  searchText:{
    width:400,
    backgroundColor:'ButtonFace',
    // [theme.breakpoints.down('sm')]:{
    //   width:400
    // },
    
    [theme.breakpoints.down('md')]:{
      width:300,
      marginLeft:90
    },
    [theme.breakpoints.down('sm')]:{
      width:180,
      marginLeft:20
    },
   
  }

}))

function Searching({search,setSearch,setNewsItem,setPageLoader}) {

    const debounce = (func) => {
      let timer;
      return function (...args){
        const context = this;
        if (timer) clearTimeout(timer);
        timer =setTimeout(()=>{
          timer = null;
          func.apply(context,args);
        },500)
      }
    }
    
    const handleSearch = (val) =>{


        if (val!==""){
          setSearch(val)
          setPageLoader(true)
          axios.get(`https://newsapi.org/v2/everything?q=${val}&apiKey=${process.env.REACT_APP_API_KEY}`)
          .then(response=>{
              setNewsItem(response.data.articles)
              setPageLoader(false)
              console.log("search success");
          })
          .catch(err=>{
              console.log("unsuccessful search")
          })
        }
        else{
          console.log('nothing')
        }
       

     
    }

    const classes = useStyles() 

    const optimizedFn = useCallback(debounce(handleSearch),[])
  return (

    <div className={classes.search} >
      <TextField className={classes.searchText} 
      sx={{boxShadow:3}}
      // value={search}
      placeholder="Search"
      onChange={(e)=>optimizedFn(e.target.value)}></TextField>
      
    </div>
  )
}

export default Searching
