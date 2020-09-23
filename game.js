console.log("Projeto Game");

//[Heroi]
const sprites = new Image();
sprites.src = "./img/starlord.png";

//[chao]
const sprites2 = new Image();
sprites2.src = "./img/sprite.png"

const canvas = document.querySelector("canvas");
const contexto = canvas.getContext("2d");

//[heroi]
const starlord = {
    spriteX: 0,
    spriteY: 0,
    largura: 128,
    altura: 128,
    x: 90,
    y: 90,
    desenha() {
        contexto.drawImage(
            sprites,
            starlord.spriteX, starlord.spriteY,
            starlord.largura, starlord.altura,
            starlord.x, starlord.y,
            starlord.largura, starlord.altura,
        );
    }
}

loop = () => {
    starlord.desenha();

    requestAnimationFrame(loop);

}
loop();