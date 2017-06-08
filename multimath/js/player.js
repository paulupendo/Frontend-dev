//Revealing module pattern
/*
var player = (function () {
    var playerName = '';
    function logPlayer(){
        console.log('The current player is ' + playerName + '.');
    }
    function setName(newName) {
        playerName = newName;
    }
    function getName() {
        return playerName;
    }
    return {
        logPlayer: logPlayer,
        setName: setName,
        getName: getName
    };
}());
*/

//AMD format 
define([], function(){
    
    var playerName = '';
    function logPlayer(){
        console.log('The current player is ' + playerName + '.');
    }
    function setName(newName) {
        playerName = newName;
    }
    function getName() {
        return playerName;
    }
    return {
        logPlayer: logPlayer,
        setName: setName,
        getName: getName
    };   
     
});
