// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import movieLogo from 'C:/Users/DELL/movie/src/movieLogo.png';
function App() {
  const [movie,setMovie]=useState("Search...");
  const [movies,setmovies]=useState([]);
  const [def,setDef]=useState(true);
  const[defMovie,setDefMovie]=useState([]);
  function changeMovie(event){
setMovie(event.target.value);
  }
  function submitMovie(e){
    e.preventDefault();
  axios.get(`http://www.omdbapi.com/?s=${movie}&apikey=4009c8f`).then((Response)=>{
  
setmovies(Response.data.Search);
    }).catch((err)=>{
      console.log(err);
    })
    setDef(false);
  }
  async function defaultSearch(){
    const defaultM=await fetch('http://www.omdbapi.com/?s=abs&apikey=4009c8f');
   setDefMovie(await defaultM.json());
  }

  useEffect(()=>{
    // axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=4009c8f`).then((Response)=>{

    //   setDefMovie(Response.data.Search);
    //       }).catch((err)=>{
    //         console.log(err);
    //       })
    defaultSearch();
  },[]);
  return(
    <>
    
      {/* <input type="search" name="" id="" value={movie} onChange={changeMovie} /> */}
      {/* <button type='submit' className='btn btn-dark'>click</button> */}
     
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="/">Movie Diaries</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
      <form className="d-flex" role="search" onSubmit={submitMovie}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={movie} onChange={changeMovie} />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

      {/* {
        def ? (
          defMovie.Search.map((content)=>{
            return(     
<div className='movie card'>
  <div className='poster'>
    <img src={content.Poster} alt="poster" />
  </div>
  <div className='discription'>
    <h3>{content.Title}</h3>
    <p>{content.Year}</p>
  </div>
</div>
            )  })
        ):(<pre>{JSON.stringify(movies)}</pre>)
      } */}
      <div className='main'>
        
{
   movies.map((content)=>{
    return(     
<div className='movie card m-5' key={content.imdbId}>
<div className='poster'>
<img src={content.Poster} alt="poster" />
</div>
<div className='discription'>
<h3>Title: {content.Title}</h3>
<p>Released : {content.Year}</p>

</div>
</div>
    )  })
}
</div>
    </>
  )
}

export default App;
