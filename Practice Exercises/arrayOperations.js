//Iterate through array and print the array
function printArray()
{
let people = ["Greg", "Mary", "Devon", "James"];
for(let i =0; i< people.length; i++)
{
    console.log(people[i]);
}
}
printArray()

function shiftArray(){
    var fruits = ["Apple", "Mango", "Oranges", "Banana"];
    var shifted = fruits.shift();
    console.log(fruits);
    console.log(shifted);
}
shiftArray()

function popArray(){
    let people = ["Greg", "Mary", "Devon", "James"];
    popped = people.pop();
    console.log(people)
    console.log(popped)
}
popArray()

function unshiftArray(){
    let people = ["Greg", "Mary", "Devon", "James"];
    unshifted = people.unshift("Matt");
    console.log(people)
    console.log(unshifted)
}
unshiftArray()

function pushArray(){
    var fruits = ["Apple", "Mango", "Oranges", "Banana"];
    var pushed = fruits.push("Apricot")
    console.log(fruits)
    console.log(pushed)
}
pushArray()

// iterate through this array and after console.log-ing "Mary", exit from the loop.
function arrayIterate(){
    let people = ["Greg", "Mary", "Devon", "James"];
    for(let i =0; i< people.length; i++){
        if(i > 1){
            break;
        }
        console.log(people[i]);
    }
}
arrayIterate()

//Write the command to make a copy of the array using slice. The copy should NOT include "Greg" or "Matt"
function arraySlice(){
    let people = ["Matt","Greg", "Mary", "Devon", "James"];
    sliced = people.slice(2);
    console.log(people)
    console.log(sliced)
}
arraySlice()

// command that gives the indexOf where "Foo"
 function arrayIndex(){
    let people = ["Matt","Greg", "Mary", "Devon", "James"];
    var i = people.indexOf("Foo");
    console.log(i)
 }
 arrayIndex()

 //Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie".
 // Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
 function arrayRedefine(){
    let people = ["Greg", "Mary", "Devon", "James"];
    var People1 = people.splice(2,1,"Elizabeth", "Artie");
    console.log(people)
    console.log(People1)
 }
 arrayRedefine()

 function createVariable(){
    let people = ["Greg", "Mary", "Devon", "James"];
    let withBob = people.concat("Bob");
    console.log(withBob)   
 }
 createVariable()