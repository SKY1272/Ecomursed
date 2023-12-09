import React from 'react';
import musics from './assets/musics.png' // Adjust the path based on your folder structure

export default function Home() {
  return (
    <div className="container">
      <div className="main">
        <h1>The Genres</h1>
        <button>Get our Album</button>
        <img src={musics} alt="Music" width='50'/>
      </div>
      <div className="className">
        <h2>Tours</h2>
        <table>
          <thead>
            <tr>
            <td>16 July</td>
            <td>DETROIT, MI</td>
            <td>DTE ENERGY MUSIC THEATRE</td>
            <td>
              <button>get buy</button>
            </td>
            
            </tr>
            <tr>
              <td>19 July </td>
              <td>TORONTO,ON</td>
            <td>BUDWEISER STAG</td>
            <td>
              <button>get buy</button>
            </td>
            </tr>
            <tr>
              <td>22 July </td>
              <td>BRISTOW, VA</td>
            <td>JIGGY LUBE LIVE</td>
            <td>
              <button>get buy</button>
            </td>
            </tr>
            <tr>
              <td>29 July </td>
              <td>PHOENIX, AZ</td>
            <td>AK-CHIN PAVILION</td>
            <td>
              <button>get buy</button>
            </td>
            </tr>
            <tr>
              <td>2 August </td>
              <td>LAS VEGAS, NV</td>
            <td>T-MOBILE ARENA</td>
            <td>
              <button>get buy</button>
            </td>
            </tr>
            <tr>
              <td>4 August </td>
              <td>CONCORD, CA</td>
            <td>CONCORD PAVILION</td>
            <td>
              <button>get buy</button>
            </td>
            </tr>
          </thead>
        </table>
      </div>
      <div className="footer">
        <h1>The Generics</h1>
      </div>
    </div>
  );
}

