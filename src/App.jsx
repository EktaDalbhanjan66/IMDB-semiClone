import NavBar from "./components/NavBar"
import Baner from "./components/Baner"
import Movies from "./components/Movies"
import WatchList from "./components/WatchList"
import Details from "./components/Details"
import { MovieContext } from "./components/movieContext"
import { useEffect, useState,useContext } from "react"
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  const [watchlist, setWatchlist] = useState([]);

  const handleAddtoWatchList = (movieObj) => {
    let updatedWatchlist = [...watchlist, movieObj];
    setWatchlist(updatedWatchlist);
    localStorage.setItem('movies',JSON.stringify(updatedWatchlist));
    console.log(updatedWatchlist);
  };
  const handleDelete = (movieObj) => {  
    let filteredMovies=watchlist.filter((movie)=>{
      return movie.id!=movieObj.id;
     
    })
    setWatchlist(filteredMovies);
    localStorage.setItem('movies',JSON.stringify(filteredMovies));
  
  };
  useEffect(()=>{
    let moviesFromStorage=localStorage.getItem('movies');
    if(!moviesFromStorage){
      return;
    }
    setWatchlist(JSON.parse(moviesFromStorage));
  },[])
 
 
  return (
    <>
    <BrowserRouter>
    <MovieContext.Provider value={{handleAddtoWatchList,watchlist,setWatchlist,handleDelete}}>
    <NavBar/>
    <Routes>
    
    <Route path='/'element ={<><Baner/> <Movies /></>}/>
     
    <Route path="/watchlist" element={<WatchList/>}/>
    <Route path="/details/:id" element={<Details />} />
    </Routes>
    
    </MovieContext.Provider>
    </BrowserRouter>
    </>
  );

    
}
  
  

export default App
