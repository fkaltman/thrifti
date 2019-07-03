import React from 'react';
import { Link, Route } from 'react-router-dom';
import StoreCards from './StoreCards';



export default function Home() {

  return (
    <>

      <div id="home">
        <Link to="/stores-by-zip">thrifti</Link>
      </div>

    </>
  )
}