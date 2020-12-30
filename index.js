// After Loading the Website the Display property of Explore Menu will become 'none'
document.querySelector("div.grid_container-2").style.display="none";
// document.getElementById("Register").style.display="none";








//On Every Resize Event the  Welcome() Funtion will be Call
window.addEventListener("resize", Welcome);
// This Function Simply Replace the Navbar Menu's Text from "REGISTER HERE" to "REGISTER" for Better Mobile Experience
function Welcome()
{
    // document.querySelector("div.grid_container-2").style.display="none";
    // just for checking EventListner called or Not ?
    // console.log("EventListner Called..!");

    // just for checking function called or Not ?
    // console.log("onload() Called..!");

    

    // Storing Browser Width in Variable 'vw'
    let vw=document.documentElement.clientWidth;
    console.log("Window's Width is = "+vw);

    // if Browser width is less than 575.98px then 
    
    if (vw<575.98) {
        // Storing "REGISTER HERE" into 'txt' Variable using ID  
    let txt=document.getElementById("reg").innerText;

    // console.log("text stored in txt variable =",txt);
    
    
    // console.log("Replacing the Text.....");
    
    // Declared 'newtxt' variable
    // Replacing the text using replace() method
    // Storing the new text(REGISTER) into 'newtxt' Variable
    let newtxt=txt.replace("REGISTER HERE","REGISTER");

    // Finally Storing the new text(REGISTER)
    document.getElementById("reg").innerText=newtxt;
    // console.log("Text Replaced with 'REGISTER'");
    } else {
        // if Browser width is greater than 757.98px than False part(else) executes
        // console.log("Window's Width is Greater than 575.98px");
        txt="REGISTER HERE"
        document.getElementById("reg").innerText=txt;
        // console.log(txt);
    }
}






// On Click Event on Explore Menu the showHide() will be call
let explore=document.getElementById("explore");
// console.log(explore);

explore.addEventListener("click",showHide);

// This Function will Show & Hide the EXPLORE Menu On Mouse Click
function showHide() 
{   
    console.log(document.querySelector("div.grid_container-2"));

    if (document.querySelector("div.grid_container-2").style.display!=="none") {
        document.querySelector("div.grid_container-2").style.display="none";
    } else {
        document.querySelector("div.grid_container-2").style.display="grid";
    }
    
}










let regform=document.getElementById("Register");
let register=document.getElementById("reg");

register.addEventListener("click",RegForm);
function RegForm() 
{   
    console.log(document.getElementById("Register"));

    if (regform.style.display!=="none") {
        regform.style.display="none";
    } else {
        regform.style.display="flex";
    }
    
}
