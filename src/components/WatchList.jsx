import React, { useEffect } from "react";
import { useState,useContext } from "react";
import { MovieContext } from "./movieContext";
import genreids from "../utility";

function WatchList() {
  const  { watchlist, setWatchlist,handleDelete}=useContext(MovieContext) //destructing used on left side

  const [search, setSearch] = useState("");
  const [genrelist, setGenreList] = useState([""]);
  const [currgenre, setCurrGenre] = useState("All Genres");

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
  }, [watchlist]);

  const handleAscnedingRatings = () => {
    let sortedAscendingOrder = watchlist.sort((movieObjA, movieObjB) => {
      return movieObjA.vote_average - movieObjB.vote_average;
    });
    setWatchlist([...sortedAscendingOrder]);
  };
  const handleDescendingRatings = () => {
    let sortedDescendingOrder = watchlist.sort((movieObjA, movieObjB) => {
      return movieObjB.vote_average - movieObjA.vote_average;
    });
    setWatchlist([...sortedDescendingOrder]);
  };
 const handleAscnedingPopularity=()=>{
  let sortedAscendingOrder = watchlist.sort((movieObjA, movieObjB) => {
    return movieObjA.popularity - movieObjB.popularity;
  });
  setWatchlist([...sortedAscendingOrder]);

 }
 const handleDescendingPopularity=()=>{
  let sortedDescendingOrder = watchlist.sort((movieObjA, movieObjB) => {
    return movieObjB.popularity - movieObjA.popularity;
  });
  setWatchlist([...sortedDescendingOrder]);
  }
 //handle DElete
  



  return (
    <>
      {/* genre based filter */}

      <div className="flex justify-center m-4">
        {genrelist.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currgenre == genre
                  ? " m-4 flex justify-center items-center bg-blue-400 h-[3rem] w-[9rem] text-white font-bold border rounded-xl"
                  : "m-4 flex justify-center items-center bg-gray-400 h-[3rem] w-[9rem] text-white font-bold border rounded-xl"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      {/* Search Field */}
      <div className="flex justify-center my-10">
        <input
          type="text"
          placeholder="Search The Movies"
          className=" bg-gray-300 h-[3rem] w-[18rem] px-4 outline-none border border-slate-500"
          onChange={handleSearch}
          value={search}
        />
      </div>

      {/* WatchList */}
      <div className="m-8">
        <table className="w-full  text-center">
          <thead className="border border-gray-300 bg-gray-200">
            <tr>
              <th>Name</th>
              <th>
                <i
                  onClick={handleAscnedingRatings}
                  class="fa-solid fa-arrow-up"
                ></i>
                Ratings
                <i
                  onClick={handleDescendingRatings}
                  class="fa-solid fa-arrow-down"
                ></i>
              </th>
              <th>
              <i
                  onClick={handleAscnedingPopularity}
                  class="fa-solid fa-arrow-up"
                ></i>Popularity <i
                onClick={handleDescendingPopularity}
                class="fa-solid fa-arrow-down"
              ></i></th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currgenre == "All Genres") {
                  return true;
                } else {
                  return genreids[movieObj.genre_ids[0]] == currgenre;
                }
              })
              .filter((movieObj) =>
                movieObj.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((movieObj) => (
                <tr className="border-b-2">
                  <td className="flex items-center px-5 py-4">
                    <img
                      className="h-[6rem] w-[10rem]"
                      src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                    />
                    <div className="mx-4">{movieObj.title}</div>
                  </td>
                  <td>{movieObj.vote_average}</td>
                  <td>{movieObj.popularity}</td>
                  <td>{genreids[movieObj.genre_ids[0]]}</td>
                  <td className="text-red-600 cursor-pointer"onClick={()=>handleDelete(movieObj)}>Delete</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
