const headerSubtitleElem = document.querySelector('.header__subtitle');

const moveSubtitleRight = function () {
  let hash = window.location.hash.substring(1);
  if (hash === 'en') {
    headerSubtitleElem.style.left = '-18.5rem';
  } else if (hash === 'ru') {
    headerSubtitleElem.style.left = '-23rem';
  }
};

window.addEventListener('resize', function () {
  if (document.documentElement.clientWidth > 710) {
    moveSubtitleRight();
  } else {
    headerSubtitleElem.style.left = '0';
  }
});

// moveSubtitleRight();
