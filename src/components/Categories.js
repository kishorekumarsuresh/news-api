import React, { useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Typography,
  Select,
  FormControl,
  Grid,
  InputLabel,
} from "@mui/material";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  Button: {
    marginRight: "9px !important",
    "&:hover": {
      transform: "scale3d(1.05, 1.05, 1) ",
      backgroundColor: "#fff !important",
      color: "#3c52b2 !important",
    },
  },
  but: {
    marginRight: "9px !important",
    "&:hover": {
      transform: "scale3d(1.05, 1.05, 1) !important",
      backgroundColor: "#fff !important",
      color: "#3c52b2 !important",
    },
  },
  box: {
    display: "flex",
  },
  select: {
    width: 180,
    backgroundColor: "white",
    boxShadow: "1px 1px 1px 1px black",
    height: 40,
  },
  typ: {
    marginRight: "2px !important",
  },
}));

function Categories({
  button,
  filterValue,
  setNewsItem,
  setButton,
  setPageLoader,
  search,
  lang,
  sort,
}) {
  const classes = useStyles();
  // const isSmall = useMediaQuery("(max-width: 900px)");
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const [formValue, setFormValue] = useState("");

  const buttonHandler = (e) => {
    setButton(e.target.name);
    console.log(e.target.name);
    setPageLoader(true);

    axios
      .get(
        `https://newsapi.org/v2/top-headlines?q=${search}&language=${lang}&country=${filterValue}&category=${button}&sortBy=${sort}&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setNewsItem(response.data.articles);
        setPageLoader(false);
        console.log("categorical");
      })
      .catch((err) => {
        console.log("fail in categorical", err);
      });
  };

  const handleForm = (e) => {
    setFormValue(e.target.value);

    //console.log(e.target.name)
    setPageLoader(true);

    axios
      .get(
        `https://newsapi.org/v2/top-headlines?q=${search}&language=${lang}&country=${filterValue}&category=${e.target.value}&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setNewsItem(response.data.articles);
        setPageLoader(false);
        console.log("categorical");
      })
      .catch((err) => {
        console.log("fail in categorical", err);
      });
  };
  return (
    <div>
      <AppBar
        position="static"
        style={{ backgroundColor: "brown", height: 60 }}
      >
        <Toolbar>
          {/* <Typography variant='h6' sx={{marginRight:2}}>Categories: </Typography> */}
          <Typography variant="h6" className={classes.typ}>
            {" "}
            Categories:{" "}
          </Typography>
          <FormControl>
            {isSmall && (
              <Select
                value={formValue}
                onChange={handleForm}
                className={classes.select}
              >
                <MenuItem value="business">business</MenuItem>
                <MenuItem value="entertainment">entertainment</MenuItem>
                <MenuItem value="sports">sports</MenuItem>
              </Select>
            )}
          </FormControl>

          {!isSmall && (
            <Box className={classes.box}>
              <Button
                className={classes.Button}
                variant="contained"
                name="business"
                onClick={buttonHandler}
              >
                business
              </Button>

              <Button
                className={classes.Button}
                variant="contained"
                name="entertainment"
                onClick={buttonHandler}
              >
                entertainment
              </Button>

              <Button
                className={classes.Button}
                variant="contained"
                name="general"
                onClick={buttonHandler}
              >
                general
              </Button>

              <Button
                className={classes.Button}
                variant="contained"
                name="health"
                onClick={buttonHandler}
              >
                health
              </Button>

              <Button
                className={classes.Button}
                variant="contained"
                name="science"
                onClick={buttonHandler}
              >
                science
              </Button>

              <Button
                className={classes.Button}
                variant="contained"
                name="sports"
                onClick={buttonHandler}
              >
                sports
              </Button>

              <Button
                classes={{
                  root: classes.but,
                }}
                variant="contained"
                name="technology"
                onClick={buttonHandler}
              >
                technology
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Categories;
