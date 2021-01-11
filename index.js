// Default Properties

// After Loading the Website the Display property of Explore Menu will become 'none'
document.querySelector("div.grid_container-2").style.display="none";

// After Loading the Website the Display property of Registration Form will become 'none'
document.getElementById("Register").style.display="none";

// After Loading the Website the Display property of Aptitude Test Page will become 'none'
document.getElementById("aptitudeContainer").style.display="none";

// After Loading the Website the Display property of HR interview Page will become 'none'
document.getElementById("HRmainContainer").style.display="none";

// After Loading the Website the Display property of C Technical Test Page will become 'none'
document.getElementById("CmainContainer").style.display="none";

// After Loading the Website the Display property of Java Technical Test Page will become 'none'
document.getElementById("JmainContainer").style.display="none";

// After Loading the Website the Display property of Python Technical Test Page will become 'none'
document.getElementById("PmainContainer").style.display="none";

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
        document.getElementById("2").style.display="grid";
    } else {
        document.querySelector("div.grid_container-2").style.display="grid";
        AptitudeContainer.style.display="none";
        regform.style.display="none";
        document.getElementById("2").style.display="none";
        HRmainContainer.style.display="none";
        CmainContainer.style.display="none";
        JmainContainer.style.display="none";
        PmainContainer.style.display="none";
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
        document.getElementById("2").style.display="grid";
    } else {
        regform.style.display="flex";
        document.querySelector("div.grid_container-2").style.display="none";
        AptitudeContainer.style.display="none";
        document.getElementById("2").style.display="none";
        HRmainContainer.style.display="none";
        CmainContainer.style.display="none";
        JmainContainer.style.display="none";
        PmainContainer.style.display="none";
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
        document.getElementById("2").style.display="grid";
    } else {
        AptitudeContainer.style.display="block";
        regform.style.display="none";
        document.querySelector("div.grid_container-2").style.display="none";
        document.getElementById("2").style.display="none";
        HRmainContainer.style.display="none";
        CmainContainer.style.display="none";
        JmainContainer.style.display="none";
        PmainContainer.style.display="none";
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














//Function to show & hide the HR Interview Page

// Storing Elements in Variable

// storing 3 Classes of different <a> tag but with same name in 3 different Variable
let hrMenu=document.getElementsByClassName("HRmenu")[0];

let hrMenu1=document.getElementsByClassName("HRmenu1")[0];

let hrMenu2=document.getElementsByClassName("HRmenu2")[0];

// storing HRmainConatianer in HRmainContainer Variable
let HRmainContainer=document.getElementById("HRmainContainer");


// function to show & hide the HR Interview Page
hrMenu.addEventListener("click",HRShowHide);
hrMenu1.addEventListener("click",HRShowHide);
hrMenu2.addEventListener("click",HRShowHide);

function HRShowHide(){
    if (HRmainContainer.style.display!=="none") {
        HRmainContainer.style.display="none";
        document.getElementById("2").style.display="grid";
    } else {
        HRmainContainer.style.display="block";

        // Using Ajax for Asynchronous call to server for getting required data

        // Storing HRquestionAnswerContainer in qaContainer variable
        let qaContainer=document.getElementById("HRquestionAnswerContainer");
        qaContainer.innerHTML="";

        // initialising the xmlhttp Object
        var xmlhttp = new XMLHttpRequest();

        // everytime when state will be change the function will automatically run
        xmlhttp.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {
              var myObj = JSON.parse(this.responseText);
          
              let htmlstring="";
              for (let i = 0; i < myObj.length; i++) {
                 htmlstring=`
                 <div class="list">
                 <p class="question"><span class="qn">${i+1}</span><span class="q">${myObj[i].question}</span></p>
                 <p class="example">${myObj[i].example.join("<br><br>")}</p>
                 </div>
                 `;
                
                 qaContainer.insertAdjacentHTML('beforeend',htmlstring);
              }
              
            }
          };
          xmlhttp.open("GET", "Database/HR Interview Questions/HR Interview.json", true);
          xmlhttp.send();





        regform.style.display="none";
        document.querySelector("div.grid_container-2").style.display="none";
        document.getElementById("2").style.display="none";
        AptitudeContainer.style.display="none";
        CmainContainer.style.display="none";
        JmainContainer.style.display="none";
        PmainContainer.style.display="none";
    }
}
















//Function to show & hide the C Technical Test Page

// Storing Elements in Variable

// Storing menu in Cmenu variable
let Cmenu=document.getElementsByClassName("Cmenu")[0];

// storing CmainConatianer in CmainContainer Variable
let CmainContainer=document.getElementById("CmainContainer");


// function to show & hide the C Technical Test Page
Cmenu.addEventListener("click",CShowHide);

function CShowHide(){
    if (CmainContainer.style.display!=="none") {
        CmainContainer.style.display="none";
        document.getElementById("2").style.display="grid";
    } else {
        CmainContainer.style.display="block";
        regform.style.display="none";
        document.querySelector("div.grid_container-2").style.display="none";
        document.getElementById("2").style.display="none";
        AptitudeContainer.style.display="none";
        HRmainContainer.style.display="none";
        JmainContainer.style.display="none";
        PmainContainer.style.display="none";
    }
}













//Function to show & hide the Java Technical Test Page

// Storing Elements in Variable

// Storing menu in Jmenu variable
let Jmenu=document.getElementsByClassName("Jmenu")[0];

// storing JmainConatianer in JmainContainer Variable
let JmainContainer=document.getElementById("JmainContainer");


// function to show & hide the Java Technical Test Page
Jmenu.addEventListener("click",JShowHide);

function JShowHide(){
    if (JmainContainer.style.display!=="none") {
        JmainContainer.style.display="none";
        document.getElementById("2").style.display="grid";
    } else {
        JmainContainer.style.display="block";
        regform.style.display="none";
        document.querySelector("div.grid_container-2").style.display="none";
        document.getElementById("2").style.display="none";
        AptitudeContainer.style.display="none";
        HRmainContainer.style.display="none";
        CmainContainer.style.display="none";
        PmainContainer.style.display="none";
    }
}













//Function to show & hide the Python Technical Test Page

// Storing Elements in Variable

// Storing menu in Pmenu variable
let Pmenu=document.getElementsByClassName("Pmenu")[0];

// storing PmainConatianer in PmainContainer Variable
let PmainContainer=document.getElementById("PmainContainer");


// function to show & hide the Python Technical Test Page
Pmenu.addEventListener("click",PShowHide);

function PShowHide(){
    if (PmainContainer.style.display!=="none") {
        PmainContainer.style.display="none";
        document.getElementById("2").style.display="grid";
    } else {
        PmainContainer.style.display="block";
        regform.style.display="none";
        document.querySelector("div.grid_container-2").style.display="none";
        document.getElementById("2").style.display="none";
        AptitudeContainer.style.display="none";
        HRmainContainer.style.display="none";
        CmainContainer.style.display="none";
        JmainContainer.style.display="none";
    }
}













// function to Show the different AJAX data into Aptitude Test's qaContainer according to the Question Categories

// // Storing MainQAContainer in variable

let MainQAContainer=document.getElementById("MainQAContainer");

// Function to show Ajax Data in MainQAContainer of Aptitude Test Page

function aptAjaxDataShow(fileName) {
    MainQAContainer.innerHTML="";
    
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);

    let htmlstring="";
    for (let i = 0; i < myObj.length; i++) {
       htmlstring=`
       <div class="list">
       <p class="question"><span class="qn">${i+1}</span><span class="q">${myObj[i].question}</span></p>
       <p class="option">${myObj[i].option.join("<br>")}</p>
       <p class="Answer">Answer = ${myObj[i].answer}</p>
       <details>
       <summary>Explanation</summary>
       <p class="solu">${myObj[i].solution}</p>
       </details>
       
       </div>
       `;
      
       MainQAContainer.insertAdjacentHTML('beforeend',htmlstring);
    }
    
  }
  
};
    xmlhttp.open("GET", `Database/Aptitude Test/Question Categories/${fileName}.json`, true);
    xmlhttp.send();
    
}