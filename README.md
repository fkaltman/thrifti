# thrifti

## thrifti.surge.sh

![https://i.imgur.com/tpHGcsh.png]

An app for finding thrift stores nearby

This app is designed to find thrift stores near the user, it will incorporate HTML, CSS, JavaScript, React and React Router and will pull external data from the Yelp API.

The opening page is a tidy stack of garments and home textile with a Magnoloia/farmhouse/reclaimed barnwood vibe that is sure to whet the appetite of the adventurous thrifter.  The font is a bold wabi sabi type handwritting, Sue Ellen Fransisco, proclaiming only the name of the app in all lowercase letters. 

Clicking on 'thrifty', the only text on the page, will take the user to a page with an input and search button that will propmt the user to enter a zip code in order to locate thriftstores in their area.  Entering a zipcode,or city will lead the user to another page that will display a list of thrift hubs in the the environs that they specified in the input field on the previous page.


Challenges:
- React and React Router presented challenges due to my current level of familiarity with each. 

- Linking the zipcode search to the list of the stores, addresses and images pulled from the Yelp API required importing withRouter and using ```history.push```, which basically changes the history "stack" object allowing you to .push a url into the array that is your browser history and forcing it to display the page that you specify, which was an interesting new concept to learn.

```js
handleSubmit = (ev) => {
    ev.preventDefault();
    this.handleSearch(this.state.zip);
    this.props.history.push("/stores-by-zip")
  }
```

