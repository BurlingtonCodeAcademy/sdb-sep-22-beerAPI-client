import React, { useState, useEffect } from 'react'

function DisplayBeers({ sessionToken }) {

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
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    fetchBeers()
  return (
    <div>DisplayBeers</div>
  )
}

export default DisplayBeers