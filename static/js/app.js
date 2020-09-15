//assign the data from `data.js` to a variable
var tableData = data;

//select the body of the table and set it to a variable
var tbody = d3.select("tbody");

//select both the reset button and the filter button
var button = d3.select("#filter-btn");

var reset = d3.select("#reset-btn");

//create a function (using an arrow function) to populate the table...this will populate upon load and button clicks.
function populateTable(dataset){

    //clear out the data that is already in the table
    tbody.html("");

    dataset.forEach((record) => {
        var row = tbody.append("tr");
        Object.entries(record).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        })
    });
}

//create a function that will run on a button click and will filter based on the input values
function runEnter(){

    //prevent default
    d3.event.preventDefault();

    //select the input elements for the three different filter options and get the raw HTML code
    var inputElement = d3.select("#datetime");
    var inputElement2 = d3.select("#statesearch");
    var inputElement3 = d3.select("#citysearch");

    //get the value property for each of the three filter options
    var inputDate = inputElement.property("value");
    var inputState = inputElement2.property("value");
    var inputCity = inputElement3.property("value");

    //establish the data that we are going to start filtering and set it to a variable
    var filteredData = tableData

    //overwrite the filtereData variable with the filter for each input value
    //if there is not input value for one of the filters it will just move to the next if statement
    if (inputDate) {

        filteredData = filteredData.filter(sighting => sighting.datetime===inputDate)
    }

    if (inputState) {

        filteredData = filteredData.filter(sighting => sighting.state===inputState)
    }

    if (inputCity) {

        filteredData = filteredData.filter(sighting => sighting.city===inputCity)
    }

    //check in the console to make sure our filtered data is correct
    console.log(filteredData)

    //call our populate table function inside this function so that it will replace the tabel with our filtered data
    populateTable(filteredData)
}

//using an event handler, create an arrow function that resets the table and populates it with our original data when the "reset" button is clicked
reset.on("click", (reset) => {
    populateTable(tableData);
    console.log("The table was reset");
})

//using an event handler, call the function that filters our data whenever someone clicks the "filter" button
button.on("click", runEnter);

//populate the table with the data upon opening the webpage
populateTable(tableData)
