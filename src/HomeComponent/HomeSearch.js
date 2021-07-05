import React,{ useContext} from 'react'
import { SearchContext } from '../App'
import HomeSearchCard from './HomeSearchCard'

function HomeSearch() {
  
  const {dataState} = useContext(SearchContext)
  // console.log(searchState)

  return (
    <React.Fragment>
      <div className="d-flex">
        <h3 className="font-weight-lighter mt-3 ml-2 border-bottom border-warning align-self" id="search-head">
          Search Result
        </h3>
      </div>
      <div className="row m-0 pb-5 pl-2">
        {
          dataState !== undefined ?
          dataState.map( singleData => {
            if(singleData.Poster !== undefined) {
              if(singleData.Type === 'movie') {
                return <HomeSearchCard key={singleData.imdbID} data={singleData} />
              } else return null
            } else return null
          })
          : null
        }
      </div>
    </React.Fragment>
  )
}

export default HomeSearch
