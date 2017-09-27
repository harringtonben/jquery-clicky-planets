"use strict";

require("./planets");
require("./event");

$("#showButton").click(() => {
    $("#planetHolder").text("Hello World");
});

$("#clearButton").click(() => {
    $("#planetHolder").empty();
});

