import React from 'react'

function GetRating(props) {

  // console.log(props)
  return (
    <React.Fragment>
      {
        props.rating !== undefined ?
        <p className="ml-3">Rating: {props.rating[0].Value}</p> : null
      }
      <p className="text-warning pl-3">
      <i className='material-icons'>star</i>
      <i className='material-icons'>star</i>
      <i className='material-icons'>star</i>
      <i className='material-icons'>star</i>
      <i className='material-icons'>star</i>
      </p>
    </React.Fragment>
  )
}

export default GetRating
