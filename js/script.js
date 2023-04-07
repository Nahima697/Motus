"user strict";
window.addEventListener('load', (e) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '11c7bfa248msh9a945279bd03d3dp19fdd3jsn04d3504c4322',
      'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
    }
  };
  
  fetch('https://random-words5.p.rapidapi.com/getMultipleRandom?count=5&wordLength=7', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
});

