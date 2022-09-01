import { TextField } from '@mui/material'
import axios from 'axios'
import React from 'react'
//import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import { debounce } from 'lodash'


const useStyles = makeStyles((theme) => ({

  search: {
    marginTop: 7,
    marginLeft: 10
  },

  searchText: {
    width: 400,
    backgroundColor: 'ButtonFace',
    boxShadow :'1px 1px 1px 1px grey',
   
    [theme.breakpoints.down('md')]: {
      width: 300,
      marginLeft: 90
    },
    [theme.breakpoints.down('sm')]: {
      width: 180,
      marginLeft: 20
    },

  }

}))

function Searching({ search, setSearch, setNewsItem, setPageLoader, button, filterValue, lang, sort, fromDate, toDate }) {

  const handleSearch = debounce((e) => {


    if (e.target.value !== "") {
      setSearch(e.target.value)
      setPageLoader(true)
      axios.get(`https://newsapi.org/v2/top-headlines?q=${e.target.value}&lang=${lang}&country=${filterValue}&category=${button}&from=${fromDate}&to=${toDate}&sortby=${sort}&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(response => {
          setNewsItem(response.data.articles)
          setPageLoader(false)
          console.log("search success");
        })
        .catch(err => {
          console.log("unsuccessful search")
        })
    }
    else {
      console.log('nothing')
    }



  }, 500)

  const classes = useStyles()

  
  return (

    <div className={classes.search} >
      <TextField className={classes.searchText}
        placeholder="Search"
        onChange={handleSearch}></TextField>

    </div>
  )
}

export default Searching
