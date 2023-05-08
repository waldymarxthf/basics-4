import {nowBtn, detailsBtn, forecastBtn, displayNow, displayDetails, displayForecast} from './assets/variables.js'



function buttonHandler(evt){
    evt.target.classList.add('active')
    if(evt.target === nowBtn){
        displayNow.style.display = 'block'
        detailsBtn.classList.remove('active')
        forecastBtn.classList.remove('active')
        displayDetails.style.display = 'none'
        displayForecast.style.display = 'none'

    }
    if(evt.target === detailsBtn){
        displayDetails.style.display = 'block'
        nowBtn.classList.remove('active')
        forecastBtn.classList.remove('active')
        displayNow.style.display = 'none'
        displayForecast.style.display = 'none'

    }
    if(evt.target === forecastBtn){
        displayForecast.style.display = 'block'
        detailsBtn.classList.remove('active')
        nowBtn.classList.remove('active')
        displayNow.style.display = 'none'
        displayDetails.style.display = 'none'

    }
}

nowBtn.addEventListener('click', buttonHandler)

detailsBtn.addEventListener('click', buttonHandler)

forecastBtn.addEventListener('click', buttonHandler)