import React, { useEffect } from 'react'
import { fetchDataFromApi } from './config/api'

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'

const App = () => {

  const dispatch = useDispatch();
  // useDispatch() is hook of redux to call actions.

  useEffect(()=>{
    apiTesting();

  }, [])

  const apiTesting = () =>{
    fetchDataFromApi(`/movie/popular`)
    .then(res => {
      console.log(res);

      // calling redux action via dispatch (to store values in url state)
      dispatch(getApiConfiguration(res));
    })
    .catch(err => {
      console.log(err);
    })
  };

  return (
    <div>Hello World!</div>
  )
}

export default App