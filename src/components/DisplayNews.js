import React, { useEffect, useState } from 'react'
import  { Button, Card, CardActions, CardContent, CardMedia, Typography, Box, CircularProgress } from '@mui/material'
import NewsPagination from './NewsPagination';
//import { useNavigate } from 'react-router-dom';

function DisplayNews({newsItem,setDescription,setPageLoader,setLog,pageLoader}) {

  const [page,setPage] = useState(1);
  //const [loading,setLoading] = useState(false)
  const newsPerPage = 4 ;
  const pagesCount = Math.ceil(newsItem.length/newsPerPage);
  const lastPage = page*newsPerPage;
  const firstPage= lastPage-newsPerPage;
  const finalNews = newsItem.slice(firstPage,lastPage)
  

  
  return (
    <div>
      {

        pageLoader?
        
        <div style={{display:'flex',marginLeft:600,marginTop:50}}>
      <CircularProgress color='success'  />
      <Typography variant="h4" sx={{marginLeft:3}}> Loading...</Typography>
        </div>
        
        :
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
      {   
        newsItem[0] ?
        (finalNews.map((news,id)=>(
          <Card 
          sx={{
            mr: 2,
            mb: 2,
            height: 440,
            width: 520,
            alignItems: "center",
            backgroundColor: "ButtonFace",
            "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
          }}
          key={id}
          > 
          <Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'center'}}>

          
            <CardMedia>
              { news.urlToImage ?
              
              <img src={news.urlToImage} height='230px' width='520px' alt='picture'/> :
              <img src="/img/news.jpeg" height='230px' width='520px' alt='Photo' />
            }

            </CardMedia>

          <CardContent>
            <strong style={{
              display:'block',
              maxWidth:440,
              whiteSpace:'nowrap',
              overflow:'hidden',
              textOverflow:'ellipsis'
            }}>{news.title}</strong>
            <br/>
            
           <Typography varaint="h3" sx={{display:'block',
              maxWidth:440,
              whiteSpace:'nowrap',
              overflow:'hidden',
              textOverflow:'ellipsis'}}> - {news.author}</Typography>
           <Typography varaint="h3"> <strong> publishedAt:</strong>{news.publishedAt}</Typography>
            
          </CardContent>
          <CardActions >
            <a href={news.url} ><Button variant='outlined' color='primary' onClick={()=>{setLog(false)}} > Read Full article </Button></a>
          </CardActions>

          </Box>
          </Card>
        ))
        ) :

        <Typography>
          No items found
        </Typography>
      }
   
      <NewsPagination setPageLoader={setPageLoader} count={pagesCount} setPage={setPage}/>
      </div>
    }
  </div>
  )
}

export default DisplayNews

