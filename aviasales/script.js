const       formSearch = document.querySelector('.form-search'),
       inputCitiesFrom = formSearch.querySelector('.input__cities-from'), 
    dropdownCitiesFrom = formSearch.querySelector('.dropdown__cities-from'),
         inputCitiesTo = formSearch.querySelector('.input__cities-to'),
      dropdownCitiesTo = formSearch.querySelector('.dropdown__cities-to'),
       inputDateDepart = formSearch.querySelector('.input__date-depart');
const city = ['Москва', 'Санкт-Петербург', 'Минск', 'Караганда', 'Челябинск', 'Керч', 'Волгоград', 'Самара', 'Днепропетровск', 'Екатеринбург', 'Одесса', 'Ухань', 'Шымкен', 'Нижний Новгород', 'Калининград', 'Вроцлав', 'Ростов-на-Дону']
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

inputCitiesFrom.addEventListener('input', () => {
   showCities(inputCitiesFrom, dropdownCitiesFrom)
})

dropdownCitiesFrom.addEventListener('click', (event) => {
   if(event.target.tagName.toLowerCase() === 'li') {
      inputCitiesFrom.value = event.target.textContent
      dropdownCitiesFrom.textContent = ''
   }
})

    