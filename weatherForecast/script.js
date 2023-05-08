window.addEventListener('DOMContentLoaded',() => {
    //tabs
    let tabs = document.querySelectorAll('.tabheader_item'),
        tabsContent = document.querySelectorAll('.wrapper-weather'),
        tabsParent = document.querySelector('.weather-items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.visibility = 'hidden';
        });
        tabsContent.forEach(item =>{
            item.classList.remove = '.tabheader_item_active';
        });
        }
    function showTabContent(i = 0) {
        tabsContent[i].style.visibility = 'visible';
        tabs[i].classList.add = 'tabheader_item_active';
    }
        hideTabContent();
         showTabContent();
        tabsParent.addEventListener('click',function(event){
            const target = event.target;
            if(target && target.classList.contains('tabheader_item')){
                tabs.forEach((item,i) =>{
                    if(target == item){
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
        const form = document.querySelector('.searching'),
        inputValue = document.querySelector('#search'),
        btnSend = document.querySelector('.btn-send');
        const cityName = document.querySelector('.city-name'),
        gradeCel=document.querySelector('.grade')
    async function f(url){
       try {let response = await fetch(url);
        let json = await response.json();
        gradeCel.textContent = `${json.main.temp}`
        cityName.textContent = `${json.name}`;
        
       } catch (error) {
        console.log(error);
       } 
        }
    form.addEventListener('submit',(event)=>{
        event.preventDefault();
    
        const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const cityName = inputValue.value;
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'; 
const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
    f(url) 
    })    




    });