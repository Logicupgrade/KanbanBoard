

//read state file and generate Kanban



function addColumnDisplay( columnId, columnTitle, columnPosition, currentNumCols )
{
    let Col = document.getElementById("columns-container");

    //adding space for column
    Col.setAttribute("style","grid-template-columns:repeat("+ (currentNumCols+1) +",180px)");
    
    Col.insertAdjacentHTML
    ( 
        "beforeend",

        `
            <div class="column" id="col_`+ columnId +`">
                <h1>`+ columnTitle + `</h1>
                <div class="empty"></div>
                <div class="empty"></div>
                <div class="empty"></div>
                <div class="empty"></div>
                <div class="empty"></div>
                <div class="empty"></div>
            </div>
        `
    );
};

///***ended editing here*************** */
function editColumnTitleDisplay(columnId)
{
    let temp_Col = document.getElementById( "col_" + columnPosition );

    console.log(Col.firstChild.firstChild);
    `
        <h1></h1>
    `
}

function rearangeColumnDisplay()
{
    let temp_Col = document.getElementById( "col_" + columnPosition );
}