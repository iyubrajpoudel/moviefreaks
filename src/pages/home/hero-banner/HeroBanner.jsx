import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';

const HeroBanner = () => {

  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigateTo = useNavigate();
  
  const {data, loading} = useFetch(`/movie/upcoming`);

  const searchQueryHandler = (event) => {
    if(event.key === "Enter" && query.length > 0){
      navigateTo(`/search/${query}`);
    }
  }

  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">Millions of Movies, TV Shows and people to discover. Explore Now!</span>
          <div className="searchInput">
            <input type="text" placeholder='Search for Movies, Series or TV Shows' value={query} onChange={(e)=> setQuery(e.target.value) } onKeyUp={searchQueryHandler} />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner