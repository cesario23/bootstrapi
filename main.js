const mybutton = document.querySelector ('#button');
const URl = `https://dog.ceo/api/breeds/image/random`;
const myImage = document.querySelector ('#picture');
mybutton.addEventListener ('click', function (){
    fetch (URl)
      .then(function (data){
          console.log (data);
         return data.json ();
          
      })
      .then((response) => {
        console.log (response);
        myImage.src = response.message;
      })
})

const URL2 = 'https://goweather.herokuapp.com/weather/{city}'
const secondButton = document.querySelector ('#second-button')
secondButton.addEventListener ('click', function (){

    const input = document.querySelector ('#input');
    const inputtext = input.value;
    const newUrl = 'https://goweather.herokuapp.com/weather/' + inputtext;
       
    fetch (newUrl)
        .then (function (data){
            return data.json ();
        })
        .then ((response) => {
            console.log (response);
            const temperature = document.querySelector ('#temperature');
            const wind = document.querySelector ('#wind');
            const description = document.querySelector ('#description');
             temperature.innerText = response.temperature;
              wind.innerText = response.wind;
              description.innerText = response.description;
            const changeBackground = document.querySelector ('.api-section');
            if (temperature.innerText >= 23.5){
                changeBackground.style.background = 'assets/winter-img.jpeg';
            } else {
                changeBackground.style.background = 'assets/spring-img.jpeg'
            }
        })
})

const beer = 'https://api.punkapi.com/v2/beers/random'
const thirdButton = document.querySelector ('.btn');
thirdButton.addEventListener ('click', function (){
    console.log ('you click the button');
     fetch (beer)
      .then (function (data){
          console.log (data);
          return data.json ();
          console.log (data.json)
     })
      .then ((response) =>{
          console.log (response);
          const beerImage = document.querySelector ('.card-img-top')
          beerImage.src = response[0].image_url;
        
      })

})