const nasaApiKey = 'bqcZop6SWgG0zUQUA7YwAah2yllPloUG9XJ9G5TN';
const nasa = 'https://api.nasa.gov/';
const photoDay = nasa + 'planetary/apod';
// const mars = nasa + 'mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=' + nasaApiKey;
const today = new Date(); //need this for the min date calculation in randomDate function
const todayFormatted = formatDate4API(today); //JS hoists things, so this works even though the function hasn't been defined yet
https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY

// console.log(mars);
//Set max value for the date selector to today
document.querySelector('#photoDay').setAttribute("max", todayFormatted);
//add event listeners
document.querySelector('#photoDay').addEventListener("change", function () {
    getPhotoDay(this.value);
});
document.querySelector('#btn-randomPhoto').addEventListener("click", function () {
    randomDate();
});
//Helper function that correctly formats the date before it hits the API - YYYY-MM-DD
function formatDate4API(date) {
    return date.getFullYear() + '-' + (date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`) + '-' + (date.getDate() > 9 ? date.getDate() : '0' + date.getDate());
}
function randomDate() {
    let minDate = new Date('1995-06-20').getTime(); //first day with a photo of the day in milliseconds
    const randDate = new Date(Math.random() * (today.getTime() - minDate) + minDate); //makes sure that date is in range
    getPhotoDay(formatDate4API(new Date(randDate)));
}
async function getPhotoDay(date) {//displays photo of the day
    date = date || todayFormatted; //if date is provided, use today's date
    //fetch data from the API
    const nasaResponse = await fetch(photoDay + `?date=${date}&api_key=${nasaApiKey}`);
    //convert data to JSON to make it easier to interact with
    const nasaData = await nasaResponse.json();
    const photoContainer = document.querySelector('#container-photoDay');
    
    if (nasaData.code != null) {
        //a generic error message - could also print out the msg that the api provides if I really wanted to 
        photoContainer.innerHTML = `<h3 class="txt-danger">Something went wrong. Please make sure the date you entered is a date between <strong>June 20th, 1995 and today</strong></h3>`
    }
    else if (nasaData.media_type == 'image') {
        //extract the parts of the date from the formatted date
        const pYear = nasaData.date.slice(0, 4);
        const pMonth = nasaData.date.slice(5, 7);
        const pDay = nasaData.date.slice(8, 10)
        photoContainer.innerHTML = `
            <div class="container">
                <h3>${nasaData.title ? nasaData.title : 'Untitled'} by ${nasaData.copyright ? nasaData.copyright : 'anonymous'}</h3>
                <p>Photo of the Day for: ${pMonth}/${pDay}/${pYear}</p>
                <p>${nasaData.explanation}</p>
            </div>
            <img src="${nasaData.hdurl}" alt="" id="photoOfDay">`;//since I'm already printing the title and explanation on the page, I don't feel like I need to fill in the alt here as it would be redundant
    } else if (nasaData.media_type != 'image'){
        //displays this message if the media type for the day isn't an image
        photoContainer.innerHTML = `<h3>Today's image of the day isn't actually an image</h3>`
    }
}
getPhotoDay();
