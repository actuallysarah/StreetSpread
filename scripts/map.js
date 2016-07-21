//"reveals" a div by making it the top layer.
function revealDiv(divName)
{
    document.getElementById(divName).style.display = "block";
}

//hides a div by lowering the z-index.
function hideDiv(divName)
{
    document.getElementById(divName).style.display = "none";
}
