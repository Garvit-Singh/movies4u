import React from 'react'

function GetGenre(props) {

  return (
    <React.Fragment>
      <p className="text-warning m-0 p-3">
      {
        props.genre !== undefined ?
        props.genre.split(',').map( gen => {
          return  <button type="button" key={gen} className="btn btn-outline-warning disabled m-2" disabled>{gen}</button>
        }) : null
      }
      </p>
    </React.Fragment>
  )
}

export default GetGenre
