import React, { useEffect,useState } from 'react'
import MovieCard  from './Card'

import Grid from "@mui/material/Grid"
const SearchList = () => {
  const [movies, setMovies]=useState([]);
  const fn= async ()=> {
    const response= await fetch("http://www.omdbapi.com/?apikey=8f2d19ca&S=matrix");
     const data=await response.json();
    console.log("test")

    console.log(data)
  console.log(data.Search)
  setMovies(data.Search);
  }
   
   

  

    useEffect(()=>{
      fn()}, []
    );
  return (
    <div>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 10 }}>
        {movies.map((singleMovie, idx)=>{
         return(<Grid item key={idx}>
            <MovieCard data={singleMovie}/>
            </Grid>);


        })}
         </Grid>

    </div>
  )
}
export default SearchList;
