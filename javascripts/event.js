"use strict";

const planets = require("./planets");

$("#showButton").mouseover(() => {
    //all the planets to show
    createDomString(planets.getPlanets());
});

$("#clearButton").click(() => {
    let imageInfo = planets.getImageData();
    console.log(imageInfo);
    $("#planetHolder").html(`<h2>${imageInfo.title}</h2>`);
    $("#planetHolder").append(`<p>${imageInfo.explanation}</p>`);
});

$("#searchText").keypress((event) => {
    // console.log(event);
   if (event.key === 'Enter') {
       console.log($("#searchText").val());
    var txt = $("#searchText").val();
    let results = planets.getPlanets().filter((thing)=> {
        return thing.name.indexOf(txt)>-1;
    });
    createDomString(results);
    $(".planetName").removeClass("hidden");
   }   
});

const createDomString = (planetz) => {
    var planetString = '';
    for(var i=0; i<planetz.length; i++){
        var newPlanet = "";
        newPlanet+=`<div class="planetBox"  id="planetBox-${i}">`;
        newPlanet+=`<div class="planetName hidden">${planetz[i].name}</div>`;
        newPlanet+=`<img class="planetImage" src="${planetz[i].url}">`;
        newPlanet+= `</div>`;
        planetString += newPlanet;
    }
    printToDom(planetString);
};

const printToDom = (string) => {
    $("#planetHolder").html(string);
};

$("body").on("click",".planetImage", (event) =>{
    $(event.target).prev().removeClass("hidden");
});



module.exports = {};