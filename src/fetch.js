const fetchHandle = (url) => {
  return fetch(url).then((response) => response.json());
};

const getVideo = () => {
  console.log('vedios');
  fetchHandle('https://event.navienhouse.com/sweetdreamstore/index.php/API/getVideo').then((json) => {
    console.log(json);
  });
};

getVideo();
