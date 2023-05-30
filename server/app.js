const express = require('express')
const cors = require('cors')
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json({ limig: "50mb" }))
require('./config/db') 



const unsplashRoutes = require('./routes/unsplash.routes')
const userRoutes = require('./routes/user.routes')
const tshirtRoutes = require('./routes/tshirt.routes')

app.use("/api/v1/unsplash", unsplashRoutes);
app.use('/api/v1/user',userRoutes)
app.use('/api/v1/tshirt',tshirtRoutes)


app.get('/', (req, res) => {
  res.status(200).json({ message: "Product 3D API 🚀" })
})

module.exports = app 