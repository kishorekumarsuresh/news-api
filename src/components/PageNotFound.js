import { Typography } from "@mui/material";
import React, { Component } from "react";
import BlockIcon from "@mui/icons-material/Block";
import { withStyles } from "@mui/styles";
import PropTypes from 'prop-types'

const styles = {
  icon:{
    height: 50, width: 50
  }
}

class PageNotFound extends Component {
  render() {
    const {classes} =  this.props

    return (
      <div style={{ marginLeft: 520, marginTop: 10 }}>
        <div style={{ display: 'flex', alignItems: "center" }}>
          <Typography variant="h3">
            <BlockIcon className={classes.icon}  />
            404!
          </Typography>
        </div>
        <Typography variant="h4">Page Not Found error..</Typography>
      </div>
    );
  }
}

PageNotFound.propTypes={
  classes:PropTypes.object.isRequired

}


export default withStyles(styles) (PageNotFound);
