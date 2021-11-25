// ПОЛУЧАЕМ ЭЛЕМЕНТЫ СО СТРАНИЦЫ 
const       formSearch = document.querySelector('.form-search'),
       inputCitiesFrom = formSearch.querySelector('.input__cities-from'), 
    dropdownCitiesFrom = formSearch.querySelector('.dropdown__cities-from'),
         inputCitiesTo = formSearch.querySelector('.input__cities-to'),
      dropdownCitiesTo = formSearch.querySelector('.dropdown__cities-to'),
       inputDateDepart = formSearch.querySelector('.input__date-depart');
//ДАННЫЕ
const citiesApi = 'https://api.travelpayouts.com/data/ru/cities.json'
const proxy = 'https://cors-anywhere.herokuapp.com/'
const API_KEY = '319699ed6be2962277bec99c563c49b5'
const calendar = 'http://min-prices.aviasales.ru/calendar_preload'
let city = []
// ФУНКЦИЯ, КОТОРАЯ ПЕРЕБИРАЕТ МАССИВ CITY, ФОРМИРУЕТ НОВЫЙ МАССИВ С ПОМОЩЬЮ МЕТОДА FILTER() ИЗ ТЕХ ГОРОДОВ, КОТОРЫЕ СОДЕРЖАТ ПОДСТРОКУ, ВВЕДЕННУЮ ПОЛЬЗОВАТЕЛЕМ
// ДАЛЕЕ ПЕРЕБИРАЕМ НОВЫЙ МАССИВ И ФОРМИРУЕМ СПИСОК ИЗ ЭТИХ ГОРОДОВ.
const showCities = (input, list) => {
   list.textContent = ''
   if (input.value.trim() !== '') {
      const filterCity = city.filter(item => {
         
         const fixItem = item.name.toLowerCase()
         return fixItem.includes(input.value.toLowerCase())
  
      })

      filterCity.forEach(item => {
         const li = document.createElement('li')
         li.classList.add('dropdown__city')
         li.textContent = item.name
         list.append(li)
      })
   }

}
//  ФУНКЦИЯ, КОТОРАЯ ПО КЛИКУ НА ЭЛЕМЕНТ СПИСКА, ВСТАВЛЯЕТ НАЗВАНИЕ ГОРОДА В ИНПУТ И СКРЫВАЕТ СПИСОК
const selectCity = (event, input, list) => {
   if(event.target.tagName.toLowerCase() === 'li') {
      input.value = event.target.textContent
      list.textContent = ''
   }
}

const getData = (url, callback) => {
   const request = new XMLHttpRequest();
   request.open('GET', url)
   request.addEventListener('readystatechange', () => {

      if(request.readyState !== 4 ) return;
      
      if(request.status === 200) {
         callback(request.response)
      } else {
         console.error(request.status)
      }
      
   })

   request.send()
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
   selectCity(event, inputCitiesFrom, dropdownCitiesFrom)
})
// ВСТАВКА ГОРОДА ПО КЛИКУ И УДАЛЕНИЕ СПИСКА У ИНПУТА КУДА
dropdownCitiesTo.addEventListener('click', event => {
   selectCity(event, inputCitiesTo, dropdownCitiesTo)
})

formSearch.addEventListener('submit', event => {
   event.preventDefault()
})


getData(proxy + citiesApi, data => {
  city = JSON.parse(data).filter(item => item.name)
   
})



// getData(proxy + 
//    calendar + 
//    '?depart_date=2020-05-25&origin=SVX&destination=KGD&one_way=true&token=' 
//    + API_KEY, 
//    (data) => {
//    const cheapTicket = JSON.parse(data).best_prices.filter(item => item.depart_date === '2020-05-25')
//    console.log(cheapTicket)
// })