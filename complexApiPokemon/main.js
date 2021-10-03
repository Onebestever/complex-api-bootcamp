document.querySelector('button').addEventListener('click',getPoke)
function getPoke(){
  
 const pokeType = document.querySelector('input').value
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeType}`)    //the value of this variable is now being attached to the link      //this link doesnt change because allof the memes are stord in this array // note* if this was outside input wpuld be blank b/v it would load as the page loads
   .then(res => res.json())                                      //whatever you put in the input is now that
   .then(data => {
     console.log(data)
     console.log(data.abilities[0].ability.name) // show name of the 1st ability
       document.querySelector('p').innerText=data.abilities[0].ability.name
       document.querySelector('#nameP').innerText=data.name
       document.querySelector('#name').innerText=data.moves[0].move.name
         let samekh = data.species.name
         fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=914a17f6eefcd9ede26d1435e6953702&format=json&nojsoncallback=1&text=${samekh}&extras=url_o`)
         .then(res => res.json())                                      //whatever you put in the input is now that
         .then(data => {
           console.log(data.photos.photo[0].url_o)
           document.querySelector('img').src = data.photos.photo[0].url_o

         })
           
   })
 }
