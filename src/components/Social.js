import React from 'react'
import facebook from '../images/icons/facebook.png'
import twitter from '../images/icons/twitter.png'
import instagram from '../images/icons/instagram.png'
import discogs from '../images/icons/discogs-icon.png'
import allmusic from  '../images/icons/allmusic-bw.png'

export default function Social() {
  return (
    <div className="social-section">

    <div className="social-container">
    <a  href="https://www.facebook.com/people/Phil-Demetro-Mastering/100065667542469/?paipv=0&eav=AfabegVBgDsoMpBQ2NK3kN1ctpusMrhPuoDjYCwbYLm2VNBr8iqDo3F0DT_V99iuScg&_rdr" target="_blank" rel="noopener noreferrer">
      <img src={facebook} className="icons hover-grow mx-1" alt="facebook icon" />
    </a>
    <a href="https://twitter.com/phildemetro" target="_blank" rel="noopener noreferrer">
      <img src={twitter} className="icons hover-grow mx-1" alt="twitter icon"/>
    </a>
    <a href="https://www.instagram.com/lacquer_channel_phil/" target="_blank" rel="noopener noreferrer">
      <img src={instagram} className="icons hover-grow mx-1" alt="instagram icon"/>
    </a>
    <a href="https://www.discogs.com/artist/482445-Phil-Demetro" target="_blank" rel="noopener noreferrer">
      <img src={discogs} className="icons hover-grow mx-1" alt="discogs icon"/>
    </a>
    <a href="https://www.allmusic.com/artist/phil-demetro-mn0001412021" target="_blank" rel="noopener noreferrer">
      <img src={allmusic} className="icons hover-grow mx-1 icon-invert" alt="allmusic icon"/>
    </a>

  </div>

    
    </div>
  )
}
