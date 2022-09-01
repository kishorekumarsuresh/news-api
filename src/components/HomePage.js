import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DisplayNews from './DisplayNews'
import Filters from './Filters'
import Categories from './Categories'
import Searching from './Searching'
import Sorting from './Sorting'
import Language from './Language'
import Timing from './Timing'
import { CircularProgress, Typography, Backdrop } from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({

  search: {
    display: 'none',
  },
  div1: {
    backgroundColor: 'khaki',
  },
  div2: {
    display: 'flex',
    justifyContent: 'space-between', marginRight: 20,
    backgroundColor: 'khaki', alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      display: 'grid',
    }
  },
  div3: {
    display: 'flex', justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'space-evenly',
      marginRight: 4
    }
  },
  load:{
    marginLeft: '3px !important' 
  }


}))


function HomePage() {

  const [newsItem, setNewsItem] = useState([])
  const [filterValue, setFilterValue] = useState("")
  const [button, setButton] = useState("")
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("")
  const [lang, setLang] = useState("")
  const [fromDate, setFromDate] = useState("")
  const [toDate, setToDate] = useState("")
  const [loading, setLoading] = useState(true)
  const [apiCall, setApiCall] = useState(false)
  const [pageLoader, setPageLoader] = useState(false)

  //const apiKey = process.env.REACT_APP_API_KEY;


  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`)

      .then((resp) => {
        console.log("response", resp.data.articles)
        setNewsItem(resp.data.articles)
        setLoading(false)
      })
      .catch((err) => {
        console.log("error", err)
        setApiCall(true)
      })

  }, [])




  const classes = useStyles();

  return (
    <>
      <Backdrop
        sx={{
          color: '#fff',
        }}
        open={apiCall}
        onClick={() => { setApiCall(false) }}>
        <Typography variant='h3'>
          Invalid API CALL...!
        </Typography>
      </Backdrop>

      <div>
        {loading ?
          <div style={{ display: 'flex', marginLeft: 600, marginTop: 50 }}>
            <CircularProgress color='success' />
            <Typography variant="h4" className={classes.load}> Loading...</Typography>
          </div>
          :
          <div>
            <Categories sort={sort} lang={lang} search={search} button={button} setPageLoader={setPageLoader} setButton={setButton} filterValue={filterValue} setNewsItem={setNewsItem} />

            <div className={classes.div1} >
              <div className={classes.div2} >
                <Searching sort={sort} lang={lang} filterValue={filterValue} fromDate={fromDate} toDate={toDate}
                  button={button} className={classes.search} setPageLoader={setPageLoader} search={search} setSearch={setSearch} setNewsItem={setNewsItem} />
                <Timing lang={lang} button={button} setPageLoader={setPageLoader} filterValue={filterValue} fromDate={fromDate}
                  sort={sort} search={search} setFromDate={setFromDate} toDate={toDate} setToDate={setToDate} setNewsItem={setNewsItem} />
              </div>

              <br />
              <div className={classes.div3}>
                <Sorting search={search} filterValue={filterValue} button={button} setPageLoader={setPageLoader}
                  fromDate={fromDate} toDate={toDate} sort={sort} setSort={setSort} setNewsItem={setNewsItem} />
                <Language search={search} filterValue={filterValue} button={button} setPageLoader={setPageLoader} lang={lang} setLang={setLang} setNewsItem={setNewsItem} />
                <Filters search={search} setPageLoader={setPageLoader} button={button} filterValue={filterValue} setFilterValue={setFilterValue} setNewsItem={setNewsItem} />
              </div>

              <br />
              <DisplayNews loading={loading} newsItem={newsItem} 
                setPageLoader={setPageLoader} pageLoader={pageLoader}
                
              />
            </div>
          </div>

        }


      </div>

    </>

  )
}

export default HomePage
