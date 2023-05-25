const {createApi} = require('unsplash-js')
module.exports = createApi({
    accessKey:process.env.SPLASH_ACCESS_KEY,
});