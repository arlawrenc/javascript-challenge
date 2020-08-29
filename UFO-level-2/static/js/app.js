// from data.js
var tableData = data;

// YOUR CODE HERE!
function pageLoad()
{
    //alert("pageLoad");
    toggleDiv("divInputForm");
    
}

function toggleDiv(div) {
    var x = document.getElementById(div);
    //alert(x.style.display);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function addNewRow(flag)
{
   // alert("addNewRow");
    toggleDiv("divInputForm");
}
function pushNewRow()
{
    var dt = document.getElementById("datetime2").value;
    var city = document.getElementById("city2").value;
    var state = document.getElementById("state2").value;
    var country =document.getElementById("country2").value;
    var shape = document.getElementById("shape2").value;
    var comments= document.getElementById("comments").value;
    var duration= document.getElementById("durationMinutes").value;
//alert(city);
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

    document.getElementById("datetime2").value="";
    document.getElementById("city2").value="";
    document.getElementById("state2").value="";
    document.getElementById("country2").value="";
    document.getElementById("shape2").value="";
    document.getElementById("durationMinutes").value="";
    document.getElementById("comments").value="";
   
    alert("row added");
    toggleDiv("divInputForm");
}
function findByDate()
{
    var dt = document.getElementById("datetime").value;
  //  alert(dt);
    var content="";
    for (var i in tableData)
    {
        if (tableData[i].datetime===dt)
        {
            var row = `<tr><td class="table-row">${tableData[i].datetime}</td><td class="table-row">${tableData[i].city}</td><td class="table-row"${tableData[i].state}</td><td class="table-row">${tableData[i].country}</td><td class="table-row">${tableData[i].shape}</td><td class="table-row">${tableData[i].durationMinutes}</td><td class="table-row">${tableData[i].comments}</td></tr>`;
            content += row;        
        }
    }
  
    document.getElementById("divTableBody").innerHTML=content;    
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

    var dt = document.getElementById("datetime").value.toUpperCase();
    var city = document.getElementById("city").value.toUpperCase();
    var state = document.getElementById("state").value.toUpperCase();
    var country =document.getElementById("country").value.toUpperCase();
    var shape = document.getElementById("shape").value;

     var content="";
     for (var i in tableData)
     {
         if (
             (tableData[i].datetime==dt||dt=="") &&
             (tableData[i].city.toUpperCase()===city||city==="") &&
             (tableData[i].state.toUpperCase()==state||state=="") &&
             (tableData[i].country.toUpperCase()==country||country=="") &&
             (tableData[i].shape.toUpperCase()==shape||shape=="")
         )
         {
             //alert("found: "+tableData[i].city);
             var row = `<tr><td class="table-row">${tableData[i].datetime}</td><td class="table-row">${tableData[i].city}</td><td class="table-row">${tableData[i].state}</td><td class="table-row">${tableData[i].country}</td><td class="table-row">${tableData[i].shape}</td><td class="table-row">${tableData[i].durationMinutes}</td><td class="table-row">${tableData[i].comments}</td></tr>`;
             content += row;        
         }
     }
     //alert(content);
     document.getElementById("datetime").value="";
     document.getElementById("city").value="";
     document.getElementById("state").value="";
     document.getElementById("country").value="";
     document.getElementById("shape").value="";
     document.getElementById("divTableBody").innerHTML=content; 
  
 }
