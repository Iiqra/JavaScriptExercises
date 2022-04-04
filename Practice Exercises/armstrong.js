function armstongNum( number ) {
    let numTOstr = number.toString().split( '' );
    let pow = Math.pow( numTOstr[ 0 ], 3 ) + Math.pow( numTOstr[ 1 ], 3 ) + Math.pow( numTOstr[ 2 ], 3 );
if ( pow === number) {
return `${number} is armstrong`
}
else
{
return `${number} is not armstrong`
}
}
console.log(armstongNum(153));
console.log(armstongNum(371));


//JavaScript function to generate a random integer
function randomNumber(min, max) {
    if (min==null && max==null)
      return 0;    
    
    if (max == null) {
        max = min;
        min = 0;
      }
      return min + Math.floor(Math.random() * (max - min + 1));
    };
   console.log(randomNumber(20,1));
   console.log(randomNumber(1,10));
   console.log(randomNumber(6));
   console.log(randomNumber());
   
   //console.log the index in each iteration
   
   function printArrayIndex(){
       const Planets = ["mercury", "venus", "earth", "mars", "jupiter"];

Planets.forEach((element,index) => console.log(element,index))
   }
   printArrayIndex()

  //Reject the promise if the number is even or not a number! 
  function myPromise(){
    return new Promise((resolve, reject) => {
    if(isNaN(data))
    {
    reject('error');
    } 
    else if(data%2 === 0) {
    setTimeout(reject, 2000, 'even');
    } else {
    setTimeout(resolve, 1000, 'odd');
    }
    });
  }
  myPromise()