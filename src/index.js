var clientNames = require('./client-names.json');
var randomName = require('unique-random-array');

var getRandomItem = randomName(clientNames);

module.exports = {
    all: clientNames,
    random:random,
    lastName:lastName,
    firstName:firstName

}

function random(number){


    if(number === undefined){
        return getRandomItem();
    }else{
        var randomItems = [];
        for(var i=0;i<number;i++){
            randomItems.push(getRandomItem());
        }
    }

    return randomItems;
}

function lastName(){
    return clientNames[clientNames.length-1];
}

function firstName(){
    return clientNames[0];
}