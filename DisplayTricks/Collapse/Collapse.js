var coll = document.getElementById("collapsible");
var colCont = document.getElementById("columns-container");
var colSpacer = document.getElementById("spacer");



coll.addEventListener("click", clicked);


function clicked() {
    this.classList.toggle("active");
    // console.log(this.parentNode.nextElementSibling.);
    var content = this.parentNode.nextElementSibling;
    if (content.style.display === "block") 
    {
        content.style.display = "none";
    } 
    else 
    {
        content.style.display = "block";
    }

    colCont.classList.toggle("slide");
/* margin:10px 0px 0px 30px; */
    //slide column-container right make room for card add
    // if (colCont.style.margin = "10px 0px 0px 220px") 
    // {
    //     colCont.style.margin = "10px 0px 0px 30px";
    // } 
    // else 
    // {
    //     colCont.style.margin = "10px 0px 0px 220px";
    // }
    
}
