import React from 'react'
import fb from '../BackgroundImage/Facebook.png'
import Ig from '../BackgroundImage/Instagram.png'
import Tw from '../BackgroundImage/Twitter.png'
import Li from '../BackgroundImage/Linkedin.png'

function HomeFotter() {
  return (
    <React.Fragment>
      <div className="fixed-bottom" id="homefotter">
        <div className="container d-flex justify-content-center">
            <a href='https://m.facebook.com/garvit.singh.10236?ref=bookmarks' alt='facebook'>
                <img src={fb} className='contactImage' alt='Facebook' ></img>
            </a>
            <a href='https://www.instagram.com/garvit_jadon/' alt='Instagram'>
                <img src={Ig} className='contactImage' alt='Instagram' ></img>
            </a>
            <a href='#3' alt='Twitter'>
                <img src={Tw} className='contactImage' alt='Twitter' ></img>
            </a>
            <a href='#4' alt='Linkdein'>
                <img src={Li} className='contactImage' alt='Linkdein' ></img>
            </a>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HomeFotter
