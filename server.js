const express = require('express')
const app = express()
const cors = require("cors");
const PORT = process.env.PORT || 3000;
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${port}`)
})