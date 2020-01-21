import React from 'react';
import { Link } from "react-router-dom";
import Shelves from '../img/annie-spratt-unsplash.jpg'
import Rack from '../img/becca-mchaffie-unsplash.jpg'
export default function EnterZip(props) {

  return (
    <div className="zip-page">
      <div id="zip-prompt"> find thrift stores nearby...</div>
          <img className="zip-image-shelves"
            src={Shelves} />
          <img className="zip-image-rack"
            src={Rack} />
      
      <section id="enter-zip">
        <div id="search">
          <form onSubmit={props.handleSubmit}>
            <input
              type="text"
              name="zip"
              className="zip-input"
              placeholder=" enter zip code"
              onChange={props.handleChange}
              value={props.val} />
            <button id="search-button">Search</button>
          </form>
        </div>
      </section >
    </div >
  )
}
