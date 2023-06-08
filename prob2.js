//What is a callback? What is callback hell? 
//*CALLBACK IS A FUNCTION THAT GETS PASSED AS AN ARGUMENT TO ANOTHER FUNCTION AND IS CALLED BACK LATER
//* CALLBACK HELL: NESTED CALLBACKS STACKED ON TOP OF EACH OTHER.

//Why does callback hell occur and why should we avoid callback hell?  
//*OCCURS WHEN MULIPLE CALLABCKS ARE NESTED ON TOP OF EACH OTHER
//*TO AVOID: USE PROMISE AND ASYNC/AWAIT

//Please code an example of callback hell to show to the class. 
asyncOperation((error, result1) => {
    if(error) {
        //this will handle error
    }else {
        asyncOperation2(result1 (error, result2) =>{
        if (error) {
            //this will handle error for asyncOp2
        }else {
            asyncOperation3 (result3 (error, result3) =>{
        if (error) {

        }else {
            //it will continue with more nested callbacks.
        }
            });
        }
        });
    }
});


//Make sure to go into detail as you explain your code to the class.