// Task 1

function tester(object){
    if(object.isItarable){
return console.log(object.sampleArray)}
    else {return console.log("provided array isn't itarable")}
};

let sampleObject = { 
    isItarable : false, 
    sampleArray : [12,63,21,34,98,57]
 };

 let result1 = tester(sampleObject);

// Task 2

function checkPythagoras(x,y,z){
    if (x**2+y**2==z**2 || y**2+z**2==x**2 || x**2+z**2==y**2)
    {
return true}
else
{return false
}
    }

let result2=checkPythagoras(3,4,5);
console.log(result2);

// Task 3

function minMax(numbers){
    return `Min value is ${Math.min(...numbers)} MAx Value is ${Math.max(...numbers)}`
}

let y = minMax([15,26,83,10,12]);


console.log(y);

//II method;

let numbers=[10,5,20,56,89];
function minMax(arr){
      let max=0;
      let min=arr[0];
      for(let i=0; i<arr.length;i++)
      {
    if(arr[i]>max)
    {
     max=arr[i]
  }
  if(arr[i]<min){
   min=arr[i]
  }
  }
    return `'max is ${max} and min is ${min}'`

}

let result=minMax(numbers);
console.log(result);


// Task 4


function checkAngle(degree){
    if(degree<90){
        return 'Acute angle: An angle between 0 and 90 degrees.'
    }
    else if(degree==90){
        return 'Right angle: An 90 degree angle.'
    }
    else if(degree>90 && degree<180){
        return 'Obtuse angle: An angle between 90 and 180 degrees.'
    }
    else if(degree==180){
        return 'Straight angle: A 180 degree angle.'
    }
}

let test= checkAngle(180);
console.log(test);
