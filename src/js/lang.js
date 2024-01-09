const langs = {
  'try-it': {
    ru: 'попробуй!',
    en: 'try it!',
  },
}

const langToolRuEl = document.querySelector('[data-lang="ru"]');
const langToolEnEl = document.querySelector('[data-lang="en"]');

function toggleLangOnRU() {
  if (!langToolRuEl.classList.contains('toolbar--active')) {
    langToolRuEl.classList.add('toolbar--active');
  }
  langToolEnEl.classList.remove('lang-tool--active');
}

function toggleLangOnEN() {
  if (!langToolEnEl.classList.contains('toolbar--active')) {
    langToolEnEl.classList.add('toolbar--active');
  }
  langToolRuEl.classList.remove('lang-tool--active');
}

const allLangs = ['ru', 'en'];














function changeLang() {

  let hash = window.location.hash;

  hash = hash.substring(1);

  if (hash === 'ru') {
    toggleLangOnRU();
  } else if (hash === 'en') {
    toggleLangOnEN();
  }

  if (!allLangs.includes(hash)) {

    location.href = window.location.pathname + '#ru';

    location.reload();
  }

  for (let key in langs) {

    let elem = document.querySelector('.lang-' + key);

    if (elem && langs[key][hash]) {
      elem.innerHTML = langs[key][hash];
    }
  }
}
changeLang();
