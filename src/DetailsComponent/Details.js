import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Details.css'
import '../HomeComponent/Home.css'
import GetGenre from './GetGenre'
import GetRating from './GetRating'
import HomeFotter from '../HomeComponent/HomeFotter'
import HomeSearch from '../HomeComponent/HomeSearch'

const spacing = {
  marginBottom: "25px"
}

function Details(props) {

  console.log(props)
  const url = `https://www.omdbapi.com/?i=${props.movieId}&apikey=26d544e5`
  const [plot,setPlot] = useState([])
  const iframeURL = `https://streamvideo.link/getvideo?key=Zis6jBIBsDQ9DsH7&video_id=${props.movieId}`

  useEffect(() => {
    
    axios.get(`${url}`)
    .then(response => {
      console.log(response,'from details')
      setPlot(response.data)
    })
    .catch(err => console.log(err))
  },[props.movieId])

  // movie frame left with good aspect ratio                                                // get-rating and get-plot from imdb 
  // get-more like -this
  // comments if u want
  return (
    <React.Fragment>
    <div id="detailsPage">
      <div className="d-flex">
        <h3 className="font-weight-lighter ml-2 border-bottom border-warning align-self" id="details-head">
          About
        </h3>
      </div>
      <div className="d-flex flex-row flex-wrap">
        {/* <iframe src={`https://www.youtube.com/watch?v=qk2WMmiiVFE&list=RDMMqk2WMmiiVFE&start_radio=1`} title='movies' alt='Not Available' id="movieFrame"></iframe> */}
        <iframe src={iframeURL} title="movie" allowFullScreen={true} alt='Not Available' id="movieFrame"></iframe>
        {
          plot !== undefined ? 
          <div className="container text-left movieInfo m-0 pl-4">
            <h5 className="card-title font-weight-lighter text-warning">{plot.Title}</h5>
            <p className="card-text">{plot.Plot}</p>
            <p className="card-text"><small className="text-muted">Year: {plot.Year}</small></p>
          </div>
                  
          : null
        }
        </div>
        <GetGenre genre={plot.Genre} />
        <GetRating rating={plot.Ratings} />
        <HomeSearch />
        <div style={spacing}></div>
        <HomeFotter />
    </div>
    </React.Fragment>
  )
}

export default Details
