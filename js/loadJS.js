
let fileArray = ["dragNDrop.js","Post.js","Column.js","KanbanBoard.js"];

fileArray.forEach(loadJSFiles);

function loadJSFiles(value)
{
    let currentJSFile = document.createElement("script");

    currentJSFile.src = "js/"+value;

    document.body.appendChild(currentJSFile);

    console.log("loaded file: "+value);
}
