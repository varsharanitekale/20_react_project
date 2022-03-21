import logo from './logo.svg';
import './App.css';
import  SearchList  from './Component/search.js';
import Container from "@mui/material/Container"
import Header from './Component/header';
import MovieCard from './Component/Card';
import Grid, {FormRow} from "@mui/material/Grid";
import Search from '@mui/icons-material/Search';
import {Routes, Route} from "react-router-dom"
import Home from './Routes/Home';
import SearchRoutes from './Routes/Search1';
import Detail from './Routes/Detail';
import NotFound from './Routes/NotFound';
// import FormRow from "@mui/material/FormRo
const  App =()=> {
  return (
    <div className="App">
      <Header/>
      <Routes>
        `<Route path="/" element={<Home/>}
         />
         <Route path="/Search" element={<SearchRoutes/>}/>
         <Route path="/Detail/:id" element={<Detail/>}/>
          <Route path="*" element={< NotFound/>}/>

      </Routes>`

    </div>
  );
}

export default App;
