import axios from 'axios'

/* ======== Define the API URL ======== */

// Define a function that accepts the API URL
const fetchDataFromApi = async (tabId) => {
  // // This is the SpreadSheet ID

  try {
    var id = '1eIxHqzxn-TpY4BLpAg-rRTaJV5GwjewMaCpT70MhsdM'

    var url =
      'https://docs.google.com/spreadsheets/d/' + id + `/gviz/tq?tqx=out:json&tq&gid=${tabId}`

    const response = await axios.get(url)
    const data = response.data

    // Extract JSON string (adjust the substring logic based on your actual response)
    const json_string = data.substring(47).slice(0, -2)

    // Parse the JSON string
    const jsonData = JSON.parse(json_string).table.rows

    return jsonData
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

export { fetchDataFromApi }
