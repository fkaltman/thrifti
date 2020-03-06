import React from 'react';
import { Link, Route } from 'react-router-dom';
import StoreCards from './StoreCards';
import Hanger from "../img/hanger_search.png";

export default function Home() {

  return (
    <div>
      <div id="homescreen">
        <h3 className="main-title">thrifti</h3>
        <h4 className="main-title2">find thrift stores nearby</h4>
        <Link to="/enter-zip">
        <img className="hanger-button"
            src={Hanger} />
        </Link>
        <h6 className="credit-stack">Photo by Victoria Strukovskaya on Unsplash</h6>
      </div>
    </div>
  )
}
