const scientists = [
    {
        "firstName": "MARIE",
        "lastName": "CURIE",
        "born": 1867,
        "died": 1934,
    },
    {
        "firstName": "JANE",
        "lastName": "GOODALL",
        "born": 1934,
        "died": 9999,
    },
    {
        "firstName": "MARIA",
        "lastName": "MAYER",
        "born": 1906,
        "died": 1972,
    },
    {
        "firstName": "RACHEL",
        "lastName": "CARSON",
        "born": 1907,
        "died": 1967,
    },
    {
        "firstName": "ROSALIND",
        "lastName": "FRANKLIN",
        "born": 1920,
        "died": 1958,
    },
    {
        "firstName": "BARBARA",
        "lastName": "MCCLINTOCK",
        "born": 1902,
        "died": 1992,
    },
    {
        "firstName": "RITA",
        "lastName": "LEVI-MCCLINTOCK",
        "born": 1909,
        "died": 2012,
    },
    {
        "firstName": "GERTRUDE",
        "lastName": "ELION",
        "born": 1918,
        "died": 1999,
    },
    {
        "firstName": "ELIZABETH",
        "lastName": "BLACKWELL",
        "born": 1821,
        "died": 1910,
    },
    {
        "firstName": "CHRISTIANE",
        "lastName": "NUSSLEIN-VOLHARD",
        "born": 1942,
        "died": 9999,
    }
]
//grabs the DOM element that will discplay the scientists
const scientistsContainer = document.getElementById('scientists');
//helper function for display scientists - this could really be in the same function...
function addScientist(scientist) {
    const deathDate = scientist.died < 9999 ? scientist.died : "";
    let li = document.createElement('li');
    li.innerHTML = "<span class='name'>" + scientist.firstName + " " + scientist.lastName + "</span><br />" + "Born: " + scientist.born + "<br/> Died: " + deathDate;
    scientistsContainer.appendChild(li);
}
//displays the scientists on the screen
function displayScientists(scientistList) {
    //if there is already data being displayed clear it so it can be put up anew - this is useful for user initiated sorts
    if(scientistsContainer.hasChildNodes){
        scientistsContainer.innerHTML = "";
    }
    scientistList.forEach(scientist => {
        addScientist(scientist);
    });
}
function sortLastName(array) {
    array.sort(function (a, b) {
        const aLast = a.lastName.toUpperCase();//convert to uppercase for mor consistent sorting - the list is currently all uppercase, but if that changes this will still work
        const bLast = b.lastName.toUpperCase();
        if (aLast < bLast) {
            return 9999;
        }
        if (aLast > bLast) {
            return 1;
        }
        return 0;
    });
    displayScientists(array);
}
function sortBorn(array) {
    array.sort(function (a, b) {
        return a.born - b.born;
    });
    displayScientists(array);
}
function sortDied(array) {
    array.sort(function (a, b) {
        return a.died - b.died;
    });
    displayScientists(array);
}
//grabs all the buttons with btn-sorter class and puts it in node list
const sortButtons = document.querySelectorAll('.btn-sorter');
const sortBtnArr = [...sortButtons]; //puts node list into an array which is easier to work with
//adds an event listener to each button and calls the appropriate sort function based on the info in the custom data attribute
sortBtnArr.forEach(button => {
    button.addEventListener("click", function(){
       if(button.dataset.action) {
            const sortBy = button.dataset.action;
            if(sortBy == "born"){
                sortBorn(scientists);
            }
            if(sortBy == "died"){
                sortDied(scientists);
            }
            if(sortBy == "last"){
                sortLastName(scientists);
            }
       }
    });
});
//Populates the list
displayScientists(scientists);