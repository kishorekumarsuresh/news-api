import {
  FormControl,
  FormControlLabel,
  TextField,
  Radio,
  RadioGroup,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
//import { styled } from '@mui/material/styles';
//import { red, green, blue } from '@mui/material/colors';

// const Root = styled('div')(({theme}) => ({

//   [theme.breakpoints.down('md')]:{
//     backgroundColor: red[500],
//   },
//   [theme.breakpoints.up('md')]: {
//     backgroundColor: blue[500],
//   },
//   [theme.breakpoints.up('lg')]: {
//     backgroundColor: green[500],
//   },

// }))

const useStyles = makeStyles((theme) => ({
  l1: {
    display: "block",
    border: "2px solid black",
    borderRadius: "22px",
    backgroundColor: "gold",
    width: 1282,
    paddingLeft: 7,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  l2: {
    marginBottom: "19px !important",
    paddingBottom: "8px !important",
    // [theme.breakpoints.down("xs")]:{
    //   width:200
    // },
  },
  l3: {
    color: "red",
  },
  l4: {
    marginLeft: 400,
    width: 400,
    marginTop: 15,
    backgroundColor: "lightgoldenrodyellow",
    marginBottom: 15,
    borderRadius: "12px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 22,
      marginRight: 22,
      marginBottom: 10,
      marginTop: 4,
      backgroundColor: "lightgoldenrodyellow",
      height: 650,
    },
  },
  l5: {
    display: "flex",
    textAlign: "center",
    backgroundImage: "url('/img/news.jpeg')",
    marginBottom: 5,
  },
  l6: {
    display: "flex",
    flexDirection: "column",
  },
  ml1: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      width: 500,
      backgroundColor: "yellow",
    },
  },
  formcontrol: {
    marginBottom: "12px !important",
  },

  div1: {
    [theme.breakpoints.down("xs")]: {
      // width:100,
      //height:200,
      marginRight: 200,
    },
  },
  f1: {
    marginTop: "2px !important",
    marginBottom: "4px !important",
  },
  rad: {
    marginBottom: 2,
  },
  b1: {
    width: 300,
    marginTop: "2px",
    marginBottom: "2px",
  },
}));

function LoginPage({ setLog }) {
  const navig = useNavigate();
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const [iuserName, setIUsername] = useState("");
  const [iemail, setIEmail] = useState("");
  const [inumber, setINumber] = useState("");
  const [ipassword, setIPassword] = useState("");

  const handleName = (e) => {
    setUsername(e.target.value);
    setIUsername(
      (/^[a-zA-Z]+$/.test(e.target.value) && e.target.value.length > 3) ||
        e.target.value.length === 20
        ? ""
        : " Name should be 3-20 alphabets only "
    );
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setIEmail(
      /^[a-z0-9._%+-]+@[a-z.-]+\.[a-z]{2,}$/.test(e.target.value)
        ? ""
        : "provide a valid email"
    );
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
    setINumber(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(e.target.value) ? "" : "Invalid mobile number");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setIPassword(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
        e.target.value
      )
        ? ""
        : "create a strong password"
    );
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const navigate = () => {
    if (
      iuserName === "" &&
      iemail === "" &&
      inumber === "" &&
      ipassword === "" &&
      userName !== "" &&
      email !== "" &&
      number !== "" &&
      password !== "" &&
      gender !== ""
    ) {
      localStorage.setItem("token", "1111skishore1234");
      //console.log("local",local)
      setLog(false);
      navig("/home");
    } else {
      alert("All fields must be filled");
    }
  };

  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.l5}>
        <Typography variant="h4" className={classes.l1}>
          {" "}
          Login Page
        </Typography>
        <Typography variant="h6" className={classes.ml1}>
          {" "}
          Login Page
        </Typography>
        <div className={classes.l4}>
          <Grid item className={classes.grid1}>
            <div className={classes.div1}>
              <FormControl className={classes.formcontrol}>
                <FormControl classes={classes.f1}>
                  Username
                  <TextField
                    className={classes.l2}
                    type="text"
                    helperText={iuserName}
                    name="userName"
                    value={userName}
                    onChange={handleName}
                    inputProps={{
                      maxLength: 21,
                    }}
                  ></TextField>
                </FormControl>
                <FormControl className={classes.f1}>
                  email-id
                  <TextField
                    className={classes.l2}
                    name="email"
                    helperText={iemail}
                    value={email}
                    onChange={handleEmail}
                    inputProps={{
                      maxLength: 30,
                    }}
                  ></TextField>
                </FormControl>
                <FormControl className={classes.f1}>
                  Phone-number
                  <TextField
                    className={classes.l2}
                    inputProps={{
                      maxLength: 15,
                    }}
                    name="number"
                    helperText={inumber}
                    value={number}
                    onChange={handleNumber}
                  ></TextField>
                </FormControl>
                <FormControl className={classes.f1}>
                  Create a password
                  <TextField
                    className={classes.l2}
                    type="password"
                    helperText={ipassword}
                    name="password"
                    value={password}
                    onChange={handlePassword}
                  ></TextField>
                </FormControl>

                <Typography variant="body1">Select your Gender</Typography>
                <RadioGroup
                  row
                  value={gender}
                  onChange={handleGender}
                  name="gender"
                  className={classes.rad}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>

                <Button
                  variant="contained"
                  color="success"
                  className={classes.b1}
                  sx={{}}
                  onClick={navigate}
                >
                  {" "}
                  submit{" "}
                </Button>
              </FormControl>
            </div>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}

export default LoginPage;
