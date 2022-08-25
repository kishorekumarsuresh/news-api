import React, { Component } from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { withStyles } from "@mui/styles";
import NewspaperIcon from '@mui/icons-material/Newspaper';

const styles = {

    st1 :{
        backgroundColor: "green",
    }
}

class Header extends Component {

  handleSignOut = () =>{
    this.props.setLocal(localStorage.removeItem('token'))
  }

  render() {
    const { classes } = this.props
    const {log,setLog,local,setLocal} = this.props
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={classes.st1} style={{ backgroundColor: 'brown',height:60 }}>
        <Toolbar>
            
          <Typography variant="h3"  sx={{ flexGrow: 1 ,width:20,}}>
          <NewspaperIcon  sx={{height:40,width:70}}/>  News 11 
          </Typography>
            
          {(localStorage.getItem('token')) ?

          <a href="/" style={{color:'white'}}><Button color="inherit" 
          onClick={this.handleSignOut} variant='outlined' >Sign out</Button></a>:
          <Button color="inherit" variant='outlined' >Sign in</Button>
            
          }
        </Toolbar>
        </AppBar>
        </Box>
      </div>
    )
  }
}

export default withStyles(styles)(Header) 