    const nasaApiKey='bqcZop6SWgG0zUQUA7YwAah2yllPloUG9XJ9G5TN';
    const nasa = 'https://api.nasa.gov/';
    const photoDay = nasa + 'planetary/apod';
    // const mars = nasa + 'mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=' + nasaApiKey;
    const today = new Date(); //need this for the min date calculation in randomDate function
    const todayFormatted = formatDate4API(today); //JS hoists things, so this works even though the function hasn't been defined yet
    https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY

    // console.log(mars);
 
    document.querySelector('#photoDay').setAttribute("max", todayFormatted);
    document.querySelector('#photoDay').addEventListener("change",function(){
        console.log(this.value);
        getPhotoDay(this.value);
    });
    document.querySelector('#btn-randomPhoto').addEventListener("click", function(){
        randomDate();
    });
    function formatDate4API(date){
       return date.getFullYear() + '-' + (date.getMonth()+1 > 9 ? date.getMonth()+1 : `0${date.getMonth()+1}`) + '-'+(date.getDate() > 9? date.getDate() : '0'+date.getDate());
    }
    function randomDate(){
        let minDate = new Date('1995-06-20').getTime();
        const randDate = new Date(Math.random() * (today.getTime() - minDate) + minDate);  
        getPhotoDay(formatDate4API(new Date(randDate)));
    }
    // async function getMarsData() {
    // }
    async function getPhotoDay(date){//displays photo of the day
        date = date || todayFormatted;
        
        const nasaResponse = await fetch(photoDay+`?date=${date}&api_key=${nasaApiKey}`);
        const nasaData = await nasaResponse.json();
        const photoContainer = document.querySelector('#container-photoDay');
        //extract the parts of the date from the formatted date
        const pYear = nasaData.date.slice(0,4);
        const pMonth = nasaData.date.slice(5,7);
        const pDay = nasaData.date.slice(8,10)
        //display the photo pulled from the API
        if(nasaData.media_type == 'image') {
            photoContainer.innerHTML = `<h3>${nasaData.title ? nasaData.title : 'Untitled'} by ${nasaData.copyright ? nasaData.copyright : 'anonymous'}</h3>
            <p>Photo of the Day for: ${pMonth}/${pDay}/${pYear}</p>
            <img src="${nasaData.hdurl}" alt="" id="photoOfDay">
            <p>${nasaData.explanation}</p>`;
        } else {
            photoContainer.innerHTML = `<h3>Today's image of the day isn't actually an image</h3>`
        }
        
    }
    // randomDate();
    getPhotoDay();

