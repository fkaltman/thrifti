import React from 'react';

export default function EnterZip(props) {



  return (
    <div className="zip-page">
      <img className="zip-image" src="https://images.unsplash.com/photo-1472666260353-23210544cdf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=690&q=80" />
      <img className="zip-image2" src="https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" />
      < section id="enter-city" >
        <div id="zip-prompt"> find thirft stores nearby...</div>
        <div id="search">
          <form onSubmit={props.handleSubmit}>
            <input
              type="text"
              name="zip"
              className="zip-input"
              placeholder=" enter zip code"
              onChange={props.handleChange}
              value={props.zip} />
            <button id="search-button">Search</button>
          </form>
        </div>
      </section >
    </div >
  )
}
