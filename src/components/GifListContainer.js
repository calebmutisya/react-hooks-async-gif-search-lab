import React,{useEffect,useState} from 'react'
import GifList from './GifList';
import GifSearch from './GifSearch';

export default function GifListContainer() {

    const [gifs,setGifs]= useState([])
     // Define a function to fetch and set the first 3 GIFs based on a search query
    const fetchGifs =(query)=>{
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=80TSBxLI8bGsZsEzDwcghySxag0pnPBI&q=${query}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
            .then((res)=>res.json())
            // Extract the first 3 GIFs
            .then((data)=> setGifs(data.data.slice(0,3)));
    };

    // Define a submit handler function to pass to GifSearch
    const handleSearchSubmit= (query)=>{
        fetchGifs(query);
    }

    useEffect(()=>{
        fetchGifs('search')
    },[]);

  return (
    <div>
        <GifSearch onSearchSubmit={handleSearchSubmit}/>
        <GifList gifs={gifs}/>
    </div>
  )
}
