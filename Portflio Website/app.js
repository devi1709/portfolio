var tablinks=document.getElementsByClassName('tablinks');
var tabcontents=document.getElementsByClassName('tabcontents');
function opentab(tabname){
     for(tablink of tablinks){
        tablink.classList.remove("active-link")
     }
     for(tabcontent of tabcontents){
        tabcontent.classList.add("active-tab")
     }
     e.currentTarget.classList.add("active-link");
     document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu=document.getElementById("sidemenu");

function openmenu(){
   sidemenu.style.right="0";
}
function closemenu(){
   sidemenu.style.right="-200px";
}

const navbar=document.querySelector('nav');
const toplink=document.querySelector('.top-link');


window.addEventListener("scroll",function(){
    const scrollHeight=window.pageYOffset;
    const navHeigtht=navbar.getBoundingClientRect().height;
    if(scrollHeight>navHeigtht){
        navbar.classList.add('fixed-nav');
    }
    else{
        navbar.classList.remove('fixed-nav');
    }
})



const scriptURL = 'https://script.google.com/macros/s/AKfycbxBBbCiOmXNT5f8BYyMXSX7Lcztel-13p8EdlVJ0plpR5qkBDEA0kNjGy_FL0il--vHjA/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
         msg.innerHTML="Message sent successfully"
         setTimeout(function(){
            msg.innerHTML=""
         },5000)
         form.reset()
      })
      .catch(error => console.error('Error!', error.message))
})