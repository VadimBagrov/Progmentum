// Dinamic Matrix background

const s = window.screen;
const width = q.width = s.width;
const height = q.height = s.height;
const letters = Array(256).join(1).split('');

const draw = function () {
    q.getContext('2d').fillStyle="rgba(0,0,0,.05)";
    q.getContext('2d').fillRect(0,0,width,height);
    q.getContext('2d').fillStyle='#C2C2C2';
    letters.map(function(y_pos, index,){
        text = String.fromCharCode(65 + Math.random() * 33);
        x_pos = index * 10;
        q.getContext('2d').fillText(text, x_pos, y_pos);
        letters[index] = ( y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 10;
    });
};
setInterval(draw , 43);


// Date and time

setInterval(function() {
    const time = document.querySelector('.time') //Получаем time из html
    const date = new Date(); //Получаем текущую дату и время
    const currentTime = date.toLocaleTimeString(); //Получаем только время

    time.textContent = currentTime;
}, 1000) // Время

setInterval(function() {
    const dateNow = document.querySelector('.date')  //Получаем date из html
    date = new Date(); //Получаем текущую дату и время
    const options = { weekday: 'long', month: 'long', day: 'numeric' }; //опции для даты
    const currentDate = date.toLocaleDateString('en-Us', options); //текущая дата

    dateNow.textContent = currentDate;
}, 1000) //Дата и день недели


// Greetings
function getTimeOfDay() {
    date = new Date();
    const hours = date.getHours();
    const greeting = document.querySelector('.greeting')

    let timeOfDay = 6 < hours > 18 ? 'Day' : 'Night';

    const greetingText = `Good ${timeOfDay} ,`
    greeting.textContent = greetingText
}

setInterval(getTimeOfDay, 1000)

// Save name

function setLocalStorage() {
  localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage);
//Перед перезагрузкой или закрытием страницы (событие beforeunload) данные сохраняются

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}
//Перед загрузкой страницы (событие load) данные восстанавливаются и отображаются

window.addEventListener('load', getLocalStorage);
//localStorage.setItem - метод сохраняющий данные в localStorage. Два параметра метода: имя значения, которое сохраняется и само значение, которое сохраняется
//localStorage.getItem - метод получающий данные из localStorage. Параметр метода - имя, под которым сохраняется значение.

// Weather 

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
// Находим элементы показа погоды на странице из html

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Москва&lang=en&appid=df940439995b4c2ae3d3172ccc48f414&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  
  //Вывод погоды на страницы
  weatherIcon.className = 'weather-icon owf color-w';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
}
getWeather() // Функция получения погоды
