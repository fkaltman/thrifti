import React from 'react';
import { Link, Route } from 'react-router-dom';
import StoreCards from './StoreCards';



export default function Home() {

  return (
    <>

      <div>
        <Link className="stores" to="/stores-by-zip"></Link>
      </div>
      <section>
        <Route
          path="/stores-by-zip" render={() => <StoreCards stores={this.props.stores} />} />
      </section>
    </>
  )
}