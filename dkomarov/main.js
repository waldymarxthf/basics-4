const button = document.querySelector('button');
const areaNow = document.querySelector('.container');
const parentNow = document.querySelector('.content-area');
const areaFor = document.querySelector('.content-area_display-forecast');
const tabNow = document.querySelector('.content-area_tabs-now');
const tabDetails = document.querySelector('.tabs-button');

function tabDetailsOn(areaNow, tabNow, tabDetails) {
    // areaNow.classList.add('area-now');
    areaNow.style.display = 'none';
    // const newElem = document.createElement('div');
    // newElem.classList.add('details');
    // parentNow.insertBefore(newElem, parentNow.firstChild);
    // areaFor.classList.add('area-forecast');
    tabNow.style['background-color'] = '#eeeeee';
    tabNow.style.color = '#1a1a1a';
    tabNow.style['border-bottom'] = '2px solid #292929';


    tabDetails.style['background-color'] = '#1a1a1a';
    tabDetails.style.color = '#eeeeee';
}

button.addEventListener('click', () => {
    tabDetailsOn(areaNow, tabNow, tabDetails);
    
});