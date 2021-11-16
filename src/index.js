const elLength = 6;
const rate = (1 / (elLength + 1)).toFixed(2);
let isMobileWidth = false;
let windowHeight = 0;
let windowWidth = 0;
let index = null;
document.onreadystatechange = function (e) {
  console.log('document.readyState', document.readyState);
  if (document.readyState === 'complete') {
    document.querySelector('.progress').style.display = 'none';
    document.body.style.overflowY = 'auto';
  }

  if(document.querySelector('.top_wrap h1') != null){
    document.querySelector('.top_wrap h1').innerHTML =
      '<img style="width: 72px; height: 22px; vertical-align: text-top;" src="/content/images/sweetdreamstore_new.png">';
  }
};

const agent = navigator.userAgent.toLowerCase();

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

if (!Element.prototype.append) {
  Element.prototype.append = Element.prototype.appendChild;
}

if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function () {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

const onScroll = () => {
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  isMobileWidth = windowWidth < 768;
  // console.log('isMobileWidth', isMobileWidth);
  if (isMobileWidth) {
    onScrollMobile();
  } else {
    onScrollPC();
  }
};

const onScrollPC = () => {
  console.log('scroll', windowWidth);
  const parallaxScrollHeight = 16000;
  const contentHeight = parallaxScrollHeight + windowHeight;
  const scaleStartPosition = 8000;
  const yOffset = (window.pageYOffset / contentHeight).toFixed(2);
  const newIndex = parseInt(yOffset / rate);
  if (index !== newIndex) {
    index = newIndex;
  }
  const positionY = window.pageYOffset;
  const unitNumber = contentHeight / elLength;
  const background = document.querySelector('.background');
  background.style.top = `-${positionY / 415}%`;

  const fadeContainer = document.querySelector('.fadeContainer');
  const layer0 = document.querySelector('.layer0');
  const layer1 = document.querySelector('.layer1');
  const layer2 = document.querySelector('.layer2');
  const layer3 = document.querySelector('.layer3');
  const layer4 = document.querySelector('.layer4');
  const layer5 = document.querySelector('.layer5');

  if ((navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || agent.indexOf('msie') != -1) {
    if (positionY > 1440) {
      fadeContainer.style.top = '27%';
    } else {
      fadeContainer.style.top = '42%';
    }

    if (positionY < 15000) {
      fadeContainer.style.transform = `translateY(0)`;
    }
  }

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
    const movePositionPixel = windowHeight * (layerPosition / 100);
    const translatNumber = layerPosition - (movePositionPixel * positionY) / (windowWidth * 60);
    if (translatNumber >= 0) {
      layer.style.transform = `translateY(${translatNumber}px)`;
    } else {
      layer.style.transform = `translateY(0)`;
    }

    // if (scaleStartPosition === 0 && layerPosition === 1600 && translatNumber * (windowWidth / windowHeight) <= 500) {
    //   scaleStartPosition = positionY;
    // } else {
    //   // scaleStartPosition = 0;
    // }
  };

  positionHandle(building1Layer, 700);
  positionHandle(building2Layer, 1000);
  positionHandle(building3Layer, 1300);
  positionHandle(building4Layer, 1600);

  const buildingLayerTopPosition = 100 - positionY / 40;
  layerBuildingContainer.style.top = `${buildingLayerTopPosition >= 0 ? buildingLayerTopPosition : 0}vh`;

  // console.log('positionY', positionY);
  const scaleMin = 1;
  const scaleMax = 1.3;
  // const scaleStartPosition = parallaxScrollHeight - 2500;
  const bottomPositionForScale = positionY - scaleStartPosition;
  const scale = scaleMin + bottomPositionForScale / 3000;
  const headerHeight = document.querySelector('.header_menu_wrap')
    ? document.querySelector('.header_menu_wrap').offsetHeight + 10
    : 0;
  const bottomPosition = positionY - (parallaxScrollHeight - windowHeight) - headerHeight;
  if (scaleStartPosition && scaleStartPosition <= positionY) {
    const minMaxScale = scale < scaleMin ? scaleMin : scale > scaleMax ? scaleMax : scale;
    if (parallaxScrollHeight - windowHeight <= positionY) {
      layerBuildingContainer.style.transform = `translateY(-${bottomPosition}px) scale(${minMaxScale})`;
      fadeContainer.style.transform = `translateY(-${bottomPosition}px)`;
    } else {
      layerBuildingContainer.style.transform = `scale(${minMaxScale})`;
    }
  } else {
    layerBuildingContainer.style.transform = null;
    fadeContainer.style.transform = null;
  }
};

const onScrollMobile = () => {
  const parallaxScrollHeight = document.querySelector('.parallaxScroll').offsetHeight;
  const contentHeight = parallaxScrollHeight + windowHeight;
  const ratio = windowWidth / windowHeight;
  const ratio2 = windowHeight / windowWidth;

  const positionY = window.pageYOffset;
  const unitNumber = contentHeight / elLength;
  const background = document.querySelector('.background');
  background.style.top = `-${positionY / 415}%`;

  const fadeContainer = document.querySelector('.fadeContainer');
  const layer0 = document.querySelector('.layer0');
  const layer1 = document.querySelector('.layer1');
  const layer2 = document.querySelector('.layer2');
  const layer3 = document.querySelector('.layer3');
  const layer4 = document.querySelector('.layer4');
  const layer5 = document.querySelector('.layer5');

  const fadeTiming = 400 * ratio;
  const fadeLong = 3.2 * ratio;
  layer0.style.opacity = fadeLong - (Math.abs(positionY - (fadeTiming - 100)) / (fadeTiming - 100)) * ratio;
  layer1.style.opacity = fadeLong - (Math.abs(positionY - unitNumber) / fadeTiming) * ratio;
  layer2.style.opacity = fadeLong - (Math.abs(positionY - unitNumber * 2) / fadeTiming) * ratio;
  layer3.style.opacity = fadeLong - (Math.abs(positionY - unitNumber * 3) / fadeTiming) * ratio;
  layer4.style.opacity = fadeLong - (Math.abs(positionY - unitNumber * 4) / fadeTiming) * ratio;
  layer5.style.opacity = -(fadeLong - ((positionY - unitNumber * 4.5) / fadeTiming) * ratio);

  const building1Layer = document.querySelector('.building1Layer');
  const building2Layer = document.querySelector('.building2Layer');
  const building3Layer = document.querySelector('.building3Layer');
  const building4Layer = document.querySelector('.building4Layer');
  const layerBuildingContainer = document.querySelector('.layerBuildingContainer');

  const positionHandle = (layer, layerPosition) => {
    const movePositionPixel = (layerPosition / 1000) * ratio;
    const translatNumber = layerPosition - ((movePositionPixel * positionY) / 3) * ratio;
    if (translatNumber >= 0) {
      layer.style.transform = `translateY(${translatNumber}px)`;
    } else {
      layer.style.transform = `translateY(0)`;
    }
  };

  positionHandle(building1Layer, windowHeight * 0.2);
  positionHandle(building2Layer, windowHeight * 0.4);
  positionHandle(building3Layer, windowHeight * 0.6);
  positionHandle(building4Layer, windowHeight * 0.8);

  const buildingLayerTopPosition = 0;
  layerBuildingContainer.style.top = `${buildingLayerTopPosition >= 0 ? buildingLayerTopPosition : 0}vh`;

  const scaleMin = 2;
  const scaleMax = 2.6;
  const headerHeight = document.querySelector('.header_menu_wrap')
    ? document.querySelector('.header_menu_wrap').offsetHeight + 10
    : 0;

  const scaleStartPosition = ratio2 > 2 ? (parallaxScrollHeight / 2.8) * ratio2 : (parallaxScrollHeight / 3.5) * ratio2;
  const bottomPositionForScale = positionY - scaleStartPosition;
  const scale = scaleMin + bottomPositionForScale / 3000;
  const bottomPosition = positionY - (parallaxScrollHeight - windowHeight) - headerHeight;
  console.log('position', positionY, scaleStartPosition, ratio2);

  if (scaleStartPosition && scaleStartPosition <= positionY) {
    const minMaxScale = scale < scaleMin ? scaleMin : scale > scaleMax ? scaleMax : scale;
    if (parallaxScrollHeight - windowHeight <= positionY) {
      layerBuildingContainer.style.transform = `translateY(-${bottomPosition}px) scale(${minMaxScale})`;
      fadeContainer.style.transform = `translateY(-${bottomPosition}px)`;
    } else {
      layerBuildingContainer.style.transform = `scale(${minMaxScale})`;
    }
  } else {
    layerBuildingContainer.style.transform = null;
    fadeContainer.style.transform = null;
  }
};

const onResize = () => {
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  isMobileWidth = windowWidth < 768;
  console.log('resize', windowWidth);
  const parallaxScrollHeight = document.querySelector('.parallaxScroll').offsetHeight;
  console.log('parallaxScrollHeight', parallaxScrollHeight);
  const youtubeContainer = document.querySelector('.youtubeContainer > img.youtubeFrame');
  const youtubeIframe = document.querySelector('.youtubeContainer > iframe');
  const containerWidth = isMobileWidth ? window.visualViewport.width - 20 : windowWidth * 0.36;
  console.log('containerWidth', containerWidth, isMobileWidth);
  const youtubeWidth = isMobileWidth ? window.visualViewport.width - 70 : windowWidth * 0.31;
  const youtubeHeight = isMobileWidth ? (window.visualViewport.width - 70) * (41 / 73) : windowWidth * 0.31 * (41 / 73);
  youtubeContainer.style.width = `${containerWidth}px`;
  youtubeIframe.width = `${youtubeWidth}px`;
  youtubeIframe.height = `${youtubeHeight}px`;
  onScroll();
};
window.addEventListener('scroll', onScroll);

// handle event
window.addEventListener('resize', onResize);
window.onload = () => {
  // let vh = window.innerHeight * 0.01;
  // document.documentElement.style.setProperty('--vh', `${vh}px`);

  onResize();
};

(() => {
  // const finger = document.querySelector('.fingerToggle');
  // finger.addEventListener('click', (event) => {
  //   const el = document.querySelector('.fingerFrame');
  //   el.classList.toggle('open');
  // });
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

  const alertArea = document.querySelector(`.alertMask`);
  const okButton = document.querySelectorAll(`.alertMask .alert .closeEvent`);
  okButton.forEach((item) => {
    item.addEventListener('click', (event) => {
      alertArea.style.display = 'none';
      document.body.style.overflowY = 'auto';
    });
  });

  const alertArea2 = document.querySelector(`.alertMask2`);
  const okButton2 = document.querySelectorAll(`.alertMask2 .alert .closeEvent`);
  okButton2.forEach((item) => {
    item.addEventListener('click', (event) => {
      alertArea2.style.display = 'none';
      document.body.style.overflowY = 'auto';
    });
  });

  const comingsoon = document.querySelectorAll(`.comingsoon`);
  comingsoon.forEach((item) => {
    item.addEventListener('click', () => {
      alertArea.style.display = 'flex';
      document.body.style.overflowY = 'hidden';
    });
  });

})();

// window.onload = function () {
//   setTimeout(function () {
//     scrollTo(0, 0);
//   }, 100);
// };

const starTwinkle = (num) => {
  const createStar = document.createElement('div');
  createStar.classList.add(`star`);
  createStar.classList.add(`star${num % 10}`);
  createStar.classList.add(`starRandom${num}`);

  const background = document.querySelector('.background');
  background.append(createStar);

  const topRandom = Math.random() * 100;
  const leftRandom = Math.random() * 100;
  const sizeRandom = Math.random() * (40 - 20) + 5;

  createStar.style.top = `${topRandom}vh`;
  createStar.style.left = `${leftRandom}vw`;
  createStar.style.width = `${sizeRandom}px`;
  createStar.style.height = `${sizeRandom}px`;
  setTimeout(() => createStar.remove(), (num % 10) * 200 + 2000);

  // const star = document.querySelector(`.starRandom${num}`);

  // star.style.top = `${topRandom}vh`;
  // star.style.left = `${leftRandom}vw`;
  // star.style.width = `${sizeRandom}px`;
  // star.style.height = `${sizeRandom}px`;
  // setTimeout(() => createStar.remove(), (num % 10) * 200 + 2000);
};

const randomTwinkle = (num) => {
  const interval = Math.random() * 2000;
  setTimeout(() => {
    starTwinkle(num);
  }, interval);
};

setInterval(() => {
  const starNumber = Math.floor(Math.random() * 100);
  randomTwinkle(starNumber);
}, 50);

window.console.log = (...message) => {
  // document.getElementById('log').innerHTML = message;
};
