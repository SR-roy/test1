//main function to validate form inputs

function validateForm(event){
    event.preventDefault();  //prevent the from form submitting by deafault

//get form Input elements
const name=document.getElementById("cardholder-name");
const cardNumber=document.getElementById("card-number");
const expiryDate=document.getElementById("expiry-date");
const cvv =document.getElementById("cvv");
const amount=document.getElementById("amount");

//validation pattern for each field
const namePattern = /^[a-zA-Z\s]{3,}$/; //validate name with at least 3 alphabetic character
const cardNumberPattern = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/; //card number format: 1234 5678 9012 3456
const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/; //Expiry date format: MM/YY
const cvvPattern = /^\d{3}$/; // cvv format: 3digits
const amountPattern = /^\$?\d+(\.\d{2})?$/;  // Amount format: 123.45


// flag to track if the form is valid

let isValid = true;




//resetting any existing error message
document.querySelectorAll(".error").forEach((error) => error.textContent ="");


//validiting cardholder name
if(!namePattern.test(name.value.trim())){
    document.getElementById("name-error").textContent= "Please enter a valid name (minimum 3 characters).";
    isValid = false
}


//validating card number
if(!cardNumberPattern.test(cardNumber.value.trim())){
    document.getElementById("card-number-error").textContent= "Please enter a valid Card number in format 1234 5678 9012 3456";
    isValid = false
}

//validating expiry date
if(!expiryDatePattern.test(expiryDate.value.trim())){
    document.getElementById("expiry-date-error").textContent= "Please enter a valid expiry date in MM/YY format";
    isValid = false
}

//validating cvv
if(!cvvPattern.test(cvv.value.trim())){
    document.getElementById("cvv-error").textContent= "Please enter a valid 3 digits";
    isValid = false
}
//validating Amount
if(!amountPattern.test(amount.value.trim())){
    document.getElementById("amount-error").textContent= "Please enter a valid amount";
    isValid = false
}

//if the form is valid, submit the form
if(isValid){
    alert("payment Successful!");
    document.querySelector("form").submit();  // submitting the form
}


}
