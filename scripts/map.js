//"reveals" a div by making it the top layer.
function revealDiv(divName)
{
    document.getElementById(divName).style.zIndex = "3";
}

//hides a div by lowering the z-index.
function hideDiv(divName)
{
    document.getElementById(divName).style.zIndex = "-999";
}
