/* Задания на урок: 

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

const ads = document.querySelectorAll('.promo__adv img')
const genre = document.querySelector('.promo__genre')
const promo_bg = document.querySelector('.promo__bg')
const films_sort = document.querySelectorAll('.promo__interactive-item')
const ulElement = document.querySelector('.promo__interactive-list');
const olElement = document.createElement('ol');

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

ads.forEach(ad => {
    ad.remove()
})

genre.innerHTML = 'драма'

promo_bg.style.backgroundImage = `url${'(./img/bg.jpg)'}`

movieDB.movies.forEach((film, idx) => {

    film.innerHTML = film[idx]
    const newfilm = document.createElement('li');
    newfilm.className = 'promo__interactive-item';
    newfilm.innerHTML = `${idx + 1}. ${film};`

    const deleteButton = document.createElement('div');
    deleteButton.className = 'delete';
    newfilm.appendChild(deleteButton);
    
    olElement.className = 'promo__interactive-list'
    olElement.appendChild(newfilm);
})


ulElement.parentNode.replaceChild(olElement, ulElement);