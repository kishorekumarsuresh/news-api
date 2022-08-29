// import React from 'react'
// import { Typography } from '@mui/material'
// import { makeStyles } from '@mui/styles';




// const useStyles = makeStyles(theme => ({
//     root: {
//       height: '100vh',
//       backgroundColor: 'blue',
//       [theme.breakpoints.up('sm')]: {
//         backgroundColor: 'red',
//       },
//       [theme.breakpoints.up('md')]: {
//         backgroundColor: 'green',
//       },
//       [theme.breakpoints.up('lg')]: {
//         backgroundColor: 'orange',
//       },
//       [theme.breakpoints.up('xl')]: {
//         backgroundColor: 'cyan',
//       },
//     },
//   }));


// function Breakpoints() {

//     const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       Breakpoints

//       <Typography>
//         The background will change color based on the screen size.
//       </Typography>
//     </div>
//   )
// }

// export default Breakpoints





// import { Typography, useTheme, useMediaQuery } from '@material-ui/core';
// import { makeStyles } from '@mui/styles';
// const useStyles = makeStyles(theme => ({
//   root: {
//     height: '100vh',
//     backgroundColor: 'blue',
//     [theme.breakpoints.up('sm')]: {
//       backgroundColor: 'red',
//     },
//     [theme.breakpoints.up('md')]: {
//       backgroundColor: 'green',
//     },
//     [theme.breakpoints.up('lg')]: {
//       backgroundColor: 'orange',
//     },
//     [theme.breakpoints.up('xl')]: {
//       backgroundColor: 'cyan',
//     },
//   },
// }));

// const Breakpoints = () => {
//   const classes = useStyles();
//   const theme = useTheme();
//   const showText = useMediaQuery(theme.breakpoints.up('sm'));

//   return (
//     <div className={classes.root}>
//       <Typography>
//         The background will change color based on the screen size.
//       </Typography>
//       {showText && <Typography variant="h1">Appear when 600px and above</Typography>}
//     </div>
//   );
// };

// export default Breakpoints;



import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { red, green, blue } from '@mui/material/colors';

const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    backgroundColor: red[500],
  },
  [theme.breakpoints.up('md')]: {
    backgroundColor: blue[500],
  },
  [theme.breakpoints.up('lg')]: {
    backgroundColor: green[500],
  },
}));

export default function Breakpoints() {
  return (
    <Root>
      <Typography>down(md): red</Typography>
      <Typography>up(md): blue</Typography>
      <Typography>up(lg): green</Typography>
    </Root>
  );
}
