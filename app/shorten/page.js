"use client"

import Link from 'next/link'
import React, { useState } from 'react'

const ShortenPage = () => {  // <-- renamed to start with uppercase

  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [generated, setGenerated] = useState("")

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shortUrl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);   
        setUrl("");
        setShortUrl(""); 
        console.log(result)
        alert(result.message);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className='mx-auto bg-blue-200 max-w-2xl p-8 rounded-lg shadow-lg flex flex-col my-10'>
      <h1 className='font-bold text-2xl'>Generate Your Short URLs</h1>
      <div className="flex flex-col gap-3 my-3">
        <input 
          type="text"
          className='px-4 py-2 w-full rounded-md bg-white focus:outline-blue-900'
          value={url} 
          placeholder='Enter Your URL'
          onChange={e => setUrl(e.target.value)}
        />
        <input 
          type="text"
          className='px-4 py-2 rounded-md bg-white focus:outline-blue-900'
          value={shortUrl} 
          placeholder='Enter Your Preferred short URL text'
          onChange={e => setShortUrl(e.target.value)}
        />
        <button 
          onClick={generate} 
          className="bg-gray-900 px-4 py-2 rounded-lg text-white hover:bg-gray-800 transition cursor-pointer font-bold"
        >
          Generate
        </button>
        {generated && (
          <>
            <span className='font-bold text-lg'>Your Link </span>
            <code>
              <Link target="_blank" href={generated}>{generated}</Link> 
            </code>
          </>
        )}
      </div>    
    </div>
  )
}

export default ShortenPage
