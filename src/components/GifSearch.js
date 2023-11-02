import React,{useState} from 'react'

export default function GifSearch({onSearchSubmit}) {
    const [query, setQuery]= useState('');

    const handleSubmit= (e)=>{
        e.preventDefault();
        onSearchSubmit(query);
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={query}
            onChange={(e)=> setQuery(e.target.value)}
            placeholder="Enter your Search query"
            />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
