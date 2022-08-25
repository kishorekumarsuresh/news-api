import React from 'react'
import { Box ,Button, Typography} from '@mui/material'
import axios from 'axios'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({

  b1:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
  },
  b2:{
    
  }
})

function Categories({filterValue,setNewsItem,setButton,setPageLoader}) {


    
    const classes = useStyles()

    const buttonHandler = (e) => {
      
        setButton(e.target.name)
        console.log(e.target.name)
        setPageLoader(true)
        
        axios.get(`https://newsapi.org/v2/top-headlines?country=${filterValue}&category=${e.target.name}&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then((response)=>{
            setNewsItem(response.data.articles)
            setPageLoader(false)
            console.log("categorical");
            
        })
        .catch((err)=>{
            console.log("fail in categorical",err)
        })
      //   .finally(()=>{
      //       setLoading(false)
      //   })
        
    }
  return (
    <div>
      
      <Box sx={{display:"flex" ,justifyContent:"space-between"}}>

      <AppBar position="static" style={{ backgroundColor: 'brown',height:60 }}>
        <Toolbar>

          <Typography variant='h6'>Categories: </Typography>
            <Button sx={{mr:2,"&:hover": { transform: "scale3d(1.05, 1.05, 1)" , backgroundColor: '#fff',
      color: '#3c52b2',},}}variant="contained" name="business" onClick={buttonHandler}>business</Button>
            
            <Button sx={{mr:2,"&:hover": { transform: "scale3d(1.05, 1.05, 1)" , backgroundColor: '#fff',
      color: '#3c52b2',},}} variant="contained" name="entertainment" onClick={buttonHandler}>entertainment</Button>

            <Button sx={{mr:2,"&:hover": { transform: "scale3d(1.05, 1.05, 1)" , backgroundColor: '#fff',
      color: '#3c52b2',},}} variant="contained" name="general" onClick={buttonHandler}>general</Button>

            <Button sx={{mr:2,"&:hover": { transform: "scale3d(1.05, 1.05, 1)" , backgroundColor: '#fff',
      color: '#3c52b2',},}} variant="contained" name="health" onClick={buttonHandler}>health</Button>

            <Button sx={{mr:2,"&:hover": { transform: "scale3d(1.05, 1.05, 1)" , backgroundColor: '#fff',
      color: '#3c52b2',},}} variant="contained" name="science" onClick={buttonHandler}>science</Button>

            <Button sx={{mr:2,"&:hover": { transform: "scale3d(1.05, 1.05, 1)" , backgroundColor: '#fff',
      color: '#3c52b2',},}} variant="contained" name="sports" onClick={buttonHandler}>sports</Button>

            <Button sx={{mr:2,"&:hover": { transform: "scale3d(1.05, 1.05, 1)" , backgroundColor: '#fff',
      color: '#3c52b2',},}} variant="contained" name="technology" onClick={buttonHandler}>technology</Button>
            </Toolbar>
      </AppBar>

      </Box>
        
    </div>
  )
}

export default Categories
