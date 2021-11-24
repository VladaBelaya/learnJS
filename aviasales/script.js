const       formSearch = document.querySelector('.form-search'),
       inputCitiesFrom = formSearch.querySelector('.input__cities-from'), 
    dropdownCitiesFrom = formSearch.querySelector('.dropdown__cities-from'),
         inputCitiesTo = formSearch.querySelector('.input__cities-to'),
      dropdownCitiesTo = formSearch.querySelector('.dropdown__cities-to'),
       inputDateDepart = formSearch.querySelector('.input__date-depart');
const city = ['Москва', 'Санкт-Петербург', 'Минск', 'Караганда', 'Челябинск', 'Керч', 'Волгоград', 'Самара', 'Днепропетровск', 'Екатеринбург', 'Одесса', 'Ухань', 'Шымкен', 'Нижний Новгород', 'Калининград', 'Вроцлав', 'Ростов-на-Дону']

inputCitiesFrom.addEventListener('input', () => {
   const filterCity = city.filter(item => {
      const fixItem = item.toLowerCase()
      return fixItem.includes(inputCitiesFrom.value)
   })
   console.log(filterCity)
})

    