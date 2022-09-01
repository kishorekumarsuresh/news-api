import React, { useEffect, useState,useContext } from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Box, CircularProgress } from '@mui/material'
import NewsPagination from './NewsPagination';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { ValueContext } from './ValueContext';


const useStyles = makeStyles((theme) => ({

  div2: {
    display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'grid'
    },
    [theme.breakpoints.up('md')]: {
      display: 'grid'
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'
    },

  },
  card: {
    marginRight: 8,
    marginBottom: 8,
    height: 440,
    width: 520,
    [theme.breakpoints.down('sm')]: {
      width: 300,
      height: 220,
      marginLeft: 22,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: 500,
      height: 270,
      marginLeft: 22,
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start'
    },
    backgroundColor: "ButtonFace",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
  },
  img1: {
    height: '230px', width: '520px', alt: 'picture',
    [theme.breakpoints.down('sm')]: {
      width: 300,
      height: 90
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: 500,
      height: 130,
    },
  },
  img2: {
    height: '230px', width: '520px', alt: 'Photo',
    [theme.breakpoints.down('sm')]: {
      width: 300,
      height: 90
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: 500,
      height: 130,
    
    },
  },
  title: {
    display: 'block',
    maxWidth: 440,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  author: {

    display: 'block',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    maxWidth: 440,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  publishedAt: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
  },
  but1: {
    '&:hover': {
      backgroundColor: 'white !important',
      color: '#3c52b2 !important'
    },
  },
  but2: {
    marginLeft: '20px !important' , backgroundColor: 'red !important',
    '&:hover': {
      backgroundColor: 'white !important',
      color: '#3c52b2 !important',

    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
      size: 'small',
    },
  },




}))

function DisplayNews({ newsItem, setPageLoader,  pageLoader, }) {

  const [page, setPage] = useState(1);
  const navig = useNavigate();

  const {setTitle,setLog,setDescription,setContent,setImageUrl,setUrl,setPublished} = useContext(ValueContext);

  const newsPerPage = 4;
  const pagesCount = Math.ceil(newsItem.length / newsPerPage);
  const lastPage = page * newsPerPage;
  const firstPage = lastPage - newsPerPage;
  const finalNews = newsItem.slice(firstPage, lastPage)

  const handleFullPage = (tit, des, img, url, pub, con) => {

    setTitle(tit)
    setDescription(des)
    setImageUrl(img)
    setUrl(url)
    setPublished(pub)
    setContent(con)
    navig("/fullnews")
  
  }

  const classes = useStyles();

  return (
    <div>
      {

        pageLoader ?

          <div style={{ display: 'flex', marginLeft: 600, marginTop: 50 }}>
            <CircularProgress color='success' />
            <Typography variant="h4" sx={{ marginLeft: 3 }}> Loading...</Typography>
          </div>

          :


          <div className={classes.div2} >
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {

                newsItem[0] ?
                  (finalNews.map((news, id) => (
                    <Card
                      className={classes.card}
                      key={id}
                    >
                      

                      <CardMedia>
                        {news.urlToImage ?

                          <img className={classes.img1} src={news.urlToImage} /> :
                          <img className={classes.img2} src="/img/news.jpeg" />
                        }

                      </CardMedia>

                      <CardContent>
                        <strong
                          className={classes.title}>{news.title}</strong>
                        <br />

                        <Typography varaint="h3"
                          className={classes.author}
                        > - {news.author}</Typography>
                        <Typography varaint="h3"
                          className={classes.publishedAt}> <strong> publishedAt:</strong>{news.publishedAt}</Typography>

                      </CardContent>
                      <CardActions className={classes.Action} >
                        <a href={news.url} ><Button variant='contained' className={classes.but1}
                          
                          color='primary' onClick={() => { setLog(false) }} > Full News </Button></a>

                        <Button className={classes.but2}
                          color='secondary' variant="contained" onClick={() => {
                            handleFullPage(news.title, news.description, news.urlToImage, news.url,
                              news.publishedAt, news.content)
                          }}>view details</Button>
                      </CardActions>

                      
                    </Card>
                  ))
                  ) :

                  <Typography>
                    No items found
                  </Typography>
              }
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <NewsPagination setPageLoader={setPageLoader} count={pagesCount} setPage={setPage} />
            </div>
          </div>

      }
    </div>
  )
}

export default DisplayNews

