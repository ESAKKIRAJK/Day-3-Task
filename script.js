// Day 3 tasks:
// Question 1: How to compare two json objects with same properties without ordering
function compareJSON(obj1, obj2) {
  const keys1 = Object.keys(obj1).sort();
  const keys2 = Object.keys(obj2).sort();

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let i = 0; i < keys1.length; i++) {
    const key1 = keys1[i];
    const key2 = keys2[i];

    if (key1 !== key2 || obj1[key1] !== obj2[key2]) {
      return false;
    }
  }
  return true;
}

const obj1 = { name: "Person1", age: 30 };
const obj2 = { age: 30, name: "Person1" };

const result = compareJSON(obj1, obj2);
console.log(result);


// Question 2: Use the restcountries API print the all country flags in console.
function printData() {
const countries = (JSON.parse(this.responseText));
for(var obj of countries ){
console.log(obj.flags.png);
  }
 
 }
var request = new XMLHttpRequest();
request.addEventListener ("load", printData);
request.open("GET" , "https://restcountries.com/v3.1/all");
request.send();


//Question no: 3 Use the restcountries API print the all country names,region,subregion and population.
function printData() {
const countries = (JSON.parse(this.responseText));
for(var obj of countries ) {
console.log(obj.name.common,obj.region,obj.subregion,obj.population);
    }
}
var request = new XMLHttpRequest();
request.addEventListener ("load", printData);
request.open("GET" , "https://restcountries.com/v3.1/all");
request.send();






























