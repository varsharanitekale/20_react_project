import React from "react"
import { Container } from "@mui/material";
import SearchList from "../Component/search";
const Home =()=>{
    return(
        <>
            <Container maxWidth="lg" sx={{mt:4}}>
    <SearchList/>
      

</Container>
        </>
    )
}
export default Home;