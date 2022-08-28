
//stores.js
import axios from "axios";

// old token
// const TOKEN = "Cevgw4CyvPl6GgL8jxkSMOWQ30JKK573VFf7QVheFnLyIHyn6hxrAPYSvkHhAAYeQLYOFH3gfkbwxKySuzU8jXx3BV9PgABgAp4WeHlT1aronHy7KfVhCuj-niQVXXYx"
const TOKEN = "BbeBLWBImey3ErLMs8Q7Y5vCFw5nkCCRxfiwYIrVlSNRUls1GqRIL6693KWve1eqZVjssTYzvXyTHzQ4Fd7IlLiLo9FC3W7hvCmy1abb9UGKqN2bjmdupLsSkXoLY3Yx"

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search'
// const clientId = "FHoBcyQ_IyAZ2DvZWuLi_A"

// new ID
// const clientId = "E_ZLBYcAWNksiabEYsQxQw"

const opts = {
  headers: {
    Authorization: `Bearer ${TOKEN}`
  }
}

export const fetchStores = async (zipCode) => {
  const response = await axios.get(`${BASE_URL}?term=thrift%20stores&location=${zipCode}`, opts);
  return response.data
};




