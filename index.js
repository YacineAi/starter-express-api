const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/ap4', async (req, res) => {
  try {
    const response = await axios({
      method: "post",
      url: "https://apim.djezzy.dz/oauth2/registration",
      data: "msisdn=213793251117&client_id=6E6CwTkp8H1CyQxraPmcEJPQ7xka&scope=smsotp",
      headers: { "content-type":"application/x-www-form-urlencoded" },

    });
    res.json(response.data)
  } catch (error) {
    console.error(error.message);
    res.json(error)
  }
});




app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});
