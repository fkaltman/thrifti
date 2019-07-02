import React from 'react';
import { Link, Route } from 'react-router-dom';
import StoreCards from './StoreCards';



export default function Home() {

  return (
    <>

      <div>
        <Link to="/stores-by-zip">thrifty</Link>
      </div>

    </>
  )
}