

//read state file and generate Kanban


function displayColumn( columnId, columnTitle, columnPosition )
{
    var Col = document.getElementById("columns-container");
    
    Col.insertAdjacentHTML( "beforeend",

    `
        <div class="column">
            <h1>New Column</h1>
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