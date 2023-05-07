const buttonNow = document.querySelector('.tabs-button-now')
const buttonDetails = document.querySelector('.tabs-button-details');
const buttonForecast = document.querySelector('.tabs-button-forecast');

const areaNow = document.querySelector('.content-area_display-now');
const areaDetails = document.querySelector('.content-area_display-details');
const areaForecast = document.querySelector('.content-area_display-forecast');

const parentNow = document.querySelector('.content-area');
const tabDetails = document.querySelector('.tabs-button-details');




function tabDetailsOn() {
    areaNow.style.display = 'none';
    areaDetails.style.display = 'block'
    areaForecast.style.display = 'none';

    buttonNow.style['background-color'] = '#eeeeee';
    buttonNow.style.color = '#1a1a1a';
    buttonNow.style['border-bottom'] = '1.5px solid #292929';

    buttonDetails.style['background-color'] = '#1a1a1a';
    buttonDetails.style.color = '#eeeeee';

    buttonForecast.style['background-color'] = '#eeeeee';
    buttonForecast.style.color = '#1a1a1a';
};

function tabNowOn() {
    areaNow.style.display = 'block';
    areaDetails.style.display = 'none';
    areaForecast.style.display = 'none';

    buttonDetails.style['background-color'] = '#eeeeee';
    buttonDetails.style.color = '#1a1a1a';

    buttonNow.style['background-color'] = '#1a1a1a';
    buttonNow.style.color = '#eeeeee';

    buttonForecast.style['background-color'] = '#eeeeee';
    buttonForecast.style.color = '#1a1a1a';
};


function tabForecastOn() {
    areaNow.style.display = 'none';
    areaDetails.style.display = 'none';

    areaForecast.style.display = 'block';

    buttonNow.style['border-bottom'] = '1px solid #292929';

    buttonDetails.style['background-color'] = '#eeeeee';
    buttonDetails.style.color = '#1a1a1a';
    buttonDetails.style['border-left'] = '1px solid #292929';


    buttonNow.style['background-color'] = '#eeeeee';
    buttonNow.style.color = '#1a1a1a';

    buttonForecast.style['background-color'] = '#1a1a1a';
    buttonForecast.style.color = '#eeeeee';
   

}

buttonDetails.addEventListener('click', () => {
    tabDetailsOn();
});

buttonNow.addEventListener('click', () => {
    tabNowOn();
});

buttonForecast.addEventListener('click', () => {
    tabForecastOn();
})
