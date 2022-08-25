import { FormControl, FormControlLabel, TextField, Radio, RadioGroup, Typography, Button, } from '@mui/material'
import React, {  useState ,} from 'react'
import { useNavigate } from 'react-router-dom'


function LoginPage({setLog,setLocal}) {

  const navig = useNavigate()
  const [userName,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [number,setNumber] = useState("")
  const [password,setPassword] = useState("")
  const [gender,setGender] = useState("")

  const [iuserName,setIUsername] = useState("")
  const [iemail,setIEmail] = useState("")
  const [inumber,setINumber] = useState("")
  const [ipassword,setIPassword] = useState("")

  const handleName=(e)=>{
    setUsername(e.target.value)
    setIUsername((/^[a-zA-Z+$]/.test(e.target.value) )? "":" Name should be characters only ")
    
  }

  const handleEmail=(e)=>{
    setEmail(e.target.value)
    setIEmail((/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(e.target.value))? "":"provide a valid  email")
  }

  const handleNumber=(e)=>{
    setNumber(e.target.value)
    setINumber(/^\d{10}$/.test(e.target.value)?"" : "Invalid mobile num" )
  }

  const handlePassword=(e)=>{
    setPassword(e.target.value)
    setIPassword(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(e.target.value)?"":
    "provide a strong password")
  }

  const handleGender=(e)=>{
    setGender(e.target.value)
  }

  const navigate=()=>{

    if((iuserName==="" && iemail==="" && inumber==="" && ipassword==="" )&&
    (userName!=="" && email!=="" && number!=="" && password!=="" && gender!=="")){
      setLocal(localStorage.setItem("token",'1111skishore1234'))
      setLog(false)
      navig("/home")
    } 
    else{
      alert("All neccessary fields must be provided")
    }
  }



  // const useStyles = makeStyles({

  //   s1:{
  //     display:'flex',
  //     flexDirection:'row',
      
  //   },
  //   s2:{
  //     height:180,
  //   },

  // })

  // const  classes = useStyles()


  return (

    
    <div style={{textAlign:'center', backgroundImage:"url('/img/news.jpeg')",marginBottom:5}}>
    {/* <img src="/img/news.jpeg"  height="90" width="120" alt="image" /> */}
      <Typography variant="h4" style={{border:'2px solid black',backgroundColor:'gold'}}>Login Page</Typography>
      <div style={{marginLeft:430, width:400 ,marginTop:15,backgroundColor:"lightgoldenrodyellow",marginBottom:15}}>
      <FormControl sx={{marginBottom:4}}>
        <FormControl sx={{marginTop:2}}>Username
        <TextField sx={{marginBottom:1,}}
        name="userName"
        value={userName}
        onChange={handleName}
        inputProps={{
          maxLength: 20,
        }}
        >
        </TextField >
        <p style={{color:'red'}}>{iuserName}</p>
        </FormControl>
        <FormControl>email-id
        <TextField sx={{marginBottom:1}}
        name="email"
        value={email}
        onChange={handleEmail}
        inputProps={{
          maxLength: 30,
        }}
        ></TextField>
        <p style={{color:'red'}}>{iemail}</p>
        </FormControl>
        <FormControl>Phone-number
        <TextField sx={{marginBottom:1}}
        inputProps={{
          maxLength: 10,
        }}
        name="number"
        value={number}
        onChange={handleNumber}
        ></TextField>
        <p style={{color:'red'}}>{inumber}</p>
        </FormControl>
        <FormControl>Create a password
        <TextField sx={{marginBottom:1}}
        name="password"
        value={password}
        onChange={handlePassword}
        ></TextField>
        <p style={{color:'red'}}>{ipassword}</p>
        </FormControl>
        
        <Typography variant='body1'>Select your Gender</Typography>
          <RadioGroup
            row
            value={gender}
            onChange={handleGender}
            name="gender"
            sx={{marginBottom:2}}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />

          </RadioGroup>

          <Button variant="contained"  color='success' sx={{width:300,marginTop:2}} onClick={navigate}> submit </Button>
      </FormControl>
      
        
     
      </div>
      {/* <Button variant="contained"  color='success' sx={{width:300,marginTop:2}} onClick={navigate}> submit </Button> */}
    </div>
  )
}

export default LoginPage
