// function load game dom
function loadGameInfo() {
   
    const urlParams = new URLSearchParams(window.location.search);
    const gameName = urlParams.get('game');

    // search game
    const game = gamesData.find(game => game.title === gameName);

  
    if (game) {

        // actualization dom game info
        document.getElementById("description").innerText = game.description;

        document.getElementById("game-image").src = game.imageUrl;
        document.getElementById("game-image-2").src = game.imageUrl2;
        document.getElementById("game-image-3").src = game.imageUrl3;
        document.getElementById("game-image-4").src = game.imageUrl4;
        document.getElementById("game-image-5").src = game.imageUrl5;

        const playLink = document.getElementById("link-game");
        playLink.href = game.playUrl;
    } else {
        console.error(`Jogo não encontrado: ${gameName}`);
    }
}


window.onload = function() {
    loadGameInfo();
};