import React, { useEffect } from 'react'
import { fetchDataFromApi } from './config/api'

const App = () => {

  const apiTesting = () =>{
    fetchDataFromApi(`/movie/popular`)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  };

  useEffect(()=>{

    apiTesting();

  }, [])

  return (
    <div>Hello World!</div>
  )
}

export default App