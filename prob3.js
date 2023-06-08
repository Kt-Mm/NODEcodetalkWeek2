//The “this” keyword works differently in arrow functions vs regularly 
//declared functions.  Explain how the “this” keyword works differently 
//in arrow functions vs normal functions.  

//* THIS IN A REGULAR FUNCTION IS DYNAMIC MEANING: THE VALUE OF "THIS" IS DEPENDENT ON HOW THE FUNCTION IS INVOKED.

function myFunction() {
    console.log(this)
}
myFunction();

//*THIS IN A ARROW FUNCTION DOES NOT DEFINE ITS OWN EXECUTION CONTEXT BUT RESOLVES TO THE ONE FROM THE OUTER FUNCTION.
const myObject = {
    myMethod (items) {
        console.log(this); //logs myObject
        const callback = () => {
            console.log(this); //logs myObjects
        };
        items.forEach(callback);   
    }
}
myObject.myMethod([1, 2, 3]);

//Write some code that shows 
//that you understand the difference between how the “this” keyword is 
//used.  Make sure to go into detail as you explain your code to the 
//class.