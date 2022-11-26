// Day 3 Task:
// Question no:1 JSON iterate over all for loops (for, for-of,for-in, for-each)
// for loop progarm:
// var arr = [
//     {
//         "Name" : "John",
//         "Age" : "25",
//         "Gender" : "Male",
//         "Bloodgroup" : "A positive" ,       
//     },
//     {
//         "Name" : "Adam",
//         "Age" : "24",
//         "Gender" : "Male",
//         "Bloodgroup" : "b positive",
//     },
//     {
//         "Name" : "Rose",
//         "Age" : "22",
//         "Gender" : "FeMale",
//         "Bloodgroup" : "o positive",
//     },
//     {
//         "Name" : "Angel",
//         "Age" : "23",
//         "Gender" : "Female",
//         "Bloodgroup" : "A positive",
//     },
// ]
// for (var i = 0; i<arr.length; i++) {
//     console.log(arr[i].Name, arr[i].Age, arr[i].Gender, arr[i].Bloodgroup);
// }

//Output using for loop

// John 25 Male A positive
// script.js:31 Adam 24 Male b positive
// script.js:31 Rose 22 FeMale o positive
// script.js:31 Angel 23 Female A positive

// for-in program:
// var arr = [
//     {
//         "Name" : "John",
//         "Age" : "25",
//         "Gender" : "Male",
//         "Bloodgroup" : "A positive" ,       
//     },
//     {
//         "Name" : "Adam",
//         "Age" : "24",
//         "Gender" : "Male",
//         "Bloodgroup" : "b positive",
//     },
//     {
//         "Name" : "Rose",
//         "Age" : "22",
//         "Gender" : "FeMale",
//         "Bloodgroup" : "o positive",
//     },
//     {
//         "Name" : "Angel",
//         "Age" : "23",
//         "Gender" : "Female",
//         "Bloodgroup" : "A positive",
//     },
// ]
// for(var i in arr)
// {
//     console.log(arr[i]);
// }

//Output using for-in loop:
// ObjectAge: "25"Bloodgroup: "A positive"Gender: "Male"Name: "John"[[Prototype]]: Object
// script.js:70 ObjectAge: "24"Bloodgroup: "b positive"Gender: "Male"Name: "Adam"[[Prototype]]: Object
// script.js:70 ObjectAge: "22"Bloodgroup: "o positive"Gender: "FeMale"Name: "Rose"[[Prototype]]: Object
// script.js:70 

// for-of program:
// var arr = [
//     {
//         "Name" : "John",
//         "Age" : "25",
//         "Gender" : "Male",
//         "Bloodgroup" : "A positive" ,       
//     },
//     {
//         "Name" : "Adam",
//         "Age" : "24",
//         "Gender" : "Male",
//         "Bloodgroup" : "b positive",
//     },
//     {
//         "Name" : "Rose",
//         "Age" : "22",
//         "Gender" : "FeMale",
//         "Bloodgroup" : "o positive",
//     },
//     {
//         "Name" : "Angel",
//         "Age" : "23",
//         "Gender" : "Female",
//         "Bloodgroup" : "A positive",
//     },
// ]
// for(var i of arr)
// {
//     console.log(i,arr[i]);
// }

// output using for of loop
// {Name: 'John', Age: '25', Gender: 'Male', Bloodgroup: 'A positive'}Age: "25"Bloodgroup: "A positive"Gender: "Male"Name: "John"[[Prototype]]: Object undefined
// script.js:108 {Name: 'Adam', Age: '24', Gender: 'Male', Bloodgroup: 'b positive'} 
// script.js:108 {Name: 'Rose', Age: '22', Gender: 'FeMale', Bloodgroup: 'o positive'} 
// script.js:108 {Name: 'Angel', Age: '23', Gender: 'Female', Bloodgroup: 'A positive'} 




//Question no:2 create a own reume JSON Format:

// var myResume = [  {
//     "Basic" : {
//         "Name" : "ESAKKIRAJ K",
//         "Email" : "esakkiraj05@gmsil.com",
//         "Phone" : "9600251090"
//     },
//     "Location" : {
//         "Address" : "36, voc Nagar b colony",
//         "city" : "Tirunelveli",
//         "state" : "Tamilnadu",
//         "country" : "India"
//     },
//     "Woking Experience" : [ {
//         "Company Name" : "VALUE ASSOCIATES",
//         "Position" : "MANAGER",
//         "Starting Date" : "12-05-2019",
//         "Ending date" : "30-12-2022",
//         "Role" : "Manage the all kind of real estate properties and gain the lot of experince about the construction"
//     },
//  ],
//     "Education" : [ {
//         "Institution" : "University VOC college of Engineering",
//         "Year of passing" : "2014",
//         "Degree" : "Mechanical Engineering",
//         "CGPA" : "8.45"
//     },
// ],

//     "Languages Known" : [  {
//            "Language 1" : "English",
//            "Fluency" : "Basic",
//            "Language 2" : "Tamil",
//             "Fluency" : "Advance"
//     } 
// ],
//    "Skills" : ["Interpersonal skills","Quick leaner","Team orientation"]

// }
// ]
// console.log(myResume);