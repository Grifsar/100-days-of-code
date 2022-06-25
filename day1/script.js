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
        "died": -1,
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
        "died": -1,
    },

]

const scientistsContainer = document.getElementById('scientists');

function addScientist(scientist){
    const deathDate = scientist.died > -1 ? scientist.died : "";
    let li = document.createElement('li');
    li.innerHTML = "<span class='name'>" + scientist.firstName + " " + scientist.lastName + "</span><br />" + "Born: " + scientist.born + "<br/> Died: " + deathDate;
    scientistsContainer.appendChild(li);

}
scientists.forEach(scientist => {
   addScientist(scientist) ;
});
addScientist(scientists[0]);