    const nasaApiKey='bqcZop6SWgG0zUQUA7YwAah2yllPloUG9XJ9G5TN';
    const nasa = 'https://api.nasa.gov/';
    const photoDay = nasa + 'planetary/apod?api_key=' + nasaApiKey;
    const mars = nasa + 'mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=' + nasaApiKey;

    https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY

    console.log(mars);
    
    async function getMarsData() {
        
    }
    async function getPhotoDay(){
        const nasaResponse = await fetch(photoDay);
        const nasaData = await nasaResponse.json();
        console.log(nasaData);
        const photoContainer = document.querySelector('#container-photoDay');
        console.log(photoContainer);
        photoContainer.innerHTML = `<h3>${nasaData.title} by ${nasaData.copyright} taken on ${nasaData.date}</h3>
        <img src="${nasaData.hdurl}" alt="" id="photoOfDay">
        <p>${nasaData.explanation}</p>`;
    }
    getPhotoDay();

