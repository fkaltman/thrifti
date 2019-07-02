import React from 'react';

export default function Home() {

  return (
    <>
      <div>
        <Link className="stores" to="/stores-by-zip"></Link>
      </div>
      <section>
        <Route
          path="/stores-by-zip" render={() => <StoreCards stores={this.state.stores} />} />
      </section>
    </>
  )
}