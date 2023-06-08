//What is a async/await? Why is async/await useful?  

const { rejects } = require("assert");
const { resolve } = require("path");

//* IS WAY TO WRITE ASYNCHRONOUS CODE THAT LOOKS SYNCHRONOUS.
//*IT IS USEFUL FOR READABILITY AND MAINTAINABLILITY, ERROR HANDLING, SYNCHRONOUS OF ASYNCHRONOUS OPERATIONS


//What are pro/cons to using async/await?
//*PROS: READABILITY AND MAINTAINABLITY, ERROR HANDLING
//*CONS: REQUIRE SUPPORT, DEBUGGING.


//Please code some examples of async/await to show to the class.

function getData() {
    return new promise ((resolve, rejects) => {
        setTimeout(() => {
            const data = "This is the resolved data";
            resolve(data);

        }, 2000);
    });
}

async function fetchData() {
    try {
        const result = await getData();
        console.log(result);
        //continuing with other operations
    }catch (error) {
        console.error(error);
    }
}
fetchData();