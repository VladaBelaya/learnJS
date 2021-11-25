// ПОЛУЧАЕМ ЭЛЕМЕНТЫ СО СТРАНИЦЫ 
const       formSearch = document.querySelector('.form-search'),
       inputCitiesFrom = formSearch.querySelector('.input__cities-from'), 
    dropdownCitiesFrom = formSearch.querySelector('.dropdown__cities-from'),
         inputCitiesTo = formSearch.querySelector('.input__cities-to'),
      dropdownCitiesTo = formSearch.querySelector('.dropdown__cities-to'),
       inputDateDepart = formSearch.querySelector('.input__date-depart');
// ХРАНИМ ДАННЫЕ(ГОРОДА) В МАССИВЕ
const city = ['Москва', 'Санкт-Петербург', 'Минск', 'Караганда', 'Челябинск', 'Керч', 'Волгоград', 'Самара', 'Днепропетровск', 'Екатеринбург', 'Одесса', 'Ухань', 'Шымкент', 'Нижний Новгород', 'Калининград', 'Вроцлав', 'Ростов-на-Дону']
// ФУНКЦИЯ, КОТОРАЯ ПЕРЕБИРАЕТ МАССИВ CITY, ФОРМИРУЕТ НОВЫЙ МАССИВ С ПОМОЩЬЮ МЕТОДА FILTER() ИЗ ТЕХ ГОРОДОВ, КОТОРЫЕ СОДЕРЖАТ ПОДСТРОКУ, ВВЕДЕННУЮ ПОЛЬЗОВАТЕЛЕМ
// ДАЛЕЕ ПЕРЕБИРАЕМ НОВЫЙ МАССИВ И ФОРМИРУЕМ СПИСОК ИЗ ЭТИХ ГОРОДОВ.
const showCities = (input, list) => {
   list.textContent = ''
   if (input.value.trim() !== '') {
      const filterCity = city.filter(item => {
         const fixItem = item.toLowerCase()
         return fixItem.includes(input.value.toLowerCase())
      })

      filterCity.forEach(item => {
         const li = document.createElement('li')
         li.classList.add('dropdown__city')
         li.textContent = item
         list.append(li)
      })
   }

}
//  ФУНКЦИЯ, КОТОРАЯ ПО КЛИКУ НА ЭЛЕМЕНТ СПИСКА, ВСТАВЛЯЕТ НАЗВАНИЕ ГОРОДА В ИНПУТ И СКРЫВАЕТ СПИСОК
const handlerCity = (event, input, list) => {
   if(event.target.tagName.toLowerCase() === 'li') {
      input.value = event.target.textContent
      list.textContent = ''
   }
}

// ОБРАБОТЧИКИ СОБЫТИЙ
// ПОЯВЛЕНИЕ СПИСКА У ИНПУТА ОТКУДА
inputCitiesFrom.addEventListener('input', () => {
   showCities(inputCitiesFrom, dropdownCitiesFrom)
})

// ПОЯВЛЕНИЕ СПИСКА У ИНПУТА КУДА
inputCitiesTo.addEventListener('input', () => {
   showCities(inputCitiesTo, dropdownCitiesTo)
})

// ВСТАВКА ГОРОДА ПО КЛИКУ И УДАЛЕНИЕ СПИСКА У ИНПУТА ОТКУДА
dropdownCitiesFrom.addEventListener('click', event => {
   handlerCity(event, inputCitiesFrom, dropdownCitiesFrom)
})
// ВСТАВКА ГОРОДА ПО КЛИКУ И УДАЛЕНИЕ СПИСКА У ИНПУТА КУДА
dropdownCitiesTo.addEventListener('click', event => {
   handlerCity(event, inputCitiesTo, dropdownCitiesTo)
})

    