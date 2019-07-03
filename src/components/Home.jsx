import React from 'react';
import { Link, Route } from 'react-router-dom';
import StoreCards from './StoreCards';

export default function Home() {

  return (
    <div>
      <div id="homescreen">
        <Link to="/enter-zip" className="main-thrifty">thrifti</Link>
      </div>
    </div>
  )
}