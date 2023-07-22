document.addEventListener("DOMContentLoaded", function () {
    // Defina as variáveis de jogo e personagem
    let player = document.getElementById("player");
    let gameContainer = document.getElementById("game-container");
    let isJumping = false;
    let gravity = 0.9;
    let playerBottom = 0;
    let jumpCount = 0;
    let cloudArray = [];

    // Adicione nuvens à tela
    function createClouds() {
        // Adicione o código para criar nuvens aleatoriamente no gameContainer
    }

    // Faça o personagem pular
    function jump() {
        // Se o personagem já estiver pulando ou atingir o limite de pulos, retorne
        if (isJumping || jumpCount === 2) return;
        isJumping = true;
        jumpCount++;
        let jumpInterval = setInterval(function () {
            if (playerBottom >= 250) {
                // Ajuste a altura final do pulo aqui (250 é um exemplo)
                clearInterval(jumpInterval);
                let fallInterval = setInterval(function () {
                    if (playerBottom <= 0) {
                        clearInterval(fallInterval);
                        isJumping = false;
                        jumpCount = 0;
                    }
                    playerBottom -= 5;
                    player.style.bottom = playerBottom + "px";
                }, 20);
            }
            playerBottom += 30;
            player.style.bottom = playerBottom + "px";
        }, 20);
    }

    // Controle o salto quando a tecla espaço for pressionada
    document.addEventListener("keydown", function (event) {
        if (event.code === "Space") {
            jump();
        }
    });

    // Adicione um loop do jogo (use requestAnimationFrame) para atualizar o jogo periodicamente
    function gameLoop() {
        // Adicione o código para atualizar o estado do jogo aqui (movimento das nuvens, detecção de colisões, etc.)
        // Verifique se o jogador colide com as nuvens e se cai do jogo

        requestAnimationFrame(gameLoop);
    }

    // Inicie o jogo
    createClouds();
    gameLoop();
});
