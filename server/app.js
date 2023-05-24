const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json({ limig: "50mb" }))
require('./config/db')

const dalleRoutes = require('./routes/dalle.routes')
const userRoutes = require('./routes/user.routes')
const tshirtRoutes = require('./routes/tshirt.routes')

app.use("/api/v1/dalle", dalleRoutes);
app.use('/api/v1/user',userRoutes)
app.use('/api/v1/tshirt',tshirtRoutes)


app.get('/', (req, res) => {
  res.status(200).json({ message: "Product 3D API 🚀" })
})

module.exports = app 