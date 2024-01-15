import './App.css';
import React, { useState } from 'react'
import Card from './components/Card';
import { HashRouter,Routes,Route } from 'react-router-dom';
import CardDetails from './components/CardDetails';


const App = () => {
 
  const [input,setInput] = useState();   //for taking the input value from the user.
  const [apiData,setApiData] = useState([]);  //for storing the json file from the api.
  const [start,setStart] = useState(false);  //for displaying the card component after the button click.
  const [loading,setLoading] = useState(false); //for showing the loading...when the api is taking time to load.
  const movieSearch = () => {
    setLoading(true);

    const fetchApi = async () => {
      try {
        const fetchData = await fetch(`http://www.omdbapi.com/?s=${input}&apikey=18cd9fcc`);
        const jsonData = await fetchData.json();
        
        if (jsonData.Search) {
          setApiData(jsonData.Search);
          setStart(true);
        } else {
          console.error('API response does not contain the "Search" property:', jsonData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchApi();
  };
     
  
 
  return (
    <div>
 <HashRouter>
      <div className="container">
        <div className="nav">
            <h1>MovieFlex.</h1>
            <div className="input-field">

            <input type="text" value={input} placeholder='Enter movie name' onChange={(e) => {setInput(e.target.value)}}/>
            <button className='search-btn' onClick={movieSearch}>Search</button>
            </div>
        </div>
      
        <Routes>
          <Route path='/'  element={
            <div className="content">
            {loading ? (
              <p className='load'>loading...</p>
            ): start && apiData.map((value,index)=> {
              return <Card key={index} movieName={value.Title} year={value.Year} img={value.Poster} movieId={value.imdbID}/>
              
            })}
              
            </div>
          }/>
          <Route path='/carddetails/:id' element={<CardDetails/>}/>
        </Routes>
    
      </div>      
      </HashRouter>
    </div>
  )
}

export default App;
