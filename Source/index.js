// This Function Simply Replace the Navbar Menu's Text from "REGISTER HERE" to "REGISTER" for Better Mobile Experience
function Welcome()
{
    // just for checking function called or Not ?
    console.log("onload() Called..!");

    // Storing "REGISTER HERE" into 'txt' Variable using ID  
    let txt=document.getElementById("reg").innerText;

    console.log("text stored in txt variable =",txt);
    
    
    console.log("Replacing the Text.....");
    
    // Declared 'newtxt' variable
    // Replacing the text using replace() method
    // Storing the new text(REGISTER) into 'newtxt' Variable
    let newtxt=txt.replace("REGISTER HERE","REGISTER");

    // Finally Storing the new text(REGISTER)
    document.getElementById("reg").innerText=newtxt;
    console.log("Text Replaced with 'REGISTER'");

}






// This Function Show & Hide the EXPLORE Menu On Mouse Click
function showHide() 
{

    // to check function is called or Not ? 
    console.log("Function Called.");

    // checking the visibility of explore menu 
    // if visibility is not hidden then setting the visibility to hidden 
    if(document.getElementById("3").style.visibility!=="hidden")
    {
        document.getElementById("3").style.visibility="hidden";
    }
    else
    {
        // else set visibility of explore menu to visible
        document.getElementById("3").style.visibility="visible";
    }
}



