import { Typography } from "@mui/material";
import React, { Component } from "react";
import BlockIcon from "@mui/icons-material/Block";

class PageNotFound extends Component {
  render() {
    return (
      <div  style={{marginLeft:520,marginTop:10}}>
        <div style={{display:'flex',alignItems:"center"}}>
        <Typography variant="h3">
        <BlockIcon sx={{height:50,width:50}}/>
        404!
        </Typography>
        </div>
        <Typography variant="h4">Page Not Found error..</Typography>
      </div>
    );
  }
}

export default PageNotFound;
