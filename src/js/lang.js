// const repeatElems = {
//   'some-repeated-class': {
//     ru: 'Произвольный текст',
//     en: 'Some text',
//   },
// };

// перебор массива langs
// for (let key in langs) {
//   // получение элементов в html, которые нужно перевести
//   let elem = document.querySelector('.lang-' + key);
//   // если элемент существует и язык для элемента прописан в объекте с переводом языков, то заменить содержание контента в элементе на тот контент, который взят из массива langs
//   if (elem && langs[key][hash]) {
//     elem.innerHTML = langs[key][hash];
//   }
// }

// for (let key in titles) {
//   let elem = document.querySelector('.lang-' + key);

//   if (elem && titles[key][hash]) {
//     elem.title = titles[key][hash];
//   }
// }

// for (let key in repeatTitles) {
//   let elems = document.querySelectorAll('.lang-' + key);

//   elems.forEach(function (elem) {
//     if (elem && repeatTitles[key][hash]) {
//       elem.title = repeatTitles[key][hash];
//     }
//   });
// }

//! Для плейсхолдеров

// for (let key in placeholders) {
//   let elemPlaceholder = document.querySelector('.lang-placeholder-' + key);

//   if (elemPlaceholder && placeholders[key][hash]) {
//     elemPlaceholder.placeholder = placeholders[key][hash];
//   }
// }

//! Для повторяющихся элементов
// for (let key in repeatElems) {
//   let elems = document.querySelectorAll(".lang-" + key)
//   elems.forEach(function (elem) {
//     if (elem && repeatElems[key][hash]) {
//       elem.innerHTML = repeatElems[key][hash]
//     }
//   })
// }

// for (let key in langs) {
//   let elem = document.querySelector('.lang-' + key);

//   if (elem && langs[key][hash]) {
//     elem.innerHTML = langs[key][hash];
//   }
// }

// for (let key in repeatElems) {
//   let elems = document.querySelectorAll('.lang-' + key);

//   elems.forEach(function (elem) {
//     if (elem && repeatElems[key][hash]) {
//       elem.innerHTML = repeatElems[key][hash];
//     }
//   });
// }
