const { make } = require('./../index')

const routes = require('./routes')

const funci = make({
    static: "example/static",
    https: false
})

module.exports = funci(routes)