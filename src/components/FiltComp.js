import React, { Component } from "react";
import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import axios from "axios";
import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  typo1: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  typo: {
    display: "block",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  select: {
    height: 40,
    [theme.breakpoints.up("sm")]: {
      width: 140,
    },
    [theme.breakpoints.down("md")]: {
      width: 140,
    },
    [theme.breakpoints.up("md")]: {
      width: 170,
    },
    boxShadow: "1px 1px 1px 1px grey",
    backgroundColor: "ButtonFace",
  },
  div: {
    marginRight: 20,
  },
  formcontrol: {
    width: 220,
    backgroundColor: "ButtonFace",
    [theme.breakpoints.up("sm")]: {
      width: 140,
    },
    [theme.breakpoints.down("md")]: {
      width: 140,
    },

    [theme.breakpoints.up("md")]: {
      width: 170,
    },
  },
});

class FiltComp extends Component {
  componentDidUpdate(prevProps) {
    const {
      setNewsItem,
      filterValue,
      button,
      setPageLoader,
      search,
    } = this.props;
    if (prevProps.filterValue != this.props.filterValue) {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?q=${search}&country=${filterValue}&category=${button}&apiKey=${process.env.REACT_APP_API_KEY}`
        )
        .then((response) => {
          setNewsItem(response.data.articles);
          setPageLoader(false);
          console.log("filtered item");
        })
        .catch((err) => {
          console.log("error ", err);
        });
    }
  }

  handleChange = (e) => {
    console.log("handlechange....");
    const { setFilterValue, setPageLoader } = this.props;
    setFilterValue(e.target.value);
    setPageLoader(true);
  };

  render() {
    const { classes,filterValue} = this.props;
    
    return (
      <div className={classes.div}>
        <Typography variant="h6" className={classes.typo}>
          Choose the country
        </Typography>
        <Typography variant="body1" className={classes.typo1}>
          select country
        </Typography>
        <FormControl className={classes.formcontrol}>
          <Select
            value={filterValue}
            onChange={this.handleChange}
            className={classes.select}
          >
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">US</MenuItem>
            <MenuItem value="CN">China</MenuItem>
            <MenuItem value="RU">Russia</MenuItem>
            <MenuItem value="AU">Australia</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(FiltComp);
