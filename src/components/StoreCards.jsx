//StoreCards.jsx
import React from 'react';

export default function StoreCards(props) {

  return (
    <>
      {props.stores.map((store) => (
        <div id="store-card" key={store.id}>
          <p id="store-name">{store.name}</p>
          <img id="store-pic" src={store.image_url} alt="clothes_pic"/>
          <h3 id="address">{store.location.address1} <br></br>{store.location.city}, {store.location.zip_code}</h3>
          <h6 id="store-tele">{store.display_phone}</h6>
        </div>
      ))}
    </>
  )
}