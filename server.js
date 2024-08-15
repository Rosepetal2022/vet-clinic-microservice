const express = require('express');
const axios = require('axios');
const cors = require('cors'); 
require('dotenv').config();
const app = express();
const port = 5000; 


app.use(cors());

//Route for searching vet clinics
app.get('/search', async (req, res) => {
  const query = req.query.query;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=veterinary+clinics+in+${query}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.json(response.data.results);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});


//Route for looking at a specific clinic
app.get('/clinic', async (req, res) => {
    const placeId = req.query.place_id;

    if (!placeId) {
        return res.status(400).json({ error: 'place_id parameter is required' });
    }

    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${process.env.GOOGLE_PLACES_API_KEY}`, {
            headers: { 'Authorization': `Bearer ${process.env.API_KEY}` }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch clinic details' });
    }
});

app.listen(port, () => {
  console.log(`Veterinary clinic microservice running on port ${port}`);
});