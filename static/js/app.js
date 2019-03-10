// from data.js
let tableData = data;

//select the thead element using D3
let tHead = d3.select("thead");

// add iterate through each item in the tableData object
tableData.forEach((n) => {
    //add a new row to the table (as a "tr object")...
    let row = tHead.append("tr")
    //... and append a "cell" as a "td" object through the table...
    //... by iterating through each of the entries in each of the list items in the object
    Object.entries(n).forEach(([key,value]) => {
        tHead.append("td").text(value)
    });
});

let submit = d3.select("#filter-btn");

submit.on("click", function() {
    // Prevent the page from refreshing
    // when using a button with type=submit, it will try to submit the form and automatically reset it
    // in this scenario, we could prevent this by setting type=button, or by using the line below.
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node, then get the value property of the input element...
    // for each button element selected:

    //for the date
    let dateValue = d3.select("#datetime").property("value");

    //for the city
    let cityValue = d3.select("#citySelect").property("value");

    //for the state
    let stateValue = d3.select("#stateSelect").property("value");

    //for the Country
    let countryValue = d3.select("#countrySelect").property("value");

    //for the shape
    let shapeValue = d3.select("#shapeSelect").proprety("value");
  
    console.log(countryValue);
  });
  
// function filterState(inputData) {
//     return inputData.forEach((n) => {
//         n.state === "tx"
//     });
// };

// let filteredTable = tableData.filter(filterState);

// console.log(filteredTable);