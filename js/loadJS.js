
let ModelArray =["Post.js", "Column.js"];
let ViewArray = ["DisplayKanBan.js", "dragNDrop.js"];
let ControllerArray = ["KanbanBoard.js"];

ModelArray.forEach(loadJSFiles,"js/Model/");
ViewArray.forEach(loadJSFiles,"js/View/");
ControllerArray.forEach(loadJSFiles,"js/Controller/");

function loadJSFiles(value)
{
    let currentJSFile = document.createElement("script");

    currentJSFile.src = this+value;

    document.body.appendChild(currentJSFile);
}

