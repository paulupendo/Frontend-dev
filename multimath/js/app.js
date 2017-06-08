// Revealing Module Pattern
/*
// Immediately Invoked Function Expression
(function () {
   console.log('multimath IIFE    starting');
   // add click handler to the start game button    
   document.getElementById('startGame').addEventListener('click', function () {
       player.setName(document.getElementById('playername').value);
       game.printGame();
    });
    // add click handler to the calculate score button
    document.getElementById('calculate').addEventListener('click', function () {
        game.calculateScore();
    });
    // set the default number of problems
    document.getElementById('problemCount').value = game.getProblemCount();
}());
*/

// AMD Format wit requirejs

define(['./player', './game'], function(player, game){ 
   console.log('Loading module with requirejs ');
   // add click handler to the start game button    
   document.getElementById('startGame').addEventListener('click', function () {
       player.setName(document.getElementById('playername').value);
       game.printGame();
    });
    // add click handler to the calculate score button
    document.getElementById('calculate').addEventListener('click', function () {
        game.calculateScore();
    });
    // set the default number of problems
    document.getElementById('problemCount').value = game.getProblemCount(); 
});