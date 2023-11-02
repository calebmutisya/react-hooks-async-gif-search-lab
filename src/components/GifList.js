import React from 'react'

export default function GifList({gifs}) {
  return (
    <div>
        <ul>
            {gifs.map((gif)=>(
                <li>
                    <img src={gif.images.fixed_height.url} />
                </li>
            ))}
        </ul>
    </div>
  )
}
