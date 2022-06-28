    const nasaApiKey='bqcZop6SWgG0zUQUA7YwAah2yllPloUG9XJ9G5TN';
    const nasa = 'https://api.nasa.gov/';
    const photoDay = nasa + 'planetary/apod';
    const mars = nasa + 'mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=' + nasaApiKey;
    const today = new Date();
    const todayFormatted = today.getFullYear() + '-' + (today.getMonth()+1 > 9 ? today.getMonth()+1 : `0${today.getMonth()+1}`) + '-'+(today.getDate() > 9? today.getDate() : '0'+today.getDate());
    https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY

    // console.log(mars);
 
    document.querySelector('#photoDay').setAttribute("max", todayFormatted);
    document.querySelector('#photoDay').addEventListener("change",function(){
        console.log(this.value);
        getPhotoDay(this.value);
    });
    function randomDate(){
        let minDate = new Date('1995-06-20');
        randDate = new Date(Math.random() * (today - minDate) + minDate);
        console.log(Math.floor(Math.random() * (today - minDate) + minDate))
        console.log(`${randDate.getMonth()} ${randDate.getDate()} ${randDate.getFullYear()}`);
    }
    // async function getMarsData() {
    // }
    async function getPhotoDay(date){
        
        date = date || todayFormatted;
        const nasaResponse = await fetch(photoDay+`?date=${date}&api_key=${nasaApiKey}`);
        const nasaData = await nasaResponse.json();
        // console.log(nasaData);
        const photoContainer = document.querySelector('#container-photoDay');
        console.log(photoContainer);
        photoContainer.innerHTML = `<h3>${nasaData.title ? nasaData.title : 'Untitled'} by ${nasaData.copyright ? nasaData.copyright : 'unknown'}</h3>
        <img src="${nasaData.hdurl}" alt="" id="photoOfDay">
        <p>${nasaData.explanation}</p>`;
    }
    randomDate();
    getPhotoDay();

