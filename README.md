# thrifti

#### To get started
- Fork and clone this repo
- `cd` into the repo
- `cd` into the new react app
- Open the project in your editor with `code .`
- Install axios with `npm install axios`
- Install react-router-dom with `npm install react-router-dom`
- Start the dev server with `npm start`

## thrifti.surge.sh

![mobile image in frame] (https://i.imgur.com/tpHGcsh.png)

An app for finding thrift stores nearby

This app is designed to find thrift stores near the user, it will incorporate HTML, CSS, JavaScript, React and React Router and will pull external data from the Yelp API, which requires an API key.

The opening page is a tidy stack of garments and home textiles with a Magnoloia/farmhouse/reclaimed barnwood vibe that is sure to whet the appetite of the adventurous thrifter.  The font is a bold wabi sabi type handwritting, Sue Ellen Fransisco, proclaiming only the name of the app in all lowercase letters, for a clean & modern look. 

Clicking on 'thrifty' will take the user to a page with an input field and search button that will prompt the user to enter a zip code in order to locate thriftstores in their area.  Entering a zipcode will lead the user to a page that will display a list of thrift hubs in the environs that they've specified in the input field on the previous page.

# Challenges:
- React and React Router presented challenges due to my current level of familiarity with each. 

- Linking the zipcode search to the list of the stores, addresses and images pulled from the Yelp API required importing withRouter and using ```history.push```, which basically changes the history "stack" object allowing you to .push a url into the array that is your browser history and forcing it to display the page that you specify, which was an interesting new concept to learn.

```js
handleSubmit = (ev) => {
    ev.preventDefault();
    this.handleSearch(this.state.zip);
    this.props.history.push("/stores-by-zip")
  }
```

-Having a mobile-centric design I chose a verticle image for the zip code imput page which didn't work for the desktop view.  Resolving this image required a new image for larger screens and a bevvy of min-width media queries. Going forward I will probably pick images that are more friendly to responsive design.