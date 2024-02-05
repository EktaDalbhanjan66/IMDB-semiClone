import React from "react";
import { useContext } from "react";
import { MovieContext } from "./movieContext";
import { Link } from "react-router-dom";



function MovieCard({ name, posterpath, movieObject }) {
  let myContext = useContext(MovieContext);
  function doesContain() {
    for (let i = 0; i < myContext.watchlist.length; i++) {
      if (myContext.watchlist[i].id === movieObject.id) {
        return true; //cross will show
      }
    }
    return false; // add to watchlist
  }
  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${posterpath})`,
      }}
    >
      {doesContain(movieObject) ? ( //checking the movie boject is added or not
        <div
          onClick={() => myContext.handleDelete(movieObject)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#10060;
        </div>
      ) : (
        <div
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
          onClick={() => myContext.handleAddtoWatchList(movieObject)}
        >
          &#128525;
        </div>
      )}
      <div className="text-white w-full text-xl text-center p-2 bg-gray-900/70">
        {name}
      </div>
      <Link to={`/details/${movieObject.id}`}>
        <i class="fa-solid fa-circle-info text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"></i>
      </Link>
    </div>
  );
}

export default MovieCard;
