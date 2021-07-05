import React, { useContext } from 'react'
import blank from '../BackgroundImage/blank.jpg'
import {PageContext} from '../App'

function HomeSearchCard(props) {

  const {setIdState, setPageState} = useContext(PageContext)
  // console.log(props,'from homesearchcard')

  const DetailsPage = () => {
    setIdState(props.data.imdbID)
    setPageState(1)
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  return (
    <React.Fragment>
        <div className="card mt-3">
          {
            props.data.Poster !== 'N/A' ?
            <img src={props.data.Poster} className="card-img-top" alt='no image' onClick={DetailsPage}/> :
            <img src={blank} className="card-img-top" alt='no image' onClick={DetailsPage}/>
          }
          <div className="card-body m-0 p-0">
            <p className="card-title p-0 m-0 d-flex justify-content-center overflow-hidden" id="cardTitle" onClick={DetailsPage}>{props.data.Title}</p>
          </div>
        </div>
    </React.Fragment>
  )
}

export default HomeSearchCard
