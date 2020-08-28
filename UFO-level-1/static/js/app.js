// from data.js
var tableData = data;

// YOUR CODE HERE!
function pageLoad()
{
    var content="";
    for (var i in tableData)
    {
        var row = `<tr><td class="table-row">${tableData[i].datetime}</td><td class="table-row">${tableData[i].city}</td><td class="table-row"${tableData[i].state}</td><td class="table-row">${tableData[i].country}</td><td class="table-row">${tableData[i].shape}</td><td class="table-row">${tableData[i].durationMinutes}</td><td class="table-row">${tableData[i].comments}</td></tr>`;
        content += row;        
    }

    $("#divTableBody").html(content);
}

function addNewRow(toggle)
{
    if (toggle===1)
       $("#divInputForm").show();
    else
        $("#divInputForm").hide();
}
function pushNewRow()
{
    var dt = $("#datetime2").val();
    var city = $("#city2").val();
    var state = $("#state2").val();
    var country = $("#country2").val();
    var shape = $("#shape2").val();
    var comments= $("#comments").val();
    var duration= $("#durationMinutes").val();

    data.push ({
        datetime: dt,
        city: city,
        state: state,
        country: country,
        shape: shape,
        durationMinutes: duration,
        comments: comments
    }
    );

    $("#datetime2").val("");
    $("#city2").val("");
    $("#state2").val("");
    $("#country2").val("");
    $("#shape2").val("");
    $("#durationMinutes").val("");       
    $("#comments").val("");     
    alert("row added");
    $("#divInputForm").hide();
}
function findByDate()
{
    var dt = document.getElementById("datetime").value;
    alert(dt);
    var content="";
    for (var i in tableData)
    {
        if (tableData[i].datetime===dt)
        {
            var row = `<tr><td class="table-row">${tableData[i].datetime}</td><td class="table-row">${tableData[i].city}</td><td class="table-row"${tableData[i].state}</td><td class="table-row">${tableData[i].country}</td><td class="table-row">${tableData[i].shape}</td><td class="table-row">${tableData[i].durationMinutes}</td><td class="table-row">${tableData[i].comments}</td></tr>`;
            content += row;        
        }
    }

    $("#divTableBody").html(content);    
}
/*
* Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`
  */
 function findByMultiple()
 {
     var dt = $("#datetime").val();
     var city = $("#city").val().toUpperCase();
     var state = $("#state").val();
     var country = $("#country").val().toUpperCase();
     var shape = $("#shape").val().toUpperCase();

    // alert("findByMultiple"+city);
     var content="";
     for (var i in tableData)
     {
         if (
             (tableData[i].datetime===dt||dt==="") &&
             (tableData[i].city.toUpperCase()===city||city==="") &&
             (tableData[i].state.toUpperCase()===state||state==="") &&
             (tableData[i].country.toUpperCase()===country||country==="") &&
             (tableData[i].shape.toUpperCase()===shape||shape==="")
         )
         {
             var row = `<tr><td class="table-row">${tableData[i].datetime}</td><td class="table-row">${tableData[i].city}</td><td class="table-row">${tableData[i].state}</td><td class="table-row">${tableData[i].country}</td><td class="table-row">${tableData[i].shape}</td><td class="table-row">${tableData[i].durationMinutes}</td><td class="table-row">${tableData[i].comments}</td></tr>`;
             content += row;        
         }
     }
     $("#datetime").val("");
     $("#city").val("");
     $("#state").val("");
     $("#country").val("");
     $("#shape").val("");     
     $("#divTableBody").html(content);    
 }
