"use strict"; (function() { // Your code here!

const buttonEl = document.querySelector("button");
const menu = document.querySelector(".menu-link");

buttonEl.addEventListener("click", function() {
menu.classList.toggle("active");
});


const modalEl = document.querySelector('.modal');
const openEl = document.querySelector('.open');
const closeEl = document.querySelector('.close');

openEl.addEventListener('click', () => { modalEl.showModal(); });
closeEl.addEventListener('click', () => { modalEl.close(); });


const formEl = document.querySelector('.register');
const emailEl = document.querySelector('.register__email');
const confirmEl = document.querySelector('.register__confirm');
const emailErrorEl = document.querySelector('.register-email__error');
const confirmErrorEl = document.querySelector('.register-confirm__error');

emailEl.addEventListener('change', (event) => {
 if(!event.target.value)
 emailErrorEl.innerText="This field is required";
 else if(!emailEl.value.includes("@")){
 emailErrorEl.innerText="This field be a valid email address include @";
  }
 else{
 emailErrorEl.innerText="";}
 });

 confirmEl.addEventListener('change', (event) => {
 if(confirmEl.value!=emailEl.value)
 confirmErrorEl.innerText="This field should match your email";
 else{
 confirmErrorEl.innerText="";}
  });

formEl.addEventListener('submit', (event) => {
 let isInvalid = false ;
 if(!emailEl.value){
 emailErrorEl.innerText="This field is required";
 isInvalid = true;
 }
 else if(!emailEl.value.includes("@")){
  emailErrorEl.innerText="This field be a valid email address include @";
  isInvalid = true;
  }
 if(confirmEl.value!=emailEl.value){
  confirmErrorEl.innerText="This field should match your email";
  isInvalid = true;
  }

 if( isInvalid ) {
 event.preventDefault(); } });
})();