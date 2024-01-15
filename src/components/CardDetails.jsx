import React from 'react';
import { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';

const CardDetails = () => {
  const {id} = useParams();
  const [moveiDetails,setMovieDetails] = useState()
  useEffect(()=>{
     const fetchApi2 = async () => {
        const fetchData2 = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=18cd9fcc`);
        const jsonData2 = await fetchData2.json();
        setMovieDetails(jsonData2)
     }
     fetchApi2();
  },[id]) 
  return (
    <div>
      {
        moveiDetails ? (<div className="details-con">
          <Link to='/'>
          <button className='back-btn'>Go back</button>
          </Link>
          
        <div className="wraper">

           <div className="img-box">
               <img src={`${moveiDetails.Poster}`} alt="" />
           </div>
           <div className="content-box">
               <h1>{moveiDetails.Title}</h1>
               <p><span>Director:</span> {moveiDetails.Director}</p>
               <p><span>Writer:</span> {moveiDetails.Writer}</p>
               <p><span>Actors:</span> {moveiDetails.Actors}</p>
               <p><span>Genre:</span> {moveiDetails.Genre}</p>
               <p><span>Year:</span> {moveiDetails.Year}</p>
               <p><span>Released:</span> {moveiDetails.Released}</p>
               <p><span>Runtime:</span> {moveiDetails.Runtime}</p>
               <p><span>Ratings:</span> {moveiDetails.Ratings[0].Value}</p>
               <p><span>Story:</span> {moveiDetails.Plot}</p>
           </div>
        </div>
      </div>) : (
        <p className='load'>Loading...</p>
      )
      }
       
    </div>
  )
}

export default CardDetails;
