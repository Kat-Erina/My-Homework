//Task 2

let numbersArray=[0,6,4,2,6,9,8,4];

let reul=[];

function lets(numbers){
for(let i=0; i<numbers.length; i++){
    if(numbers[i]%2===0 && numbers[i+1]%2===0){
         reul.push(numbers[i]+'-')
    }
    else{reul.push(numbers[i])}
}return reul.join('')
}

let result107=lets(numbersArray);
console.log(result107);


//TAsk3

let array1=[2,4,6,8,10, 10, 8];
let array2= [3,5,7,8,9,10, 5,10];
let result=[];

    for(let i=0; i<array1.length; i++){
        if(result.indexOf(array1[i])===-1){
            result.push(array1[i])
        }
    }
    for(let i=0; i<array2.length; i++){
        if(result.indexOf(array2[i])===-1){
            result.push(array2[i])
        }
    }

console.log(result);

//Task4

let array=[
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];


//meore versıa!!!
// let result202=array.map(function(person){
//     return `<h1>${person.name}</h1><h2>${person.age}</h2>`
// })
// console.log(result202);


function readyToPutInTheDOM(param){
    let sth=param.map(function (element){
        return `<h1>${element.name}</h1><h2>${element.age}</h2>`
    })
  return sth
}

let sb=readyToPutInTheDOM(array);
console.log(sb);


//Task5// Not finished

let numbersArray2=[2,5,3,1,7]; //5,3,2,1, (5-3)+(3-2)+(2-1)=4


function compare(a,b){
    return b-a
}
let result404=numbersArray2.sort(compare);

console.log(result404);



//Task 5-is #1









