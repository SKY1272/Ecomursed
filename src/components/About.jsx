import React from 'react'
import singer from './assets/singer.png'
import './about.css'
import { FaFacebook, FaYoutube, FaSpotify } from 'react-icons/fa';
function About() {
  return (
    <div className='Container'>
      <div className="header">
        <h1>The Generics</h1>
      </div>
      <div className="content">
        <p>
          Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows,
          hates no prosecutors will unfold in the enduring of which were born in it?
          Often leads smallest mistake some pain main responsibilities are to stand for
          the right builder of pleasure, accepted explain up to now. , The things we are
          accusing of these in the explication of the truth receives from the flattery of
          her will never be the trouble and they are refused to the pleasures and the pleasures
          of the pain, explain the treatment of excepturi of the blessed sufferings. I never said
          will unfold in him receives at another time he may please the one that those works, we are less
          than they, this refused to the pleasures of deleniti? Those are! Will unfold in times of pleasure,
          this pain will be a right enjoyed by corrupt, are accusing him of all pleasures, and seek his own,
          or, to the needs of the agony of the choice. We hate the fellow.
          Lorem ipsum dolor, sit amet consectetur rebates. The distinction, that arise from or to.
          The greater, therefore, an obstacle to the duties of the debts receives the very great importance
          to us that these are consequent to that question is answered, which was selected for the fault,
          it is often one of us, however, have any! Moreover, this is often not at once take the hardships of
          the life of harsh condemn, we are accusing him? Him whom something large
        </p>
        <img src={singer} alt='singer' width='300' height='300' />
      </div>
      <div className="footer">
      <h2>The Generics</h2>
        <div className="footer-icons">
        <a href="https://www.facebook.com/your-facebook-page-url" target="_blank" rel="noopener noreferrer">
      <FaFacebook size={30} color="blue" />
    </a>
    <a href="https://www.youtube.com/your-youtube-channel-url" target="_blank" rel="noopener noreferrer">
      <FaYoutube size={30} color="red" />
    </a>
    <a href="https://www.spotify.com/your-spotify-channel-url" target="_blank" rel="noopener noreferrer">
      <FaSpotify size={30} color="green" />
    </a>
        </div>
      </div>
    </div>
  )
}

export default About