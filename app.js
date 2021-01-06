function Store(location, min, max, avg) {
  this.location = location;
  this.minvalue = min;
  this.maxvalue = max;
  this.avgvalue = avg;
}
Store.prototype.avgRandom = function () {
  return Math.floor(this.avgvalue * (Math.floor(Math.random() * (this.maxvalue - this.minvalue) + this.minvalue)));
}
var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyoo = new Store('Tokyoo', 3, 24, 1.2);
var dubai = new Store('Dubai', 38, 11, 3.7);
var lima = new Store('Lima', 2, 16, 4.6);
var paris = new Store('Paris', 20, 38, 2.3);
console.log(seattle);
console.log(seattle.avgvalue);
console.log(tokyoo.avgvalue);
var avgarray = [seattle.avgRandom(), tokyoo.avgRandom(), dubai.avgRandom(), lima.avgRandom(), paris.avgRandom()];
console.log(avgarray);
var citynamearray = ['Seattle', 'Tokyoo', 'Dubai', 'Lima', 'Paris', 'Totals'];
console.log(seattle.avgRandom());
seattle.avgRandom();
var hourarray = ['6 AM : ', '7 AM :', '8 AM : ', '9 AM : ', '10 AM : ', '11 AM : ', '12 PM : ', '1 PM : ', '2 PM : ', '3 PM : ', '4 PM : ', '5 PM : ', '6 PM : ', '7 PM : ', 'Daily Location Total']
console.log(hourarray);
var parentElement = document.getElementById('totaltable');
var data = document.createElement('article');
parentElement.appendChild(data);
var table = document.createElement('table');
data.appendChild(table);
var total = 0;
var j = 0;
for (let hour = 0; hour <= hourarray.length; hour++) {
  var hourheader = document.createElement('th');
  hourheader.textContent = hourarray[hour];
  console.log(table.appendChild(hourheader));
}
for (let i = 0; i < hourarray.length; i++) {
  var tablerow = document.createElement('tr');
  tablerow.textContent = hourarray[i];
  console.log(tablerow.textContent = hourarray[i]);
  for (j = 0; j < avgarray.length; j++) {
    var cellindex = document.createElement('td');
    cellindex.textContent = avgarray[j];
    console.log(cellindex.textContent = avgarray[j]);
    total = +avgarray[j];
  }
  avgarray[j - 1] = total;
}
