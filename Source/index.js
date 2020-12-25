
// This Function Show & Hide the EXPLORE Menu On Mouse Click
function showHide() 
{

    // to check the function is called or Not ? 
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




