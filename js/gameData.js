// Dados dos jogos
const gamesData = [
    {
        title: "HANGMAN",
        description: "O jogo hangman, ou jogo da forca, é um jogo de palavras clássico e divertido, onde um jogador pensa em uma palavra e o outro jogador tenta adivinhar a palavra, uma letra de cada vez. O objetivo do jogador que tenta adivinhar é descobrir a palavra antes de completar o desenho de um enforcado. Se a letra não estiver na palavra, o desenhador começa a desenhar partes do enforcado (como cabeça, tronco, membros, etc.). ",
        imageUrl: "https://scontent.fnvt6-1.fna.fbcdn.net/v/t39.30808-6/302077251_416558703919002_1452287612852395618_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4hmir3GRKwAQ7kNvgH1c1xL&_nc_ht=scontent.fnvt6-1.fna&oh=00_AfCIAWqSdqgzrSd7Ck3eeKgb4LgiN-K7S5YdMLEvFUPBwA&oe=663C475F",
        imageUrl2: "https://scontent.fnvt6-1.fna.fbcdn.net/v/t39.30808-6/302077251_416558703919002_1452287612852395618_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4hmir3GRKwAQ7kNvgH1c1xL&_nc_ht=scontent.fnvt6-1.fna&oh=00_AfCIAWqSdqgzrSd7Ck3eeKgb4LgiN-K7S5YdMLEvFUPBwA&oe=663C475F",
        imageUrl3: "https://scontent.fnvt6-1.fna.fbcdn.net/v/t39.30808-6/302077251_416558703919002_1452287612852395618_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4hmir3GRKwAQ7kNvgH1c1xL&_nc_ht=scontent.fnvt6-1.fna&oh=00_AfCIAWqSdqgzrSd7Ck3eeKgb4LgiN-K7S5YdMLEvFUPBwA&oe=663C475F",
        imageUrl4: "https://scontent.fnvt6-1.fna.fbcdn.net/v/t39.30808-6/302077251_416558703919002_1452287612852395618_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4hmir3GRKwAQ7kNvgH1c1xL&_nc_ht=scontent.fnvt6-1.fna&oh=00_AfCIAWqSdqgzrSd7Ck3eeKgb4LgiN-K7S5YdMLEvFUPBwA&oe=663C475F",
        imageUrl5: "https://scontent.fnvt6-1.fna.fbcdn.net/v/t39.30808-6/302077251_416558703919002_1452287612852395618_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4hmir3GRKwAQ7kNvgH1c1xL&_nc_ht=scontent.fnvt6-1.fna&oh=00_AfCIAWqSdqgzrSd7Ck3eeKgb4LgiN-K7S5YdMLEvFUPBwA&oe=663C475F",
        playUrl: "games/hangman/hangman.html"
    },
    {
        title: "WORDLE",
        description: "O Wordle é um jogo de palavras simples, mas viciante, que desafia os jogadores a adivinharem uma palavra de cinco letras dentro de um número limitado de tentativas. Cada tentativa é marcada com cores para indicar letras corretas no lugar certo (geralmente em verde) e letras corretas no lugar errado (geralmente em amarelo).",
        imageUrl: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202201/wordle_og_1200x630-sixteen_nine.png?size=948:533",
        imageUrl2: "https://static01.nyt.com/images/2022/01/06/multimedia/03xp-wordle/03xp-wordle-superJumbo.png?quality=75&auto=webp",
        imageUrl3: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-01/wordle-inline1-AW-220105-1acb81.jpg",
        imageUrl4: "https://img.redbull.com/images/c_fill,g_auto,w_1000,h_1200/q_auto,f_auto/redbullcom/2022/10/13/bjotxtjhyvozxijibjb1/wordle-gaming-interview",
        imageUrl5: "https://media.phillyvoice.com/media/images/011322_Wordle.2e16d0ba.fill-735x490.png",
        playUrl: "games/wordle/wordle.html"
    },
    {
        title: "TETRIS",
        description: "O Tetris é um jogo de quebra-cabeça clássico onde o jogador manipula peças geométricas chamadas tetrominós, que são compostas por quatro quadrados. O Tetris é um jogo de raciocínio rápido e habilidade espacial, desafiando os jogadores a tomarem decisões rápidas para evitar o preenchimento da grade.",
        imageUrl: "https://img.odcdn.com.br/wp-content/uploads/2023/02/shutterstock_1797933301.jpg",
        imageUrl2: "https://i.guim.co.uk/img/media/25c98bc0fb58156ed5a517fb677257fb5145c11a/0_48_1200_720/master/1200.jpg?width=1900&dpr=2&s=none",
        imageUrl3: "https://s26162.pcdn.co/wp-content/uploads/2021/11/Tetris.jpg",
        imageUrl4: "https://img.era.id/9xPdLRVbmNowXFAljvsJ1fv6PxjUbCy8vE8Hq1TTedw/rs:fill:1280:720/g:sm/bG9jYWw6Ly8vcHVibGlzaGVycy8zOTYyMi8yMDIwMTAwNDExMjUtbWFpbi5qcGc.jpg",
        imageUrl5: "https://img.era.id/9xPdLRVbmNowXFAljvsJ1fv6PxjUbCy8vE8Hq1TTedw/rs:fill:1280:720/g:sm/bG9jYWw6Ly8vcHVibGlzaGVycy8zOTYyMi8yMDIwMTAwNDExMjUtbWFpbi5qcGc.jpg",
        playUrl: "#"
    },
];