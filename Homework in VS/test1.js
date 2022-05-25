// // Task 1 //
//
let person1=
    {
 name: 'Ana',
 age: 28
    };

let person2 =
    {
 name: 'Levan',
 age: 21
     };
let result2= person1.age-person2.age;

let result= `${person1.name} ${person2.name}-ze ${result2} tslit didia.`;
console.log(result);



//task2//


let students=['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den'];
console.log(students[4]);




// Task 4 gaketebulia

let fruits=["Banana", "Orange", "Apple", "Mango",2,12];

let i=0;
while(i<fruits.length)
{
 if(typeof fruits[i]=="string")
 {
  console.log(fruits[i])
  i++;
 }
}
//
//
//
// // Task 5
//
let numbers=[12,23,43,11,9,2,121,90];

for(let i=0; i<numbers.length; i++)
{
if(numbers[i]>31 && numbers[i]%2==0)
{
    console.log('Element is greater than provided value and is EVEN')
}
else if(numbers[i]<31 && numbers[i]%2 !=0){
    console.log('Element is less than provided value and is ODD')
}
}
//
//
// // Task 6// Done

const BREAKVALUE = 12;
let array = [41,31,81,9,2,12,71,21,32]

function arrayBreaker(BREAKVALUE,array)
{
 for(let i=0; i<array.length; i++)
  {
  let element= array[i];
  if(element !=BREAKVALUE)
  {
   console.log(element);
  }
  else
  {
   break;
  }
 }
}

arrayBreaker(BREAKVALUE,array);
