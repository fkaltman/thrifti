//StoreCards.jsx
import React from 'react';

export default function StoreCards(props) {
  return (
    <>
      {props.stores.map((store) => (
        <div id="store-card" key={store.id}>
          <p id="store-name">{store.name}</p>
          <h3 id="address">{store.location.address1} <br></br>{store.location.city}, {store.location.zip_code}</h3>

        </div>
      ))}
    </>
  )
}