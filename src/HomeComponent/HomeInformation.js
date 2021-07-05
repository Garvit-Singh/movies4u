import React from 'react'

function HomeInformation() {
  return (
    // <!-- INFORMATION SECTION FOR MOVIES -->
    <section id="information-section">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="p-5">
              <h1 className="display-4">Information</h1>
              <p>This is a non-profit, fun website.
                We have no right over any links given below.
                Free API's are used.Namely:
                <br/>
                https://imdb-internet-movie-database-unofficial.p.rapidapi.com
                <br/>
                Hope you enjoy your shows and do not forget to share this with your friends
              </p>
              <a href="https://rapidapi.com" className="btn btn-outline-warning">
                Find More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeInformation
