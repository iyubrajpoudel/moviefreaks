import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';

const HeroBanner = () => {

  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigateTo = useNavigate();
  
  const {data, loading} = useFetch(`/movie/upcoming`);


  useEffect(()=>{
      // showing random bg image via api calling


      const randomNumberBelow20 = Math.floor(Math.random() * 20) // Any random number from 0 to 19
        //since api results data count is 20

      // const bgImagePath = data.results[randomNumberBelow20].backdrop_path
      // bg image in : api_response_data > results > backdrop_path

      // With optional chaining
      const bgImagePath = data?.results?.[randomNumberBelow20].backdrop_path

      // setting background image via background state
      setBackground(bgImagePath);


  }, [data])

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