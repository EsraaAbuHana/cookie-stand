var seattleobject = {location :'Seattle', 'min-cast' : 23,
'max-cust':65,'Avg Cookie /Sales':6.3,getRandomInt :function () {
    let min = Math.ceil(this['min-cast']);
    let max = Math.floor(this['max-cust']);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
   ,avgrandom : function (){
      return this["Avg Cookie /Sales"]*this.getRandomInt() ;
  } 
}
var tokyoobject = {location :'Tokyo', 'min-cast' : 3,
'max-cust':24,'Avg Cookie /Sales':1.2,getRandomInt :function () {
    let min = Math.ceil(this['min-cast']);
    let max = Math.floor(this['max-cust']);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  ,avgrandom : function (){
    return this["Avg Cookie /Sales"]*this.getRandomInt() ;
}
}
var dubaieobject = {location :'Dubai', 'min-cast' : 38,
'max-cust':11,'Avg Cookie /Sales':3.7,getRandomInt :function () {
    let min = Math.ceil(this['min-cast']);
    let max = Math.floor(this['max-cust']);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  ,avgrandom : function (){
    return this["Avg Cookie /Sales"]*this.getRandomInt() ;
}
}
var parisobject = {location :'Paris', 'min-cast' : 20,
'max-cust':38,'Avg Cookie /Sales':2.3,function () {
    let min = Math.ceil(this['min-cast']);
    let max = Math.floor(this['max-cust']);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  ,avgrandom : function (){
    return this["Avg Cookie /Sales"]*this.getRandomInt() ;
}
}
var limaobject = {location :'Lima', 'min-cast' : 2,
arr:[],
'max-cust':16,'Avg Cookie /Sales':4.6,getRandomInt :function () {
    let min = Math.ceil(this['min-cast']);
    let max = Math.floor(this['max-cust']);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  ,avgrandom : function (){
    return this["Avg Cookie /Sales"]*this.getRandomInt() ;
}
}
var     par
var list= [seattleobject,tokyoobject,dubaieobject,parisobject,limaobject];
var hournum =[6,7,8,9,10,11,12,1,2,3,4,5,6,7]
var total=0
console.log(list);
console.log(hournum);
let ul = document.getElementById('list');
let p = document.getElementById('p')
for(let j=0;j<list.length;j++){
   
for(let i=0;i<hournum.length;i++){

var listhour = document.createElement('li');
let val = Math.round(list[j].avgrandom());
p.textContent ='This is The cookie number for '+list[i].Location;
console.log(val)
listhour.textContent = val;
ul.appendChild(listhour);
total=[]}
}