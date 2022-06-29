
const { createProxyMiddleware} = require("http-proxy-middleware")
module.exports = app =>{
    app.use(
        createProxyMiddleware('/maps/api/place/nearbysearch/json?key=AIzaSyC68H9SdF9KiJWStgwPugHIgY_IILwefRo&location=-33.8670522,151.1957362&radius=5000&type=restaurant',
        {
            target:'https://maps.googleapis.com',
            changeOrigin:true
        })
    )
}