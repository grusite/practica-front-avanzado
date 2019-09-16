const API_KEY = 'JHX8V4X-886MXCY-MZA8NMW-A0C4YQD'

const api = (API_URL = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/') => {
  const searchAPIEndPoint = `${API_URL}beers?search=`
  const beerAPIEndPoint = `${API_URL}beers`
  const limit = 'limit=10'

  return {
    getBeers: async () => {
      try {
        const response = await fetch(`${beerAPIEndPoint}?${limit}`, {
          headers: {
            'Content-type': 'application/json',
            'X-API-KEY': API_KEY,
          },
        })
        if (!response.ok) {
          throw new Error('Error fetching beers')
        }
        const data = await response.json()
        return data.beers
      } catch (err) {
        console.error(err.message)
        throw err
      }
    },
    getSearchedBeers: async text => {
      try {
        const response = await fetch(`${searchAPIEndPoint}${text}&${limit}`, {
          headers: {
            'Content-type': 'application/json',
            'X-API-KEY': API_KEY,
          },
        })
        if (!response.ok) {
          throw new Error('Error fetching beers')
        }
        const data = await response.json()
        // const filteredData = data.map(item => item.beers)
        return data.beers
      } catch (err) {
        console.error(err.message)
        throw err
      }
    },
    getBeerById: async id => {
      try {
        const response = await fetch(`${showsAPIEndPoint}/${id}`, {
          headers: {
            'Content-type': 'application/json',
            'X-API-KEY': API_KEY,
          },
        })
        if (!response.ok) {
          throw new Error('Error fetching detailed beer')
        }
        const data = await response.json()
        return data.beer
      } catch (err) {
        console.error(err.message)
      }
    },
    createAndGetCommentById: async (id, text) => {
      try {
        const response = await fetch(`${beerAPIEndPoint}/${id}/comment`, {
          method: 'POST',
          body: JSON.stringify({
            comment: text,
          }),
          headers: {
            'Content-type': 'application/json',
            'X-API-KEY': API_KEY,
          },
        })
        if (!response.ok) {
          throw new Error('Error fetching quote by ID')
        }
        const resBody = response.json()
        return resBody.beer
      } catch (err) {
        console.error(err.message)
      }
    },
    createAndGetLikesById: async id => {
      try {
        const response = await fetch(`${beerAPIEndPoint}/${id}/like`)
        if (!response.ok) {
          throw new Error('Error fetching like by ID')
        }
        const data = response.json()
        return data.beer
      } catch (err) {
        console.error(err.message)
      }
    },
  }
}

export default api
