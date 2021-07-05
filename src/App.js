import React, {useState, useEffect } from 'react';
import axios from 'axios'
import Home from './HomeComponent/Home'
import NavigationBar from './NavigationComponent/NavigationBar'
import Details from './DetailsComponent/Details';

export const SearchContext = React.createContext()
export const PageContext = React.createContext()

function App() {

  const [search,setSearch] = useState('')
  const [page,setPage] = useState(0)
  const [id,setId] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    const url = `https://www.omdbapi.com/?s=${search}&apikey=26d544e5`
    // console.log(searchState,'searchState from HomeSearch')
    if(search !== '') {
      // console.log(data,'data from homesearch')
      setData([])
      axios.get(`${url}`)
      .then(response => {
        // console.log(response,'from app.js')
        setData(response.data.Search)
      })
      .catch(err => {
        console.log(err)
      })
    }
  },[search])

  return (
    <div className="App">
      <SearchContext.Provider value={{ dataState: data , searchState: search}}>
      <PageContext.Provider value={{setIdState: setId, setPageState: setPage, setSearchState: setSearch}} >
        <NavigationBar />
        {
          page === 0 ? <Home /> : <Details movieId={id} />
        }
      </PageContext.Provider>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
