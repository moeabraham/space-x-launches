//constant variables-data that never changes
const BASE_URL = 'https://api.spacexdata.com/v3/launches';
// CONST API_KEY = ''

// state variables-data that changes
let launches;
//Cached Element references- parts of the dom we need to touch 
const $launches = $('#launches');
// event listeners-capture and respond to events i.e. user clicks on some


// function-code that represents actions taked/carried out 

init();


function init(){
    getData();


}


function getData() {
    $.ajax(BASE_URL + "?limit=12")
        .then(function (data) {
            // console.log(data);
            launches = data;
            render();
        }, function (error) {
            console.log(error);
        });
}

function render(){
    // console.log(launches);
    const html = launches.map(function(launch){
        return `
        <article class="card">
            <h1>${launch.mission_name}</h1>
            <p>${launch.launch_year}</p>
        </article>
        `
    })
    $launches.append(html);
}
