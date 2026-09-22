// Contact Form

const form=document.getElementById("contactForm");


form.addEventListener("submit",function(e){

e.preventDefault();


alert("Message sent successfully!");

form.reset();

});



// Active navigation highlight

const links=document.querySelectorAll("nav a");


links.forEach(link=>{

link.addEventListener("click",()=>{

links.forEach(l=>l.style.color="white");

link.style.color="#00ffff";

});

});