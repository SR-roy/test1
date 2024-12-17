let card =document.querySelectorAll(".slider");
let cardChallenge = document.querySelectorAll(".card");
let connect= document.getElementById("connect");
let count=0;

card.forEach(function(cards, index){
     cards.style.left= `${index*100}%`

})

function myFun(){
   card.forEach(function(curVal){
     curVal.style.transform=`translateX(-${100*count}%)`
   })
}
setInterval(function(){
    count++;
    if(count == card.length){
        count=0
    }
   myFun()
},2000)



//card challenge
cardChallenge.forEach(function(detail) {
   detail.addEventListener("click",function(){
       document.querySelector(".container").innerHTML="";

       let div=document.createElement("div")
       div.classList.add("detailCard");
       div.innerHTML=`
       <h2>challenges</h2>
       <p>12 weeks</p>
       <img src=${detail.firstElementChild.src} alt ="">
       <h3>About</h3>
       <p>When you challenge yourself you will know your ability to do something.
         It's a 12 weeks challenge, ready to create a helathy option for you.</p>
       <button>join</button>
       <a href="">Back</a>`

       document.querySelector("body").appendChild(div)
       console.log(detail.firstElementChild);
   })
})

//javascript for form//

connect.addEventListener("click",function(){
  let name= document.getElementById("name");
  let email= document.getElementById("email");
  let address= document.getElementById("address");

  if(name.value=="" || email.value=="" || address.value==""){
    alert("Please fill out the form")
  }
  else{
    alert("Thanks for joining with us")
  }

})

// for making the buy now button clickable
document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".buyNowButton");

  buttons.forEach(function(button) {
     button.addEventListener("click", function(){
       window.location.href = "basicplan.html";
     });
  });
});

// for making the navbar responsive
document.addEventListener("DOMContentLoaded", function() {
  const bar = document.getElementById("bar");
  const navMenu = document.getElementById("navMenu");

  bar.addEventListener("click", function() {
    navMenu.classList.toggle("show");
  });
});

