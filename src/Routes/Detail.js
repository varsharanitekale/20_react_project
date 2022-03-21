import { CircularProgress, Container } from '@mui/material';
import { Breadcrumbs } from '@mui/material/';
import { Link } from '@mui/material';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { Stack } from '@mui/material';
import { Chip } from '@mui/material';
import { Rating } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import Search from '@mui/icons-material/Search';
import { keys } from '@mui/system';
import React, { useEffect, useState } from 'react'


const Detail = () => {
  const {id}=useParams();
  const [details, setDetails]=useState({})

  const fetch_fn =async ()=>{
    
    const response=  await fetch(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=8f2d19ca`)
const data=await response.json();
data.actors_arr=data.Actors.split(", ")
const rating_str=data.Ratings[0].Value;
const rating_arr=rating_str.split("/");
const rating_value=rating_arr[0]/2
data.rating_value=rating_value;
setDetails(data);
console.log(data);
  }
  useEffect(()=>
   { fetch_fn();} , [id]
   
   )


  return (

    <div>
      
      <Container maxWidth="xl" sx={{mt:4}}>
       <Breadcrumbs aria-label="breadcrumb">
    <Link to="/">
    <Typography  color="text.primary">Home</Typography>

      
    </Link>


   
   <Link
    color="inherit"
  >
        <Typography color="text.primary">Detail</Typography>
  </Link>
  {Object.keys(details).length==0?(<CircularProgress/>):(null)}
</Breadcrumbs>

<Grid container spacing={2}  sx={{mt:2}}columns={16}>
  <Grid item xs={4}>
    <Stack spacing={2}>
    <img src={details?.Poster} />
    <Typography component="legend" variant='h5'>Rating</Typography>
      <Rating name="read-only" value={details?.rating_value} readOnly />
     
    </Stack>
  </Grid>
  <Grid item xs={12}>
<Stack  spacing={2}>
<Typography variant="h4" gutterBottom component="div">
 {details?.Title}
 <Stack sx={{ml:43}} direction="row" spacing={2}>
 <Chip label="Movie"  />
 

 <Typography variant='h6' gutterBottom component="div">
{details?.Type}
 </Typography>
 <Typography variant='h5' gutterBottom component="div">
/
 </Typography>

 <Typography variant='h6' gutterBottom component="div">
   {details?.Language}

 </Typography>

</Stack>
<Typography sx={{ml:-20}} variant='h5' gutterBottom component="div">
   Plot:

 </Typography>
 <Typography  sx={{ml:8}} variant='h6' gutterBottom component="div">
 {details?.Plot}

 </Typography>
 <Stack sx={{ml:43}} direction="row" spacing={2}>
 <Typography sx={{ml:1}} variant='h5' gutterBottom component="div">
   Cast
 </Typography>
 {details?.actors_arr?.map((single_actor, idx)=>{
   return (<Chip key={idx}  label={single_actor} />)
})}
 



 </Stack>




</Typography>


 
</Stack>

  </Grid>
</Grid>
    </Container>




    </div>
  )
}
export default Detail;