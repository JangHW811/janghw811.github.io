const elLength = 7;
const parallaxScrollHeight = 16000;
const contentHeight = parallaxScrollHeight + window.innerHeight;
const rate = (1 / (elLength + 1)).toFixed(2);
let index = null;
let scaleStartPosition = 0;

const onScroll = () => {
  const yOffset = (window.pageYOffset / contentHeight).toFixed(2);
  const newIndex = parseInt(yOffset / rate);
  if (index !== newIndex) {
    index = newIndex;
  }
  const positionY = window.pageYOffset;
  const unitNumber = contentHeight / elLength;
  const background = document.querySelector('.background');
  background.style.top = `-${positionY / 415}%`;

  const layer0 = document.querySelector('.layer0');
  const layer1 = document.querySelector('.layer1');
  const layer2 = document.querySelector('.layer2');
  const layer3 = document.querySelector('.layer3');
  const layer4 = document.querySelector('.layer4');
  const layer5 = document.querySelector('.layer5');

  const fadeTiming = 400;
  const fadeLong = 2.7;
  layer0.style.opacity = fadeLong - Math.abs(positionY - (fadeTiming - 100)) / (fadeTiming - 100);
  layer1.style.opacity = fadeLong - Math.abs(positionY - unitNumber) / fadeTiming;
  layer2.style.opacity = fadeLong - Math.abs(positionY - unitNumber * 2) / fadeTiming;
  layer3.style.opacity = fadeLong - Math.abs(positionY - unitNumber * 3) / fadeTiming;
  layer4.style.opacity = fadeLong - Math.abs(positionY - unitNumber * 4) / fadeTiming;
  layer5.style.opacity = -(fadeLong - (positionY - unitNumber * 4.5) / fadeTiming);

  const building1Layer = document.querySelector('.building1Layer');
  const building2Layer = document.querySelector('.building2Layer');
  const building3Layer = document.querySelector('.building3Layer');
  const building4Layer = document.querySelector('.building4Layer');
  const layerBuildingContainer = document.querySelector('.layerBuildingContainer');

  const positionHandle = (layer, layerPosition) => {
    const movePositionPixel = window.innerHeight * (layerPosition / 100);
    const translatNumber = layerPosition - (movePositionPixel * positionY) / (window.innerWidth * 60);
    if (translatNumber >= 0) {
      layer.style.transform = `translateY(${translatNumber}px)`;
    } else {
      layer.style.transform = `translateY(0)`;
    }

    if (scaleStartPosition === 0 && layerPosition === 1600 && translatNumber * (window.innerWidth / window.innerHeight) <= 500) {
      scaleStartPosition = positionY;
    }
  };

  positionHandle(building1Layer, 700);
  positionHandle(building2Layer, 1000);
  positionHandle(building3Layer, 1300);
  positionHandle(building4Layer, 1600);

  const buildingLayerTopPosition = 100 - positionY / 40;
  layerBuildingContainer.style.top = `${buildingLayerTopPosition >= 0 ? buildingLayerTopPosition : 0}vh`;

  // const scaleStartPosition = parallaxScrollHeight - 2500;
  const bottomPositionForScale = positionY - scaleStartPosition;
  const scale = 1 + bottomPositionForScale / 3000;
  const bottomPosition = positionY - (parallaxScrollHeight - window.innerHeight);
  if (scaleStartPosition && scaleStartPosition <= positionY) {
    const minMaxScale = scale < 1 ? 1 : scale > 1.3 ? 1.3 : scale;
    if (parallaxScrollHeight - window.innerHeight <= positionY) {
      layerBuildingContainer.style.transform = `translateY(-${bottomPosition}px) scale(${minMaxScale})`;
      layer5.style.transform = `translateY(-${bottomPosition}px)`;
    } else {
      layerBuildingContainer.style.transform = `scale(${minMaxScale})`;
    }
  } else {
    layerBuildingContainer.style.transform = null;
    layer5.style.transform = null;
  }
};

const onResize = () => {
  const youtubeContainer = document.querySelector('.youtubeContainer > img.youtubeFrame');
  const youtubeIframe = document.querySelector('.youtubeContainer > iframe');
  console.log('window.innerWidth', window.innerWidth);
  youtubeContainer.style.width = `${window.innerWidth * 0.56}px`;
  youtubeIframe.width = `${window.innerWidth * 0.49}px`;
  youtubeIframe.height = `${window.innerWidth * 0.49 * (42 / 73)}px`;
  onScroll();
};
onResize();
window.addEventListener('scroll', onScroll);

// handle event
window.addEventListener('resize', onResize);

(() => {
  const finger = document.querySelector('.fingerToggle');
  finger.addEventListener('click', (event) => {
    const el = document.querySelector('.fingerFrame');
    el.classList.toggle('open');
  });
  const peopleContainer = document.querySelector('.peopleContainer');

  const human = peopleContainer.querySelectorAll('.humanContainer');

  human.forEach((item, index) =>
    item.addEventListener('click', (event) => {
      human.forEach((item) => {
        item.classList.remove('active');
      });
      // const human = target.parent();
      // const human = event.target;

      event.target.parentElement.classList.add('active');
      const cardList = document.querySelectorAll(`.cardContainer > img`);

      cardList.forEach((card, cardIndex) => {
        // console.log('card', card, index, cardIndex);
        if (index === cardIndex) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    }),
  );
})();
