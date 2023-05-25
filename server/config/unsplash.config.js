const {createApi} = require('unsplash-js')
const {fetch} = import('node-fetch')
module.exports = createApi({
    accessKey:process.env.SPLASH_ACCESS_KEY,
    fetch:fetch
});