const inpute =document.querySelector('.input-email');
const errour=document.querySelector('.Eroure1Eamil');
const Erroure=document.querySelector('.Erroure');
const btn=document.querySelector('.cont2');
function valid(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inpute.value.match(mailformat)){
    
    }else{
       Erroure.style.display="block"
        inpute.style.color="hsl(0, 93%, 68%)";
    inpute.style.border=" 2px solid hsl(0, 93%, 68%)";
    errour.textContent="please provide a valid email";

    }
}
btn.addEventListener('click',valid);
