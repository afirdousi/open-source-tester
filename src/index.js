var clientNames = require('./client-names.json');
var randomName = require('unique-random-array');

module.exports = {
    all: clientNames,
    random:randomName(clientNames)
}