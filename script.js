const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')
const API_KEY = "1f87e0063bfe4b8b082f95b9a3b6cafa"



const getData = () => {
    const city = input.value || 'London'
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=pl&units=metric`;
    fetch(URL)
        .then(resp => resp.json())
        .then(data => {
            humidity.textContent = data.main.humidity + '%'
            cityName.textContent = data.name
            temperature.textContent = Math.floor(data.main.temp) + '℃'
            weather.textContent = data.weather[0].main
            input.value = ''
            warning.textContent = ''
            getImg(data.weather[0].id)
        }).catch(() => warning.textContent = 'Wpisz poprawną nazwe miasta')



}


const getImg = (data) => {
    if (data > 800) {
        photo.setAttribute('src', './img/cloud.png')
    } else if (data === 800) {
        photo.setAttribute('src', './img/sun.png')
    }
    else if (data >= 200 && data < 300) {
        photo.setAttribute('src', './img/thunderstorm.png')
    }
    else if (data >= 300 && data < 400) {
        photo.setAttribute('src', './img/drizzle.png')
    } else if (data >= 500 && data < 600) {
        photo.setAttribute('src', './img/rain.png')
    } else if (data >= 600 && data < 700) {
        photo.setAttribute('src', './img/ice.png')
    } else if (data === 741) {
        photo.setAttribute('src', './img/fog.png')
    } else {
        photo.setAttribute('src', './img/unknown.png')
    }

}


const checkEnter = (e) => {
    if (e.key === 'Enter') {
        getData()
    }
}
getData()
input.addEventListener('keyup', checkEnter)
button.addEventListener('click', getData)



