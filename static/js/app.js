//assign the data from `data.js` to a variable
var tableData = data;

//select the button
var button = d3.select("#filter-btn");

//create event handlers
button.on("click", runEnter);

//complete the event handler function for the form
function runEnter(){

    //prevent default
    d3.event.preventDefault();

    //select the input element and get the raw HTML code
    var inputElement = d3.select("#datetime");

    //get the value property of the input element
    var inputValue = inputElement.property("value");

    //use the form input to filter the data by date

    var filteredData = tableData.filter(sighting => sighting.datetime===inputValue);

    








}
