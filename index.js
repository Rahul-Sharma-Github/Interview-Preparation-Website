// After Loading the Website the Display property of Explore Menu will become 'none'
document.querySelector("div.grid_container-2").style.display="none";

// After Loading the Website the Display property of Registration Form will become 'none'
document.getElementById("Register").style.display="none";

// After Loading the Website the Display property of Registration Form will become 'none'
document.getElementById("aptitudeContainer").style.display="none";



// -----------------------------------------------------------




//On Every Resize Event the  Welcome() Funtion will be Call
window.addEventListener("resize", Welcome);

// This Function Simply Replace the Navbar Menu's Text from "REGISTER HERE" to "REGISTER" for Better Mobile Experience
function Welcome()
{
    // Storing Browser Width in Variable 'vw'
    let vw=document.documentElement.clientWidth;
    console.log("Window's Width is = "+vw);

    // if Browser width is less than 575.98px then 
    
    if (vw<575.98) {
        // Storing "REGISTER HERE" into 'txt' Variable using ID  
    let txt=document.getElementById("reg").innerText;


    // console.log("Replacing the Text.....");
    
    // Declared 'newtxt' variable
    // Replacing the text using replace() method
    // Storing the new text(REGISTER) into 'newtxt' Variable
    let newtxt=txt.replace("REGISTER HERE","REGISTER");

    // Finally Storing the new text(REGISTER) into Top Navbar
    document.getElementById("reg").innerText=newtxt;
    
    } else {
        // if Browser width is greater than 757.98px than (else Part) executes
        
        txt="REGISTER HERE"
        document.getElementById("reg").innerText=txt;
    }
}






//Function to show & hide the Explore Menu

// Storing the Element in Variable 'explore'
let explore=document.getElementById("explore");

// adding the click event on Explore Menu of Top Navbar
explore.addEventListener("click",showHide);

//Function to show & hide the Explore Menu
function showHide() 
{   
    if (document.querySelector("div.grid_container-2").style.display!=="none") {
        document.querySelector("div.grid_container-2").style.display="none";
    } else {
        document.querySelector("div.grid_container-2").style.display="grid";
        AptitudeContainer.style.display="none";
        regform.style.display="none";
    }
}







// Function to Show & Hide the Registration Form

// Storing the Elements in Variables
let regform=document.getElementById("Register");
let register=document.getElementById("reg");

// Adding the Click Event on Register Menu of Top Navbar
register.addEventListener("click",RegForm);

// Function to Show & Hide the Registration Form
function RegForm() 
{   
    console.log(document.getElementById("Register"));

    if (regform.style.display!=="none") {
        regform.style.display="none";
    } else {
        regform.style.display="flex";
        document.querySelector("div.grid_container-2").style.display="none";
        AptitudeContainer.style.display="none";
    }
    
}









//Function to show & hide the Aptitude Test Page

// Storing Elements in Variable

// storing 3 Classes of different <a> tag but with same name in 3 different Variable
let aptitudeMenu=document.getElementsByClassName("aptMenu")[0];

let aptitudeMenu1=document.getElementsByClassName("aptMenu1")[0];

let aptitudeMenu2=document.getElementsByClassName("aptMenu2")[0];

// storing aptitudeContainer in AptitudeContainer Variable
let AptitudeContainer=document.getElementById("aptitudeContainer");


// function to show & hide the Aptitude Test Page
aptitudeMenu.addEventListener("click",aptitudeShowHide);
aptitudeMenu1.addEventListener("click",aptitudeShowHide);
aptitudeMenu2.addEventListener("click",aptitudeShowHide);

function aptitudeShowHide(){
    if (AptitudeContainer.style.display!=="none") {
        AptitudeContainer.style.display="none";
        
    } else {
        AptitudeContainer.style.display="block";
        regform.style.display="none";
        document.querySelector("div.grid_container-2").style.display="none";
    }
}




// function to scroll horizontally left & Right on button Click

// storing the previous & Next Button element in Variable
let pBtn=document.getElementById("pBtn");
let nBtn=document.getElementById("nBtn");

let listContain=document.getElementById("listContain");

nBtn.addEventListener("click",function(){
    listContain.scrollLeft += 100;
})

pBtn.addEventListener("click",function(){
    listContain.scrollLeft -= 100;
})




