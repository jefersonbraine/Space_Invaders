// * CODIGO INICIAL

const images = {};

const imagesToLoad = {
  player: "../images/player.png",
  enemyA1: "../images/enemyA1.png",
  enemyA0: "../images/enemyA0.png",
  enemyB0: "../images/enemyB0.png",
  enemyB1: "../images/enemyB1.png",
  enemyC0: "../images/enemyC0.png",
  enemyC1: "../images/enemyC1.png",
};

(function loadImages() {
  Object.keys(imagesToLoad).forEach((key) => {
    console.log(key);
  });

  const img = new Image();
  img.src = "../images/player.png";
  images["player"] = {
    image: img,
    isLoaded: false,
  };

  img.onload = () => {
    images[key].isLoaded = true;
  };
})();

// //abstrair de forma que tudo que está dentro de images to load irá funcionar




