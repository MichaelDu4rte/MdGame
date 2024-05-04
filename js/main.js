function openGamePage(gameName) {
   
    const firstSlashIndex = window.location.href.indexOf("/", 8); 

    if (firstSlashIndex !== -1) {
        
        const baseUrl = window.location.href.substring(0, firstSlashIndex);
      
        window.location.href = `${baseUrl}/game-info.html?game=${gameName}`;
    } else {
        
        window.location.href = `game-info.html?game=${gameName}`;
    }
}

