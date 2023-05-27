const app = require('./app')
require('dotenv').config()

app.listen(process.env.PORT || 5000, () =>{
    console.log(`Server Connected On ${process.env.PORT}`)}
)