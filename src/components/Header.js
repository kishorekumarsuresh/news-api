import React, { Component } from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { withStyles } from "@mui/styles";
import NewspaperIcon from '@mui/icons-material/Newspaper';

const styles = {

  st1: {
    backgroundColor: "brown !important",
    height: '60px !important'
  },
  icon:{
    height: '40px !important', width: '90px !important'

  },
  typ:{
    flexGrow: 1, width: 200,
  }

}

class Header extends Component {

  handleSignOut = () => {
    this.props.setLocal(localStorage.removeItem('token'))
  }

  render() {
    const { classes } = this.props
    const { log, setLog, local, setLocal } = this.props
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className={classes.st1} >
            <Toolbar>

              <Typography variant="h3" className={classes.typ} >
                <NewspaperIcon  className={classes.icon}  />  News 11
              </Typography>

              {(localStorage.getItem('token')) ?

                <a href="/" style={{ color: 'white' }}><Button color="inherit"
                  onClick={this.handleSignOut} variant='outlined' >Sign out</Button></a> :
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