if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/bigNumberAddition.js')
} else {
  module.exports = require('./dist/bigNumberAddition.min.js')
}