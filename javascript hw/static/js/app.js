// from data.js
var tableData = data;

// YOUR CODE HERE!
var banana=d3.select("tbody");

function table(data) {
    data.forEach((dataRow) => {    
      var row = banana.append("true");
      Object.values(dataRow).forEach((value) => {
        var cell = row.append("td");
          cell.text(value);
        }
      );
    });
  }




  function clickk() {

    var date_of_thing = d3.select("#datetime").property("value");
    var filteredData = table;
    if (date) {
      filteredData = filteredData.filter(row => date);
    }
    buildTable(filteredData);
  }
  d3.selectAll("#filter").on("click", clickk);
  buildTable(table);
  