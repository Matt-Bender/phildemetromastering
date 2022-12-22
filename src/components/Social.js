import React from 'react'
import facebook from '../images/icons/facebook.png'
import twitter from '../images/icons/twitter.png'
import instagram from '../images/icons/instagram.png'

export default function Social() {
  return (
    <div className="social-container">
    <a href="https://www.facebook.com/">
      <img src={facebook} className="icons" />
    </a>
    <a href="https://www.twitter.com/">
      <img src={twitter} className="icons" />
    </a>
    <a href="https://www.instagram.com/">
      <img src={instagram} className="icons" />
    </a>

  </div>
  )
}
