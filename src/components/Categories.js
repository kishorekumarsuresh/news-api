import React, { useState } from 'react'
import { Box ,Button, MenuItem, Typography, Select, FormControl, Grid, InputLabel} from '@mui/material'
import axios from 'axios'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const useStyles = makeStyles((theme)=>({

  b1:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
  },
  b2:{
    mr:2,
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" , 
                 backgroundColor: '#fff',
                 color: '#3c52b2',

   },
   
  box:{
    display:"none" ,justifyContent:"space-between",
    [theme.breakpoints.down('')]:{
      display:'none'
    }
  },
  select:{
    
  },
  Button:{
    display:'block',
    [theme.breakpoints.down('sm')]:{
      display:'none'
    }
  }
  }
}))



function Categories({button,filterValue,setNewsItem,setButton,setPageLoader}) {


    
    const classes = useStyles()
    const isSmall = useMediaQuery("(max-width: 900px)");
  
    const [formValue,setFormValue] = useState("")

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
      
        
    }


    const handleForm = (e) =>{
      setFormValue(e.target.value)

      //console.log(e.target.name)
        setPageLoader(true)
        
        axios.get(`https://newsapi.org/v2/top-headlines?country=${filterValue}&category=${e.target.value}&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then((response)=>{
            setNewsItem(response.data.articles)
            setPageLoader(false)
            console.log("categorical");
            
        })
        .catch((err)=>{
            console.log("fail in categorical",err)
        })

      
    }
  return (
    <div>
      

      <AppBar position="static" style={{ backgroundColor: 'brown',height:60 }}>
        <Toolbar>

          {/* <Typography variant='h6' sx={{marginRight:2}}>Categories: </Typography> */}
          <Typography variant='h6' sx={{marginRight:2}}> Categories: </Typography>
          <FormControl>
            
            {
            isSmall &&
             <Select sx={{width:180,backgroundColor:'white',boxShadow:3,height:40}}
            value={formValue}
            onChange={handleForm}
            className={classes.select}
            >
              <MenuItem value="business">business</MenuItem>
              <MenuItem value="entertainment">entertainment</MenuItem>
              <MenuItem value="sports">sports</MenuItem>
            </Select>
          }
          </FormControl>
         
          
          {
            !(isSmall) &&
            <Box sx={{display:'flex'}} className={classes.box} >            
              <Button  className={classes.Button} sx={{mr:2,"&:hover": { transform: "scale3d(1.05, 1.05, 1)" , backgroundColor: '#fff',
      color: '#3c52b2',},}}variant="contained" name="business" onClick={buttonHandler}>business</Button>
            
            <Button  className={classes.Button} sx={{mr:2,"&:hover": { transform: "scale3d(1.05, 1.05, 1)" , backgroundColor: '#fff',
      color: '#3c52b2',},}} variant="contained" name="entertainment" onClick={buttonHandler}>entertainment</Button>

            <Button  className={classes.Button} sx={{mr:2,"&:hover": { transform: "scale3d(1.05, 1.05, 1)" , backgroundColor: '#fff',
      color: '#3c52b2',},}} variant="contained" name="general" onClick={buttonHandler}>general</Button>

            <Button  className={classes.Button} sx={{mr:2,"&:hover": { transform: "scale3d(1.05, 1.05, 1)" , backgroundColor: '#fff',
      color: '#3c52b2',},}} variant="contained" name="health" onClick={buttonHandler}>health</Button>

            <Button className={classes.Button} sx={{mr:2,"&:hover": { transform: "scale3d(1.05, 1.05, 1)" , backgroundColor: '#fff',
      color: '#3c52b2',},}} variant="contained" name="science" onClick={buttonHandler}>science</Button>

            <Button className={classes.Button} sx={{mr:2,"&:hover": { transform: "scale3d(1.05, 1.05, 1)" , backgroundColor: '#fff',
      color: '#3c52b2',},}} variant="contained" name="sports" onClick={buttonHandler}>sports</Button>

            <Button className={classes.Button} sx={{mr:2,"&:hover": { transform: "scale3d(1.05, 1.05, 1)" , backgroundColor: '#fff',
      color: '#3c52b2'},}} variant="contained" name="technology" onClick={buttonHandler}>technology</Button>
            </Box>


          }  
            </Toolbar>
      </AppBar>

      {/* </Box> */}
        
    </div>
  )
}

export default Categories
