//stores.js
import axios from "axios";
import StoreCards from "./components/StoreCards";

const TOKEN = "Cevgw4CyvPl6GgL8jxkSMOWQ30JKK573VFf7QVheFnLyIHyn6hxrAPYSvkHhAAYeQLYOFH3gfkbwxKySuzU8jXx3BV9PgABgAp4WeHlT1aronHy7KfVhCuj-niQVXXYx"
const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search'
// const clientId = "FHoBcyQ_IyAZ2DvZWuLi_A"

const opts = {
  headers: {
    Authorization: `Bearer ${TOKEN}`
  }
}

// export const fetchStores = async (zipCode) => {
//   const response = await axios.get(`${BASE_URL}?term=thrift%20stores&location=${zipCode}`, opts);
//   const stores = response.data.stores.zip
//   this.setState({
//     zip: zip
//   });
console.log(zip);
// }