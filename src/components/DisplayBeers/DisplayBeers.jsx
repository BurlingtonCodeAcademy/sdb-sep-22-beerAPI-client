import React, { useState, useEffect } from 'react'

function DisplayBeers({ sessionToken }) {

    const [ beers, setBeers ] = useState([])
    const [ displayBeers, setDisplayBeers ] = useState(false)

    const fetchBeers = () => {
        let url = "http://localhost:4000/api/"

        fetch(url, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "authorization": sessionToken
            })
        })
        .then(res => res.json())
        .then(data => {setBeers(data); console.log(beers); setDisplayBeers(true)})
        .catch(err => console.log(err))
    }

    useEffect(() => {
      fetchBeers()
    }, [displayBeers])

  return (
    <div>
      {
        displayBeers ? beers.findAllBeers.map((beers, key) => {
          return (
            <>
            <h1 key={key}>{beers.name}</h1>
            <h1 key={key}>{beers.brewery}</h1>
            <h1 key={key}>{beers.abv}</h1>
            <h1 key={key}>{beers.origin}</h1>
            <h1 key={key}>{beers.taste}</h1>
            <h1 key={key}>{beers.type}</h1>
            </>
          )
        }) : null
      }
    </div>
  )
}

export default DisplayBeers