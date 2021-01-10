'use strict';
var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyoo = new Store('Tokyoo', 3, 24, 1.2);
var dubai = new Store('Dubai', 38, 11, 3.7);
var lima = new Store('Lima', 2, 16, 4.6);
var paris = new Store('Paris', 20, 38, 2.3);
var newinput = new Store()
var totalperhour=['Total'];
var citynamearray = [seattle, tokyoo, dubai, lima, paris, 'Total'];
var hourarray = ['Location', '6 AM :', '7 AM :', '8 AM :', '9 AM :', '10 AM :', '11 AM :', '12 PM :', '1 PM :', '2 PM :', '3 PM :', '4 PM :', '5 PM :', '6 PM :', '7 PM :', 'Daily Location Total']
var loc = ['Seattle', '', 'Tokyoo', '', 'Dubai', '', 'Lima', '', 'Paris', '', 'Total'];
var j = 0;
var i = 0;
var s = 0;
var total = 0;
function Store(location, min, max, avg) {
  this.location = location;
  this.minvalue = min;
  this.maxvalue = max;
  this.avgvalue = avg;
}
Store.prototype.avgRandom = function () {
  var result = Math.floor(this.avgvalue * (Math.floor(Math.random() * (this.maxvalue - this.minvalue) + this.minvalue)));
  console.log(result);
  return result;
}
var parentElement = document.getElementById('totaltable');
var data = document.createElement('article');
parentElement.appendChild(data);
var table = document.createElement('table');
data.appendChild(table);
var fillheader=function(){
for (let hour = 0; hour <= hourarray.length; hour++) {
  var hourheader = document.createElement('th');
  hourheader.textContent = hourarray[hour];
  table.appendChild(hourheader);
}}

var filltable=function(){
  for (let i = 0; i < citynamearray.length -1; i++) {
    total = 0;
    var lastvar = 0
    var tablerow = document.createElement('tr');
    table.appendChild(tablerow);
    for (let j = 0; j <= hourarray.length -1; j++) {
      var cellindex = document.createElement('td');
      if (j == 0) {
        console.log(citynamearray[i].location);
        cellindex.textContent = citynamearray[i].location; 
        tablerow.appendChild(cellindex);} 
        else {
        var avgranperhour = citynamearray[i].avgRandom();
        cellindex.textContent = avgranperhour;
        tablerow.appendChild(cellindex);
        total += avgranperhour;
        totalperhour[j] = (totalperhour[j]  || 0) + avgranperhour;
        lastvar = avgranperhour;
        console.log('total =' + total);
      };
    };
    totalperhour[totalperhour.length -1] = totalperhour[totalperhour.length -1] + total - lastvar;
    console.log('total ='+totalperhour);
    cellindex.textContent = total;
  }
  }
  var fillfooter=function(){
    var footer =document.createElement('tfoot');
    var footerrow = document.createElement('tr');
   
    for (let hour = 0; hour <totalperhour.length; hour++) {
      var footerindex = document.createElement('td');
      footerindex.textContent=totalperhour[hour];
      footerrow.appendChild(footerindex);
    }
  footer.appendChild(footerrow);
table.appendChild(footer);}
fillheader();
filltable();
fillfooter();
////////////////////lab09
var addnewLocation = document.getElementById('addnewlocation');
var newtotal = 0;
addnewLocation.addEventListener('submit', function (event) {
  var newtotal = 0;
  event.preventDefault();
  var newlocationname = event.target.location.value;
  var newMin =Number(event.target.Min.value);
  var newMax =Number(event.target.Max.value);
  var newAvg =Number(event.target.Avg.value);
  console.log(newlocationname,newMin,newMax,newAvg);
  var newlocation = new Store(newlocationname, newMin, newMax, newAvg);
  var tr = document.createElement('tr');
  for (let j = 0; j < hourarray.length; j++) {
    var cellindex = document.createElement('td');
    if(j === 0){
      cellindex.textContent = newlocation.location;
    }else{
      var newavgranperhour = newlocation.avgRandom();
      cellindex.textContent = newavgranperhour;
      totalperhour[i+1] = totalperhour[i+1] + newavgranperhour;
      newtotal += newavgranperhour;
    }
    tr.appendChild(cellindex);
  };
  totalperhour[totalperhour.length -1] =  totalperhour[totalperhour.length -1] + newtotal;
  cellindex.textContent = newtotal;
  tr.appendChild(cellindex);
  table.appendChild(tr);
  table.deleteTFoot();
  fillfooter();
});
// // console.log('total =' + newtotal);
  // var tablenewrow = document.createElement('tr');
  // table.appendChild(tablenewrow);
// filltable();
// console.log(newavgTotal);
// consol.log(newlocationname.avgRandom());
// console.log(addnewLocation());
// console.log(seattle);
// console.log(seattle.avgvalue);
// console.log(tokyoo.avgvalue);
// console.log(seattle.avgRandom());
// console.log(hourarray);
// seattle.avgRandom();
 // <tfoot>
  // </tfoot>