// javascript document

// access the jason file using an xhr object

let requestURL= ""; // url jau  jason github wala

// create new xhr  object, xhr objext allows us to fethc data without a page refresh


let request= new XMLHttpRequest();
request.open('GET', requestURL);   
//request type

request.responseType= 'json';
// send the request usingg the send method

request.send();


//  wait for the request to be returned, store the response in a variable , invoke pizza types function with pizza types as argument

request.onload= function(){

    let plentyPizza = request.response;
    console.log(plentyPizza);
    pizzaTypes(plentyPizza);
};

function pizzaTypes(jsonObj){

let pizzaTypes= jsonObj.

}