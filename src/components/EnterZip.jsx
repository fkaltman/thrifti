import React from 'react';
import { Link } from "react-router-dom";
import Shelves from '../img/annie-spratt-unsplash.jpg'
import Rack from '../img/becca-mchaffie-unsplash.jpg'

export default function EnterZip(props) {

  return (
    <div className="zip-page">
      <section id="enter-zip">
        <div id="search">
          <form onSubmit={props.handleSubmit}>
            <input
              type="text"
              name="zip"
              className="zip-input"
              placeholder=" zip code"
              onChange={props.handleChange}
              value={props.val} />
            <button id="search-button">Search</button>
          </form>
        </div>
      </section >
          <img className="zip-image-shelves"
            src={Shelves} />
          <img className="zip-image-rack"
            src={Rack} />
      
        <h6 className="credit-clothes-rack">Photo by Becca McHaffie on Unsplash</h6>
        <h6 className="credit-shelves">Photo by Annie Spratt on Unsplash</h6>
    </div >
  )
}
