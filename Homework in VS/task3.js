//Task1

function findDiv(a,b){
  if(a>b){
      c=b
  }
  else{c=a}

  while(c!=0)
  {
    if(a%c==0 && b%c==0){
      return c

    }
    else
      {
        c=c-1
      }
     
  }
  
}

let result1=findDiv(20,102);
console.log(result1);

//   //Task 2
function sumDigits(argument)
{ let rem=0
let sum=0;
while(argument>0){
    rem=argument%10;
    sum+=rem
    argument=parseInt((argument/10))
}
return(console.log(sum))
}

sumDigits(5236984);


// //task4

function sumOfNumbers(){
  let sum=0;
  for(let i=0; i<arguments.length; i++){
    sum+=arguments[i];
  }
  return sum
}

let Tush=sumOfNumbers.apply(null,[9,5,23,56, 563]);
console.log(Tush);

//TAsk 5

let  checkIfEven = number1 => {if(number1%2==0){
  return 'This number is Even'
}
else{
return 'This number is not Even'}
}

console.log(checkIfEven(115));