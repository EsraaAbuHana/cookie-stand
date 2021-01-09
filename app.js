'use strict';
var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyoo = new Store('Tokyoo', 3, 24, 1.2);
var dubai = new Store('Dubai', 38, 11, 3.7);
var lima = new Store('Lima', 2, 16, 4.6);
var paris = new Store('Paris', 20, 38, 2.3);
var newinput = new Store()
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
for (i = 0; i <= citynamearray.length; i++) {
  var tablerow = document.createElement('tr');
  table.appendChild(tablerow);
  for (j = 0; j <= hourarray.length; j++) {
    var avgranperhour = citynamearray[i].avgRandom();
    var cellindex = document.createElement('td');
    cellindex.textContent = avgranperhour;
    if (j == 0) { cellindex.textContent = loc[s]; tablerow.appendChild(cellindex); j++; s++; } else {
      tablerow.appendChild(cellindex);
      console.log(cellindex.textContent);
    }
    total += avgranperhour;
    console.log('total =' + total);
  }
  s++;
  cellindex.textContent = total;
}
}
fillheader();
filltable();
///////lab09
/////////////
var addnewLocation = document.getElementById('addnewlocation');

addnewLocation.addEventListener('submit', function (event) {
  event.preventDefult();
  var newlocationname = event.target.location.value;
  var newMin = event.target.Min.value;
  var newMax = event.target.Max.value;
  var newAvg = event.target.Avg.value;
  var newlocation = new Store(newlocationname, newMin, newMax, newAvg);
  console.log(newavgTotal);
  newlocation.filltable();
});
  var tablenewrow = document.createElement('tr');
  table.appendChild(tablenewrow);
  var newtotal = 0;
  for (let j = 0; j <= hourarray.length; j++) {
    var newavgranperhour = newlocation.avgRandom();
    var cellindex = document.createElement('td');
    cellindex.textContent = newavgranperhour;
    newtotal += newavgranperhour;
    console.log('total =' + newtotal);
    cellindex.textContent = newtotal;
  }
consol.log(newlocationname.avgRandom());
console.log(addnewLocation());
console.log(seattle);
console.log(seattle.avgvalue);
console.log(tokyoo.avgvalue);
console.log(seattle.avgRandom());
console.log(hourarray);
seattle.avgRandom();


