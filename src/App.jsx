import React, { useEffect } from 'react'
// React Router DOM
import {BrowserRouter, Routes, Route} from "react-router-dom"

import { fetchDataFromApi } from './config/api'

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'

//importing pages & components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResult from './pages/search-result/SearchResult';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/page-not-found/PageNotFound';


const App = () => {

  /*
  const dispatch = useDispatch();
  // useDispatch() is hook of redux to call actions.

  // const count = useSelector((state) => state.counter.value)

  //getting data from store

  //getting home reducer (which store homeSlice states i.e home: homeSlice)
  const home = useSelector((state) => state.home)
  // accessing state defined inside homeSlice
  const url = home.url;
  // console.log(url);
  console.log(url.total_pages);

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

  */

  return (
    <>
    <BrowserRouter>
      {/* <Header/> */}
        <Routes>
          <Route path={`/`} element={<Home/>} />
          <Route path={`/:mediaType/:id`} element={<Details/>} />
          <Route path={`/search/:query`} element={<SearchResult/>} />
          <Route path={`/explore/:mediaType`} element={<Explore/>} />
          <Route path={`*`} element={<PageNotFound/>} />
        </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
    </>
  )
}

export default App