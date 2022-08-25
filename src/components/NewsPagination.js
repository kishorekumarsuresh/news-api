import { Pagination } from '@mui/material'
import { Stack } from '@mui/system'
import React, { Component } from 'react'

 class NewsPagination extends Component {
  render() {
    const {count,setPage,setPageLoader} = this.props
    return (
      <div>
        <Stack spacing={2}>
            <Pagination sx={{marginBottom:5,marginTop:2}}count={count} color='primary' onChange={(e,value)=>{
              setPageLoader(true)
              setPage(value)
              setPageLoader(false)
              }}/>
        </Stack>
      </div>
    )
  }
}

export default NewsPagination
