//What is a promise? What are promises used for?
// * A PROMISE IS A PLACEHOLDER FOR A VALUE THAT WILL BE AVAILABLE
// IN THE FUTURE. IT IS USED TO ALLOWS US TO HANDLE THE RESULTS OF AN ASYNCHRONOUS TASK
// ONCE IT HAS COMPLETED OR AN ERROR HAS HAPPEN.

//What are pro/cons to using a promise? 
//*PROS: EASY TO READ AND MAINTAIN, HANDLE ERRORS, CAN AVOID CALL BACK HELL, ITS REUSEABLE, LAST IS CONTROL FLOW
//*CONS: HARD TO DEBUG ERRORS,BROWERS COMPATIBLITYIY
//Please code some examples of promises to show to the class. 

const getData = () => {
    return new promiseHooks((resolve, reject)=> {
        setTimeout(()=>{
            const data = ' this is the resolved data';
            //Check if the data retrieval was successful
            if (data) {
                resolve(data) // resolve the promise with the data
            }else{
                const error = new Error('Data retrieval failed');
                reject(error); //rejects the promise with error
            }
            
        }, 2000);
    });
};

//use the promise
getData()
.then((data) =>{
    console.log(data); //handling the resolve data
})
.catch((error) =>{
    console.error(error); // handling errors during the promise.
})
//Make sure to go into detail as you explain your code to the class