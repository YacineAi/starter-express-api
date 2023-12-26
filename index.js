const express = require('express');
const app = express();
const axios = require('axios');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/ap4', async (req, res) => {
  try {
    const response = await axios({
      method: "post",
      url: "https://apim.djezzy.dz/oauth2/registration",
      data: "scope=smsotp&client_id=6E6CwTkp8H1CyQxraPmcEJPQ7xka&msisdn=213793251117",
      headers: { "content-type":"application/x-www-form-urlencoded" },

    });
    res.json(response.data)
  } catch (error) {
    console.error(error.message);
    res.json(error)
  }
});




app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});
