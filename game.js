console.log("Projeto Game");

//[Heroi]
const sprites = new Image();
sprites.src = "./img/starlord.png";

//[chao]
const sprites2 = new Image();
sprites2.src = "./img/sprites3.png";

//[plano de fundo]
const sprites3 = new Image();
sprites3.src = "./img/sprite4.png";

const canvas = document.querySelector("canvas");
const contexto = canvas.getContext("2d");

//[plano de fundo]
const planoDeFundo = {
  spriteX: 390,
  spriteY: 0,
  largura: 275,
  altura: 204,
  x: 0,
  y: canvas.height - 204,
  desenha() {
    contexto.fillStyle = "#191970";
    contexto.fillRect(0, 0, canvas.width, canvas.height);

    contexto.drawImage(
      sprites2,
      planoDeFundo.spriteX,
      planoDeFundo.spriteY,
      planoDeFundo.largura,
      planoDeFundo.altura,
      planoDeFundo.x,
      planoDeFundo.y,
      planoDeFundo.largura,
      planoDeFundo.altura
    );

    contexto.drawImage(
      sprites2,
      planoDeFundo.spriteX,
      planoDeFundo.spriteY,
      planoDeFundo.largura,
      planoDeFundo.altura,
      planoDeFundo.x + planoDeFundo.largura,
      planoDeFundo.y,
      planoDeFundo.largura,
      planoDeFundo.altura
    );

    contexto.drawImage(
      sprites2,
      planoDeFundo.spriteX,
      planoDeFundo.spriteY,
      planoDeFundo.largura,
      planoDeFundo.altura,
      planoDeFundo.x + planoDeFundo.largura * 2,
      planoDeFundo.y,
      planoDeFundo.largura,
      planoDeFundo.altura
    );

    contexto.drawImage(
      sprites2,
      planoDeFundo.spriteX,
      planoDeFundo.spriteY,
      planoDeFundo.largura,
      planoDeFundo.altura,
      planoDeFundo.x + planoDeFundo.largura * 3,
      planoDeFundo.y,
      planoDeFundo.largura,
      planoDeFundo.altura
    );
  },
};

//[chao]
const chao = {
  spriteX: 0,
  spriteY: 610,
  largura: 224,
  altura: 112,
  x: 0,
  y: canvas.height - 112,
  desenha() {
    contexto.drawImage(
      sprites2,
      chao.spriteX,
      chao.spriteY,
      chao.largura,
      chao.altura,
      chao.x,
      chao.y,
      chao.largura,
      chao.altura
    );

    contexto.drawImage(
      sprites2,
      chao.spriteX,
      chao.spriteY,
      chao.largura,
      chao.altura,
      chao.x + chao.largura,
      chao.y,
      chao.largura,
      chao.altura
    );

    contexto.drawImage(
      sprites2,
      chao.spriteX,
      chao.spriteY,
      chao.largura,
      chao.altura,
      chao.x + chao.largura * 2,
      chao.y,
      chao.largura,
      chao.altura
    );

    contexto.drawImage(
      sprites2,
      chao.spriteX,
      chao.spriteY,
      chao.largura,
      chao.altura,
      chao.x + chao.largura * 3,
      chao.y,
      chao.largura,
      chao.altura
    );
  },
};

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
      starlord.spriteX,
      starlord.spriteY,
      starlord.largura,
      starlord.altura,
      starlord.x,
      starlord.y,
      starlord.largura,
      starlord.altura
    );
  },
};

loop = () => {
  planoDeFundo.desenha();
  chao.desenha();
  starlord.desenha();

  requestAnimationFrame(loop);
};

loop();
