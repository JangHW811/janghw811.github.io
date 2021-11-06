import "./styles.css";

const onScroll = () => {
  const positionY = window.pageYOffset;

  const background = document.querySelector(".background");
  background.style.backgroundPositionY = `${positionY / 2}px`;

  const layer1 = document.querySelector(".layer1");
  const layer2 = document.querySelector(".layer2");
  const layer3 = document.querySelector(".layer3");

  layer1.style.transform = `translateY(${positionY / 2}px) scaleX(${
    positionY / 100 + 1 > 9 ? 9 : positionY / 100 + 1
  })`;
  layer2.style.transform = `translateY(${positionY / 4}px) scaleX(${
    positionY / 200 + 1 > 4 ? 4 : positionY / 200 + 1
  })`;

  layer3.style.transform = `translateY(0px) rotateZ(${positionY / 2}deg)`;
  layer3.style.opacity = `${1 - (positionY - 1200) / 95}`;
  // layer3.style.transform = `translateY(${positionY / 8}px)`;
  if (positionY > 800) {
    layer3.style.transform = `translateY(${positionY - 800}px)`;
  }
};

window.addEventListener("scroll", onScroll);
